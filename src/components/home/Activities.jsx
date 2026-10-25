import { useRef, useState } from 'react';
import { CalculatorFill, PencilFill, BookFill } from 'react-bootstrap-icons';

// w dan h = ukuran piksel asli foto (cek lewat Properties > Details)
const activities = [
  {
    title: 'Belajar Berhitung',
    tone: 'blue',
    icon: CalculatorFill,
    img: '/images/home/kegiatan-berhitung.png',
    alt: 'Anak belajar berhitung bersama tutor',
    w: 600,
    h: 400,
  },
  {
    title: 'Belajar Menulis',
    tone: 'pink',
    icon: PencilFill,
    img: '/images/home/kegiatan-menulis.png',
    alt: 'Anak belajar menulis bersama tutor',
    w: 600,
    h: 400,
  },
  {
    title: 'Belajar Membaca',
    tone: 'yellow',
    icon: BookFill,
    img: '/images/home/kegiatan-membaca.png',
    alt: 'Anak belajar membaca bersama tutor',
    w: 600,
    h: 400,
  },
];

export default function Activities() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Hitung kartu mana yang sedang di tengah saat digeser
  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || el.children.length < 2) return;
    const step = el.children[1].offsetLeft - el.children[0].offsetLeft;
    const index = Math.round(el.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), activities.length - 1));
  };

  // Klik titik: geser ke kartu yang dipilih
  const goTo = (i) => {
    trackRef.current?.children[i]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section className="home-activity" id="kegiatan">
      <header className="home-section-head">
        <span className="home-pill">Kegiatan Belajar</span>
        <h2>Serunya Belajar di Cerdas Ceria</h2>
        <p>
          Anak belajar sambil bermain lewat kegiatan yang seru, aktif, dan
          menyenangkan
        </p>
      </header>

      <div
        className="kg-track"
        ref={trackRef}
        onScroll={handleScroll}
        role="region"
        aria-label="Daftar kegiatan belajar"
        tabIndex={0}
      >
        {activities.map(({ title, tone, icon: Icon, img, alt, w, h }) => (
          <article className="kg-card" key={title}>
            <img
              className="kg-photo"
              src={img}
              alt={alt}
              width={w}
              height={h}
              loading="lazy"
              decoding="async"
            />
            <div className="kg-label">
              <span className={`kg-icon kg-icon--${tone}`}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="kg-dots">
        {activities.map((a, i) => (
          <button
            key={a.title}
            type="button"
            className={i === active ? 'is-active' : ''}
            aria-label={`Lihat kegiatan ${i + 1}: ${a.title}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}