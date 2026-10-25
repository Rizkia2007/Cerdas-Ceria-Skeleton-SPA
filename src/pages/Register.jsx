import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronDown } from 'lucide-react';
import { addRegistration } from '../utils/registrations.js';
import './register.css';

const packages = [
  {
    name: 'Kelas Membaca',
    description: 'Belajar membaca dengan cara yang menyenangkan',
    price: 'Rp. 150.000',
    features: [
      'Mengenal huruf dan bunyinya',
      'Membaca suku kata dan kata',
      'Latihan Membaca Rutin',
      'Melatih kelancaran membaca',
    ],
  },
  {
    name: 'Kelas Menulis',
    description: 'Melatih kemampuan menulis anak',
    price: 'Rp. 150.000',
    features: [
      'Mengenal bentuk huruf',
      'Latihan menulis rutin',
      'Menulis kata dan kalimat',
      'Melatih kerapihan tulisan',
    ],
  },
  {
    name: 'Kelas Berhitung',
    description: 'Belajar berhitung dasar sampai lancar',
    price: 'Rp. 150.000',
    features: [
      'Mengenal angka dan bilangan',
      'Belajar berbagai perhitungan',
      'Latihan soal secara rutin',
      'Melatih kelancaran berhitung',
    ],
  },
  {
    name: 'Paket Lengkap',
    description: 'Satu paket baca, tulis, hitung',
    price: 'Rp. 350.000',
    features: [
      'Belajar baca, tulis, hitung',
      'Materi dan latihan beragam',
      'Latihan rutin tiap pertemuan',
      'Belajar lengkap dan terarah',
    ],
  },
];

const schedules = ['15.00–17.00', '16.00–18.00', '17.00–19.00'];

export default function Register() {
  const [selectedPackage, setSelectedPackage] = useState('Paket Lengkap');
  const [selectedSchedule, setSelectedSchedule] = useState(schedules[0]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const registration = {
      namaOrtu: data.get('namaOrtu'),
      whatsapp: data.get('whatsapp'),
      email: data.get('email'),
      alamat: data.get('alamat'),
      namaAnak: data.get('namaAnak'),
      usia: data.get('usia'),
      paket: selectedPackage,
      jadwal: selectedSchedule,
      catatan: data.get('catatan'),
    };

    // Simpan supaya muncul di halaman admin
    addRegistration(registration);

    navigate('/pendaftaran-berhasil', {
      state: {
        namaOrtu: registration.namaOrtu,
        namaAnak: registration.namaAnak,
        paket: registration.paket,
        jadwal: registration.jadwal,
      },
    });
  };

  return (
    <main className="register-page">
      {/* Banner Pendaftaran */}
      <section className="register-banner">
        <div className="register-character">
          {/* Ganti placeholder ini dengan <img src={...} alt="Maskot Cerdas Ceria" /> */}
          <div className="placeholder-character">
            ✦<span>☺</span>✦
          </div>
        </div>

        <div>
          <span className="register-badge">Yuk, Daftar Sekarang</span>
          <h1>Daftar Kursus Cerdas Ceria</h1>
          <p>
            Yuk, daftarkan si kecil untuk belajar membaca, menulis,
            dan berhitung dengan cara yang menyenangkan
          </p>
        </div>
      </section>

      {/* Form Pendaftaran */}
      <form className="register-card" onSubmit={handleSubmit}>
        {/* 01 Data Orang Tua */}
        <div className="form-section">
          <div className="form-section-title">
            <span>01</span>
            <h2>Data Orang Tua</h2>
          </div>

          <div className="form-grid">
            <label>
              <span>Nama Lengkap <b>*</b></span>
              <input
                type="text"
                name="namaOrtu"
                required
                placeholder="Nama lengkap orang tua"
              />
            </label>

            <label>
              <span>Nomor WhatsApp <b>*</b></span>
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="Contoh: 0812 3456 7890"
              />
            </label>

            <label>
              <span>Email <small>(opsional)</small></span>
              <input type="email" name="email" placeholder="nama@email.com" />
            </label>

            <label>
              <span>Alamat Domisili <b>*</b></span>
              <input
                type="text"
                name="alamat"
                required
                placeholder="Alamat tempat tinggal"
              />
            </label>
          </div>
        </div>

        {/* 02 Data Anak */}
        <div className="form-section">
          <div className="form-section-title">
            <span>02</span>
            <h2>Data Anak</h2>
          </div>

          <div className="form-grid">
            <label>
              <span>Nama Anak <b>*</b></span>
              <input
                type="text"
                name="namaAnak"
                required
                placeholder="Nama lengkap anak"
              />
            </label>

            <label>
              <span>Usia <b>*</b></span>
              <div className="select-wrapper">
                <select name="usia" defaultValue="" required>
                  <option value="" disabled>
                    Pilih usia anak (4–8 tahun)
                  </option>
                  <option value="4">4 tahun</option>
                  <option value="5">5 tahun</option>
                  <option value="6">6 tahun</option>
                  <option value="7">7 tahun</option>
                  <option value="8">8 tahun</option>
                </select>
                <ChevronDown size={14} />
              </div>
            </label>
          </div>
        </div>

        {/* 03 Pilih Kelas / Paket */}
        <div className="form-section">
          <div className="form-section-title">
            <span>03</span>
            <h2>Pilih Kelas / Paket</h2>
          </div>

          <div className="package-grid">
            {packages.map((item) => {
              const isSelected = selectedPackage === item.name;

              return (
                <article
                  key={item.name}
                  className={`package-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedPackage(item.name)}
                >
                  <div className="package-radio" aria-hidden="true"></div>

                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <div className="package-price">
                    <strong>{item.price}</strong>
                    <small>/ Bulan</small>
                  </div>

                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}>
                        <Check />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="outline-button"
                    aria-pressed={isSelected}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(item.name);
                    }}
                  >
                    {item.name === 'Paket Lengkap' ? 'Pilih Paket' : 'Pilih Kelas'}
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        {/* 04 Pilih Waktu Belajar */}
        <div className="form-section">
          <div className="form-section-title schedule-title">
            <span>04</span>
            <h2>Pilih Waktu Belajar</h2>
            <small>2 jam setiap pertemuan</small>
          </div>

          <div className="schedule-grid">
            {schedules.map((schedule) => (
              <label className="schedule-option" key={schedule}>
                <input
                  type="radio"
                  name="schedule"
                  checked={selectedSchedule === schedule}
                  onChange={() => setSelectedSchedule(schedule)}
                />
                <span>{schedule}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Catatan */}
        <div className="form-section">
          <label className="notes-field">
            <span>Catatan Tambahan <small>(opsional)</small></span>
            <textarea
              name="catatan"
              placeholder="Ceritakan kebutuhan atau hal yang perlu kami ketahui tentang anak."
              rows="4"
            ></textarea>
          </label>
        </div>

        {/* Tombol */}
        <button type="submit" className="register-submit">
          Daftar Sekarang →
        </button>

        <p className="register-note">
          Setelah mendaftar, tim kami akan menghubungi Anda melalui WhatsApp.
        </p>
      </form>
    </main>
  );
}
