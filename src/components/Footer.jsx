import { Link } from 'react-router-dom';
import { Instagram, MapPin, Mail, Phone, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" id="kontak">
      <div>
        <img
          className="footer-brand-logo"
          src="/images/logo.jpeg"
          alt="Logo Cerdas Ceria"
        />
        <p>
          Tempat belajar Calistung yang seru dan menyenangkan
          untuk anak-anak.
        </p>
      </div>

      <div>
        <h3>Menu</h3>
        <Link to="/">Beranda</Link>
        <Link to="/program">Program</Link>
        <Link to="/tentang-kami">Tentang Kami</Link>
        <Link to="/pendaftaran">Pendaftaran</Link>
      </div>

      <div>
        <h3>Kontak</h3>
        <p><MapPin size={15} /> Jl. Tidar, Kota Malang</p>
        <p><Mail size={15} /> cerdasc​​eria@gmail.com</p>
        <p><Phone size={15} /> 0813-7890-6543</p>
      </div>

      <div>
        <h3>Sosial Media</h3>
        <div className="social-links">
          <a href="#kontak" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#kontak" aria-label="YouTube">
            <Youtube size={18} />
          </a>
        </div>
      </div>

      <p className="copyright">
        © 2026 Kursus Calistung Cerdas Ceria · Skeleton tugas kelompok
      </p>
    </footer>
  );
}