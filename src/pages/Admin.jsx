import { useMemo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Download, LogOut, Trash2 } from 'lucide-react';
import {
  STATUS_OPTIONS,
  deleteRegistration,
  getRegistrations,
  updateStatus,
} from '../utils/registrations.js';
import { isLoggedIn, logout } from '../utils/auth.js';
import './admin.css';

function formatDate(iso) {
  return new Date(iso).toLocaleString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function whatsappLink(number) {
  let digits = String(number).replace(/\D/g, '');
  if (digits.startsWith('0')) digits = `62${digits.slice(1)}`;
  return `https://wa.me/${digits}`;
}

function downloadCsv(rows) {
  const header = [
    'Tanggal',
    'Nama Orang Tua',
    'WhatsApp',
    'Email',
    'Alamat',
    'Nama Anak',
    'Usia',
    'Paket',
    'Jadwal',
    'Catatan',
    'Status',
  ];
  const escape = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const lines = rows.map((r) =>
    [
      formatDate(r.createdAt),
      r.namaOrtu,
      r.whatsapp,
      r.email,
      r.alamat,
      r.namaAnak,
      r.usia,
      r.paket,
      r.jadwal,
      r.catatan,
      r.status,
    ]
      .map(escape)
      .join(',')
  );
  const csv = `\uFEFF${[header.map(escape).join(','), ...lines].join('\n')}`;
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'data-pendaftaran-cerdas-ceria.csv';
  link.click();
  URL.revokeObjectURL(url);
}

export default function Admin() {
  // Belum login? arahkan ke halaman login
  if (!isLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <AdminDashboard />;
}

function AdminDashboard() {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState(getRegistrations);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [openId, setOpenId] = useState(null);

  const stats = useMemo(
    () => ({
      total: registrations.length,
      baru: registrations.filter((r) => r.status === 'Baru').length,
      dihubungi: registrations.filter((r) => r.status === 'Sudah dihubungi').length,
      terdaftar: registrations.filter((r) => r.status === 'Terdaftar').length,
    }),
    [registrations]
  );

  const filtered = registrations.filter((r) => {
    const keyword = search.trim().toLowerCase();
    const matchSearch =
      !keyword ||
      [r.namaAnak, r.namaOrtu, r.whatsapp, r.paket]
        .join(' ')
        .toLowerCase()
        .includes(keyword);
    const matchStatus = statusFilter === 'Semua' || r.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  const handleDelete = (item) => {
    if (window.confirm(`Hapus pendaftaran ${item.namaAnak}?`)) {
      setRegistrations(deleteRegistration(item.id));
    }
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div>
          <h1>Data Pendaftaran</h1>
          <p>Daftar calon siswa yang mendaftar lewat formulir.</p>
        </div>

        <div className="admin-actions">
          <button
            type="button"
            className="admin-export"
            onClick={() => downloadCsv(filtered)}
            disabled={filtered.length === 0}
          >
            <Download size={14} />
            Unduh CSV
          </button>

          <button type="button" className="admin-logout" onClick={handleLogout}>
            <LogOut size={14} />
            Keluar
          </button>
        </div>
      </header>

      <div className="admin-stats">
        <div>
          <strong>{stats.total}</strong>
          <span>Total pendaftar</span>
        </div>
        <div>
          <strong>{stats.baru}</strong>
          <span>Baru</span>
        </div>
        <div>
          <strong>{stats.dihubungi}</strong>
          <span>Sudah dihubungi</span>
        </div>
        <div>
          <strong>{stats.terdaftar}</strong>
          <span>Terdaftar</span>
        </div>
      </div>

      <div className="admin-toolbar">
        <input
          type="search"
          placeholder="Cari nama anak, orang tua, atau paket"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>Semua</option>
          {STATUS_OPTIONS.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
      </div>

      {registrations.length === 0 ? (
        <div className="admin-empty">
          Belum ada pendaftaran. Data akan muncul di sini setelah ada orang tua
          yang mengisi formulir pendaftaran.
        </div>
      ) : filtered.length === 0 ? (
        <div className="admin-empty">
          Tidak ada data yang cocok dengan pencarian.
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Anak</th>
                <th>Orang Tua</th>
                <th>Paket</th>
                <th>Jadwal</th>
                <th>Status</th>
                <th aria-label="Aksi"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <FragmentRow
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() =>
                    setOpenId(openId === item.id ? null : item.id)
                  }
                  onStatus={(status) =>
                    setRegistrations(updateStatus(item.id, status))
                  }
                  onDelete={() => handleDelete(item)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="admin-footnote">
        Data tersimpan di browser ini saja (belum terhubung ke server), jadi
        hanya terlihat di perangkat yang sama.
      </p>
    </div>
  );
}

function FragmentRow({ item, isOpen, onToggle, onStatus, onDelete }) {
  return (
    <>
      <tr className={isOpen ? 'is-open' : ''}>
        <td data-label="Tanggal">{formatDate(item.createdAt)}</td>
        <td data-label="Anak">
          <button type="button" className="admin-link" onClick={onToggle}>
            {item.namaAnak}
          </button>
          <small>{item.usia} tahun</small>
        </td>
        <td data-label="Orang Tua">
          {item.namaOrtu}
          <small>
            <a href={whatsappLink(item.whatsapp)} target="_blank" rel="noreferrer">
              {item.whatsapp}
            </a>
          </small>
        </td>
        <td data-label="Paket">{item.paket}</td>
        <td data-label="Jadwal">{item.jadwal}</td>
        <td data-label="Status">
          <select
            className={`status-select status-${item.status.replace(/\s/g, '-').toLowerCase()}`}
            value={item.status}
            onChange={(e) => onStatus(e.target.value)}
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </td>
        <td>
          <button
            type="button"
            className="admin-delete"
            onClick={onDelete}
            aria-label={`Hapus pendaftaran ${item.namaAnak}`}
          >
            <Trash2 size={14} />
          </button>
        </td>
      </tr>

      {isOpen && (
        <tr className="admin-detail">
          <td colSpan={7}>
            <dl>
              <div>
                <dt>Alamat</dt>
                <dd>{item.alamat}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{item.email || '-'}</dd>
              </div>
              <div>
                <dt>Catatan</dt>
                <dd>{item.catatan || '-'}</dd>
              </div>
            </dl>
          </td>
        </tr>
      )}
    </>
  );
}
