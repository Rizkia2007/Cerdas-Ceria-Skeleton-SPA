import { Link, NavLink } from 'react-router-dom';

const items = [
  { label: 'Beranda', to: '/' },
  { label: 'Program', to: '/program' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Cerdas Ceria">
        <img
          className="brand-logo"
          src="/images/logo.jpeg"
          alt="Logo Cerdas Ceria"
        />
      </Link>

      <nav className="main-nav" aria-label="Navigasi utama">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}

        <a className="nav-link" href="/#kegiatan">Kegiatan</a>
        <a className="nav-link" href="/#kontak">Kontak</a>
      </nav>

      <Link className="button button-primary" to="/pendaftaran">
        Daftar Sekarang
      </Link>
    </header>
  );
}