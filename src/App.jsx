import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppBar from './components/AppBar.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

// Halaman yang dipakai pengunjung: dipecah (lazy) dan diunduh di latar belakang
const loaders = {
  programs: () => import('./pages/Programs.jsx'),
  kegiatan: () => import('./pages/Kegiatan.jsx'),
  kontak: () => import('./pages/Kontak.jsx'),
  register: () => import('./pages/Register.jsx'),
  registerSuccess: () => import('./pages/RegisterSuccess.jsx'),
  membaca: () => import('./pages/ProgramMembaca.jsx'),
  menulis: () => import('./pages/ProgramMenulis.jsx'),
  berhitung: () => import('./pages/ProgramBerhitung.jsx'),
};

const Programs = lazy(loaders.programs);
const Kegiatan = lazy(loaders.kegiatan);
const Kontak = lazy(loaders.kontak);
const Register = lazy(loaders.register);
const RegisterSuccess = lazy(loaders.registerSuccess);
const ProgramMembaca = lazy(loaders.membaca);
const ProgramMenulis = lazy(loaders.menulis);
const ProgramBerhitung = lazy(loaders.berhitung);

// Halaman jarang dibuka: lazy biasa, tanpa diunduh lebih dulu
const About = lazy(() => import('./pages/About.jsx'));
const Admin = lazy(() => import('./pages/Admin.jsx'));
const AdminLogin = lazy(() => import('./pages/AdminLogin.jsx'));
const Components = lazy(() => import('./pages/Components.jsx'));

export default function App() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  // Setelah halaman pertama tampil, unduh halaman lain saat browser sedang senggang
  useEffect(() => {
    if (navigator.connection && navigator.connection.saveData) return undefined;

    const prefetch = () => {
      Object.values(loaders).forEach((load) => {
        load().catch(() => {});
      });
    };

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(prefetch, 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={isAdmin ? 'app app--admin' : 'app'}>
      <ScrollToHash />
      <Header />
      {!isAdmin && <AppBar />}
      <main className="page-shell">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/program/membaca" element={<ProgramMembaca />} />
            <Route path="/program/menulis" element={<ProgramMenulis />} />
            <Route path="/program/berhitung" element={<ProgramBerhitung />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/pendaftaran" element={<Register />} />
            <Route path="/pendaftaran-berhasil" element={<RegisterSuccess />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/komponen" element={<Components />} />
            <Route path="/beranda" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {!isAdmin && <BottomNav />}
    </div>
  );
}