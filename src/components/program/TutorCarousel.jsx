import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

const tones = ['blue', 'yellow', 'pink', 'green'];

// Foto bulat; bila file belum ada, tampil inisial
function Photo({ src, name }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <span className="tc-photo tc-photo--fallback" aria-hidden="true">
        {name.charAt(0)}
      </span>
    );
  }
  return (
    <img
      className="tc-photo"
      src={src}
      alt=""
      width="104"
      height="104"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default function TutorCarousel({ tutors, role }) {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ prev: false, next: false });

  // Perbarui status tombol panah (bisa geser kiri/kanan atau tidak)
  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdge({
      prev: el.scrollLeft > 4,
      next: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el || el.children.length < 2) return;
    const step = el.children[1].offsetLeft - el.children[0].offsetLeft;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="tc">
      <button
        type="button"
        className="tc-arrow"
        aria-label="Pengajar sebelumnya"
        disabled={!edge.prev}
        onClick={() => scrollByCard(-1)}
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>

      <div
        className="tc-track"
        ref={trackRef}
        onScroll={update}
        role="region"
        aria-label="Daftar pengajar"
        tabIndex={0}
      >
        {tutors.map((t, i) => (
          <article className={`tc-card tc-card--${tones[i % tones.length]}`} key={t.name}>
            <Photo src={t.photo} name={t.name} />
            <h3>{t.name}</h3>
            <span className="tc-role">{role}</span>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="tc-arrow"
        aria-label="Pengajar berikutnya"
        disabled={!edge.next}
        onClick={() => scrollByCard(1)}
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  );
}