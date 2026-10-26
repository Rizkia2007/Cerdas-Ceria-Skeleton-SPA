import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const titles = {
  '/program': 'Program',
  '/kegiatan': 'Kegiatan',
  '/kontak': 'Kontak',
  '/pendaftaran': 'Pendaftaran',
  '/pendaftaran-berhasil': 'Pendaftaran Berhasil',
  '/program/membaca': 'Kelas Membaca',
  '/program/menulis': 'Kelas Menulis',
  '/program/berhitung': 'Kelas Berhitung',
};

// Layar utama (mewakili tab): tidak ada tombol kembali
const rootPaths = ['/', '/program', '/kegiatan', '/kontak', '/pendaftaran'];

export default function AppBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isRoot = rootPaths.includes(pathname);

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(pathname.startsWith('/program/') ? '/program' : '/');
    }
  };

  return (
    <header className="app-bar">
      {!isRoot && (
        <button type="button" className="app-bar-back" onClick={goBack} aria-label="Kembali">
          <ChevronLeft size={26} aria-hidden="true" />
        </button>
      )}

      {pathname === '/' ? (
        <Link className="app-bar-brand" to="/" aria-label="Cerdas Ceria">
          <img src="/images/logo.png" alt="Cerdas Ceria" width="200" height="161" />
        </Link>
      ) : (
        <span className="app-bar-title">{titles[pathname] || 'Cerdas Ceria'}</span>
      )}
    </header>
  );
}