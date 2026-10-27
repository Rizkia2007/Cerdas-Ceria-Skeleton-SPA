import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import App from './App.jsx';
import './styles.css';
import './layout.css';
import './home.css';
import './detail.css';
import './app.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></BrowserRouter></React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => console.log('SW terdaftar:', reg.scope))
      .catch((err) => console.error('SW gagal:', err));
  });
}