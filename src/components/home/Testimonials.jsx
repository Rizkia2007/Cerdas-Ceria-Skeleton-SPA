import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Rina - Ibu dari Alif',
    tone: 'yellow',
    avatar: '/images/home/testi-rina.png',
    text: 'Anak saya jadi lebih semangat belajar membaca. Kegiatannya juga seru dan nggak bikin cepat bosan',
  },
  {
    name: 'Sinta - Ibu dari Naya',
    tone: 'pink',
    avatar: '/images/home/testi-sinta.png',
    text: 'Belajarnya menyenangkan dan suasananya nyaman. Naya jadi lebih antusias setiap kali ikut kelas',
  },
  {
    name: 'Dinda - Ibu dari Rafa',
    tone: 'blue',
    avatar: '/images/home/testi-dinda.png',
    text: 'Cara belajarnya mudah dipahami dan Rafa jadi lebih percaya diri saat membaca, menulis, dan berhitung',
  },
];

// Foto bulat; kalau file belum ada, tampil inisial berwarna
function Avatar({ src, name, tone }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className={`ts-avatar ts-avatar--${tone}`} aria-hidden="true">
        {name.charAt(0)}
      </span>
    );
  }
  return (
    <img
      className="ts-avatar"
      src={src}
      alt=""
      width="72"
      height="72"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Hitung kartu mana yang sedang di tengah saat digeser
    const handleScroll = () => {
    const el = trackRef.current;
    if (!el || el.children.length < 2) return;
    const step = el.children[1].offsetLeft - el.children[0].offsetLeft;
    if (step <= 0) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const index = atEnd
      ? testimonials.length - 1
      : Math.round(el.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), testimonials.length - 1));
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
    <section className="home-testi" id="testimoni">
      <header className="home-section-head">
        <h2>Kata Mereka Tentang Cerdas Ceria</h2>
        <p>
          Baca langsung testimoni dari orang tua yang sudah merasakan
          manfaatnya
        </p>
      </header>

      <div
        className="ts-track"
        ref={trackRef}
        onScroll={handleScroll}
        role="region"
        aria-label="Testimoni orang tua"
        tabIndex={0}
      >
        {testimonials.map((t) => (
          <article className="ts-card" key={t.name}>
            <Avatar src={t.avatar} name={t.name} tone={t.tone} />
            <div className="ts-body">
              <h3>{t.name}</h3>
              <p>{t.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="ts-dots">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            className={i === active ? 'is-active' : ''}
            aria-label={`Lihat testimoni ${i + 1}: ${t.name}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}