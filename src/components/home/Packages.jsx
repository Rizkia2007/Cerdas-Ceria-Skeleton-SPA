import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleFill } from 'react-bootstrap-icons';

const packages = [
  {
    title: 'Kelas Membaca',
    desc: 'Belajar membaca dengan cara menyenangkan',
    price: 'Rp. 150.000',
    features: [
      'Mengenal huruf dan bunyinya',
      'Membaca suku kata dan kata',
      'Latihan membaca rutin',
      'Melatih kelancaran membaca',
    ],
  },
  {
    title: 'Kelas Menulis',
    desc: 'Melatih kemampuan menulis anak',
    price: 'Rp. 150.000',
    features: [
      'Mengenal bentuk huruf',
      'Latihan menulis rutin',
      'Menulis kata dan kalimat',
      'Melatih kerapian tulisan',
    ],
  },
  {
    title: 'Kelas Berhitung',
    desc: 'Belajar berhitung dasar sampai lancar',
    price: 'Rp. 150.000',
    features: [
      'Mengenal angka dan bilangan',
      'Belajar berbagai perhitungan',
      'Latihan soal secara rutin',
      'Melatih kelancaran berhitung',
    ],
  },
  {
    title: 'Paket Lengkap',
    desc: 'Satu paket baca, tulis, hitung',
    price: 'Rp. 350.000',
    featured: true,
    features: [
      'Belajar baca, tulis, hitung',
      'Materi dan latihan beragam',
      'Latihan rutin tiap pertemuan',
      'Belajar lengkap dan terarah',
    ],
  },
];

export default function Packages() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Hitung kartu mana yang sedang di tengah saat digeser
  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || el.children.length < 2) return;
    const step = el.children[1].offsetLeft - el.children[0].offsetLeft;
    if (step <= 0) return;
    const index = Math.round(el.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), packages.length - 1));
  };

  // Klik titik: geser ke kartu yang dipilih
  const goTo = (i) => {
    trackRef.current?.children[i]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section className="home-package" id="paket">
      <header className="home-section-head home-section-head--center">
        <h2>{'Kelas & Paket Belajar'}</h2>
        <p>
          Pilih kelas yang sesuai kebutuhan anak atau lengkapi semuanya dalam
          satu paket
        </p>
      </header>

      <div
        className="pk-track"
        ref={trackRef}
        onScroll={handleScroll}
        role="region"
        aria-label="Daftar kelas dan paket belajar"
        tabIndex={0}
      >
        {packages.map((p) => (
          <article
            className={p.featured ? 'pk-card pk-card--featured' : 'pk-card'}
            key={p.title}
          >
            <h3>{p.title}</h3>
            <p className="pk-desc">{p.desc}</p>
            <p className="pk-price">
              {p.price} <span>/ Bulan</span>
            </p>
            <ul className="pk-list">
              {p.features.map((f) => (
                <li key={f}>
                  <CheckCircleFill size={18} aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              className={p.featured ? 'button button-primary' : 'button button-outline'}
              to="/pendaftaran"
            >
              Pilih Kelas
            </Link>
          </article>
        ))}
      </div>

      <div className="pk-dots">
        {packages.map((p, i) => (
          <button
            key={p.title}
            type="button"
            className={i === active ? 'is-active' : ''}
            aria-label={`Lihat ${p.title}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}