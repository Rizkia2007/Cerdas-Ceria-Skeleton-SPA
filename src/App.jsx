import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Programs from './pages/Programs.jsx';
import About from './pages/About.jsx';
import Register from './pages/Register.jsx';
import RegisterSuccess from './pages/RegisterSuccess.jsx';
import Admin from './pages/Admin.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/pendaftaran" element={<Register />} />
          <Route path="/pendaftaran-berhasil" element={<RegisterSuccess />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/beranda" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
