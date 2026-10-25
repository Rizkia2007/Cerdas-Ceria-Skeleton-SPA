import { PeopleFill, ShieldFillCheck, EmojiSmileFill } from 'react-bootstrap-icons';

const reasons = [
  {
    icon: PeopleFill,
    tone: 'yellow',
    title: 'Tutor Berpengalaman',
    text: 'Dengan pengalaman dan kompetensi di bidangnya',
  },
  {
    icon: ShieldFillCheck,
    tone: 'pink',
    title: 'Lingkungan Aman',
    text: 'Ruang belajar aman dan nyaman untuk kegiatan anak-anak belajar',
  },
  {
    icon: EmojiSmileFill,
    tone: 'blue',
    title: 'Metode Menyenangkan',
    text: 'Belajar sambil bermain agar anak semangat belajar',
  },
];

export default function WhyUs() {
  return (
    <section className="home-why" id="tentang">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-4 home-why-text">
          <h2 className="home-why-title">
            Kenapa Memilih <br />
            Cerdas Ceria ?
          </h2>
          <p className="home-why-lead">
            Kami temani si kecil belajar Calistung dengan cara yang seru,
            nyaman, dan penuh keceriaan
          </p>
        </div>

        <div className="col-12 col-lg-8">
          <div className="row g-3">
            {reasons.map(({ icon: Icon, tone, title, text }) => (
              <div className="col-12 col-md-4" key={title}>
                <article className="why-card">
                  <span className={`why-icon why-icon--${tone}`}>
                    <Icon size={50} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}