import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const items = [
  { label: 'Beranda', to: '/', id: 'beranda' },
  { label: 'Program', to: '/#program', id: 'program' },
  { label: 'Tentang Kami', to: '/#tentang', id: 'tentang' },
  { label: 'Kegiatan', to: '/#kegiatan', id: 'kegiatan' },
  { label: 'Kontak', to: '/#kontak', id: 'kontak' },
];
const spyIds = items.filter((i) => i.id !== 'beranda').map((i) => i.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('beranda');
  const { pathname } = useLocation();
  const close = () => setOpen(false);

  // Menyalakan menu sesuai section yang sedang terlihat
  useEffect(() => {
    if (pathname !== '/') return undefined;

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive('kontak');
        return;
      }
      let current = 'beranda';
      let best = -Infinity;
      spyIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= 140 && top > best) {
          best = top;
          current = id;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  return (
    <header className={open ? 'site-header is-open' : 'site-header'}>
      <Link className="brand" to="/" aria-label="Cerdas Ceria" onClick={close}>
        <img
          className="brand-logo"
          src="/images/logo.png"
          alt="Logo Cerdas Ceria"
          width="200"
          height="161"
          fetchpriority="high"
        />
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
        aria-controls="menu-utama"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="nav-panel" id="menu-utama">
        <nav className="main-nav" aria-label="Navigasi utama">
          {items.map((item) => {
            const isActive =
            (pathname === '/' && active === item.id) ||
            (item.id === 'program' && pathname.startsWith('/program'));
            return (
              <Link
                key={item.id}
                to={item.to}
                onClick={close}
                className={isActive ? 'nav-link active' : 'nav-link'}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="button button-primary nav-cta" to="/pendaftaran" onClick={close}>
          Daftar Sekarang
        </Link>
      </div>
    </header>
  );
}