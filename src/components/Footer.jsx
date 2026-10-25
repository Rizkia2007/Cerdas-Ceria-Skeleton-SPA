import { Link } from 'react-router-dom';
import { Instagram, MapPin, Mail, Phone, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" id="kontak">
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <img
            className="footer-logo"
            src="/images/logo.png"
            alt="Logo Cerdas Ceria"
            width="200"
            height="161"
            loading="lazy"
          />
          <p className="footer-about">
            Tempat belajar Calistung yang seru dan menyenangkan untuk anak-anak.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <h3>Menu</h3>
          <Link to="/">Beranda</Link>
          <Link to="/#program">Program</Link>
          <Link to="/#tentang-kami">Tentang Kami</Link>
          <a href="/#kegiatan">Kegiatan</a>
          <a href="/#kontak">Kontak</a>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <h3>Kontak</h3>
          <p className="footer-line"><MapPin size={16} /> Jl. Tidar, Kota Malang</p>
          <p className="footer-line"><Mail size={16} /> cerdasceria@gmail.com</p>
          <p className="footer-line"><Phone size={16} /> 0813-7890-6543</p>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <h3>Sosial Media</h3>
          <div className="social-links">
            <a href="#kontak" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#kontak" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>
      </div>

      <p className="copyright">© 2026 Kursus Calistung Cerdas Ceria</p>
    </footer>
  );
}