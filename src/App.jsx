import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

const Programs = lazy(() => import('./pages/Programs.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const Components = lazy(() => import('./pages/Components.jsx'));
const ProgramMembaca = lazy(() => import('./pages/ProgramMembaca.jsx'));
const ProgramMenulis = lazy(() => import('./pages/ProgramMenulis.jsx'));
const ProgramBerhitung = lazy(() => import('./pages/ProgramBerhitung.jsx'));

export default function App() {
  return <><ScrollToHash /><Header /><main className="page-shell"><Suspense fallback={<p>Memuat...</p>}><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/program" element={<Programs />} />
    <Route path="/program/membaca" element={<ProgramMembaca />} />
    <Route path="/program/menulis" element={<ProgramMenulis />} />
    <Route path="/program/berhitung" element={<ProgramBerhitung />} />
    <Route path="/tentang-kami" element={<About />} />
    <Route path="/pendaftaran" element={<Register />} />
    <Route path="/komponen" element={<Components />} />
    <Route path="/beranda" element={<Navigate to="/" replace />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Suspense></main><Footer /></>;
}