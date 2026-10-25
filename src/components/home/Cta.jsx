import { Link } from 'react-router-dom';

export default function Cta() {
  return (
    <section className="home-cta">
      <img
        className="cta-img"
        src="/images/home/cta.png"
        alt="Anak perempuan melambaikan tangan dengan ceria"
        width="300"
        height="300"
        loading="lazy"
        decoding="async"
      />

      <div className="cta-text">
        <span className="home-pill">Yuk, Daftar Sekarang</span>
        <h2>Daftarkan Buah Hati Anda Sekarang !</h2>
        <p>
          Bersama Cerdas Ceria, anak belajar dengan senang hati, tumbuh dengan
          percaya diri
        </p>
      </div>

      <Link className="button button-primary cta-btn" to="/pendaftaran">
        Daftar Sekarang
      </Link>
    </section>
  );
}