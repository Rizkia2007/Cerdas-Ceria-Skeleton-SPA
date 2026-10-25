import { Link } from 'react-router-dom';

// w dan h = ukuran piksel asli gambar (cek lewat Properties > Details)
const programs = [
  {
    tone: 'yellow',
    to: '/program/membaca',
    title: 'Membaca',
    text: 'Membantu anak belajar membaca dari mengenal huruf hingga mampu membaca dengan lancar',
    img: '/images/home/baca landing.png',
    alt: 'Ilustrasi anak belajar membaca',
    w: 400,
    h: 400,
  },
  {
    tone: 'pink',
    to: '/program/menulis',
    title: 'Menulis',
    text: 'Melatih anak dari menulis huruf hingga mampu menulis kata dan kalimat dengan baik',
    img: '/images/home/nulis landing.png',
    alt: 'Ilustrasi anak belajar menulis',
    w: 400,
    h: 400,
  },
  {
    tone: 'blue',
    to: '/program/berhitung',
    title: 'Berhitung',
    text: 'Melatih anak dari mengenal angka hingga mampu melakukan perhitungan dengan percaya diri.',
    img: '/images/home/hitung landing.png',
    alt: 'Ilustrasi anak belajar berhitung',
    w: 400,
    h: 400,
  },
];

export default function ProgramHighlights() {
  return (
    <section className="home-program" id="program">
      <header className="home-section-head">
        <h2>Program Calistung</h2>
        <p>
          Tiga Kemampuan Penting untuk Mengembangkan Fondasi Belajar Anak di
          Masa Depan
        </p>
      </header>

      <div className="row g-4">
        {programs.map((p) => (
          <div className="col-12 col-md-4" key={p.title}>
            <article className={`hp-card hp-card--${p.tone}`}>
              <img
                src={p.img}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                decoding="async"
              />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Link className={`button hp-btn hp-btn--${p.tone}`} to={p.to}>
                Lihat Detail
              </Link>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}