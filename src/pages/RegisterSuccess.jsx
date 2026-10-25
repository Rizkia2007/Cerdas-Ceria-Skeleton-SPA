import { Link, Navigate, useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import './registerSuccess.css';

export default function RegisterSuccess() {
  const { state } = useLocation();

  // Kalau dibuka langsung tanpa mengisi form, kembalikan ke halaman daftar
  if (!state) {
    return <Navigate to="/pendaftaran" replace />;
  }

  const { namaAnak, namaOrtu, paket, jadwal } = state;

  return (
    <main className="success-page">
      <section className="success-card">
        <div className="success-icon">
          <CheckCircle2 size={56} strokeWidth={2} />
        </div>

        <h1>Pendaftaran Berhasil!</h1>
        <p className="success-lead">
          Terima kasih, {namaOrtu}. Pendaftaran {namaAnak} sudah kami terima.
        </p>

        <dl className="success-summary">
          <div>
            <dt>Nama Anak</dt>
            <dd>{namaAnak}</dd>
          </div>
          <div>
            <dt>Kelas / Paket</dt>
            <dd>{paket}</dd>
          </div>
          <div>
            <dt>Waktu Belajar</dt>
            <dd>{jadwal}</dd>
          </div>
        </dl>

        <p className="success-note">
          Tim kami akan menghubungi Anda melalui WhatsApp untuk konfirmasi
          selanjutnya.
        </p>

        <Link to="/" className="success-button">
          Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}
