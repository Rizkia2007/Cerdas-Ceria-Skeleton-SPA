import { Link } from 'react-router-dom';
import WhyUs from '../components/home/WhyUs.jsx';
import ProgramHighlights from '../components/home/ProgramHighlights.jsx';
import Packages from '../components/home/Packages.jsx';
import Activities from '../components/home/Activities.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Cta from '../components/home/Cta.jsx';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-text">
          <span className="home-hero-label">Kursus Calistung Anak</span>
          <h1>
            Belajar Calistung <br />
            Jadi <em>Lebih Seru !</em>
          </h1>
          <p>
            Di <span className="brand-blue">Cerdas</span>{' '}
            <span className="brand-yellow">Ceria</span>, anak belajar
            membaca, menulis dan berhitung dengan cara yang menyenangkan
            dalam suasana yang nyaman dan aman, didampingi tutor
            berpengalaman, dan fasilitas yang mendukung perkembangan mereka.
          </p>
        </div>

        <img
          className="home-hero-img"
          src="/images/home/hero.png"
          alt="Anak-anak belajar membaca, menulis, dan berhitung"
          width="900"
          height="600"
          fetchpriority="high"
        />

        <div className="home-hero-actions">
          <Link className="button button-primary" to="/pendaftaran">
            Daftar Sekarang
          </Link>
          <Link className="button button-outline" to="/program">
            Lihat Program
          </Link>
        </div>
      </section>

      <WhyUs />

      <div className="web-only">
        <ProgramHighlights />
        <Packages />
        <Activities />
        <Testimonials />
      </div>

      <Cta />
    </>
  );
}