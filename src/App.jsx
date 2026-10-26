import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppBar from './components/AppBar.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

const Programs = lazy(() => import('./pages/Programs.jsx'));
const Kegiatan = lazy(() => import('./pages/Kegiatan.jsx'));
const Kontak = lazy(() => import('./pages/Kontak.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const RegisterSuccess = lazy(() => import('./pages/RegisterSuccess.jsx'));
const Admin = lazy(() => import('./pages/Admin.jsx'));
const AdminLogin = lazy(() => import('./pages/AdminLogin.jsx'));
const Components = lazy(() => import('./pages/Components.jsx'));
const ProgramMembaca = lazy(() => import('./pages/ProgramMembaca.jsx'));
const ProgramMenulis = lazy(() => import('./pages/ProgramMenulis.jsx'));
const ProgramBerhitung = lazy(() => import('./pages/ProgramBerhitung.jsx'));

export default function App() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <div className={isAdmin ? 'app app--admin' : 'app'}>
      <ScrollToHash />
      <Header />
      {!isAdmin && <AppBar />}
      <main className="page-shell">
        <Suspense fallback={<p>Memuat...</p>}>
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