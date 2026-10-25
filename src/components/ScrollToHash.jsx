import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Menggulir ke section sesuai #hash, atau ke atas halaman bila tanpa hash
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = reduce || !samePage ? 'auto' : 'smooth';

    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior, block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior });
  }, [pathname, hash, key]);

  return null;
}