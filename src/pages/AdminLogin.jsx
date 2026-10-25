import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { isLoggedIn, login } from '../utils/auth.js';
import './adminLogin.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Kalau sudah login, langsung ke dashboard
  if (isLoggedIn()) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (login(data.get('username').trim(), data.get('password'))) {
      navigate('/admin', { replace: true });
    } else {
      setError('Username atau password salah. Coba lagi.');
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Masuk Admin</h1>
        <p className="login-lead">
          Masuk untuk melihat data pendaftaran Cerdas Ceria.
        </p>

        <label>
          Username
          <input
            type="text"
            name="username"
            autoComplete="username"
            required
            autoFocus
            placeholder="Masukkan username"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder="Masukkan password"
          />
        </label>

        {error && (
          <p className="login-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="login-submit">
          Masuk
        </button>

        <Link to="/" className="login-back">
          Kembali ke Beranda
        </Link>
      </form>
    </div>
  );
}
