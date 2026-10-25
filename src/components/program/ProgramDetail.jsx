import { Link } from 'react-router-dom';
import {
  PersonVideo3,
  CalendarEventFill,
  JournalBookmarkFill,
  PeopleFill,
  ClockFill,
  BookmarkFill,
  ArrowLeft,
  ArrowRight,
} from 'react-bootstrap-icons';
import TutorCarousel from './TutorCarousel.jsx';
import { schedule } from '../../data/programDetails.js';

const tones = ['yellow', 'pink', 'blue', 'purple', 'green'];

function SectionTitle({ icon: Icon, children }) {
  return (
    <h2 className="dp-title">
      <span className="dp-title-icon">
        <Icon size={22} aria-hidden="true" />
      </span>
      {children}
    </h2>
  );
}

export default function ProgramDetail({ data }) {
  const HeroIcon = data.icon;

  return (
    <>
      <section className="dp-hero">
        <div className="dp-hero-text">
          <span className="dp-label">
            <HeroIcon size={20} aria-hidden="true" /> {data.label}
          </span>
          <h1>{data.title}</h1>
          <p>{data.lead}</p>
        </div>
        <img
          className="dp-hero-img"
          src={data.heroImg}
          alt={data.heroAlt}
          width={data.heroW}
          height={data.heroH}
          fetchpriority="high"
        />
      </section>

      <section className="dp-section">
        <SectionTitle icon={PersonVideo3}>Pengajar Kursus</SectionTitle>
        <TutorCarousel tutors={data.tutors} role={data.tutorRole} />
      </section>

      <section className="dp-section">
        <SectionTitle icon={CalendarEventFill}>Jadwal Pertemuan</SectionTitle>
        <div className="dp-schedule">
          <table className="dp-table">
            <thead>
              <tr>
                <th scope="col">Hari</th>
                <th scope="col">Pilihan Waktu</th>
              </tr>
            </thead>
            <tbody>
              {schedule.rows.map((r) => (
                <tr key={r.day}>
                  <th scope="row">{r.day}</th>
                  <td>
                    <ul>
                      {r.times.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="dp-facts">
            <div className="dp-fact">
              <span className="dp-fact-icon"><PeopleFill size={22} aria-hidden="true" /></span>
              <div className="dp-fact-text">
                <strong>Frekuensi Pertemuan</strong>
                <span>{schedule.frequency}</span>
              </div>
            </div>
            <div className="dp-fact">
              <span className="dp-fact-icon"><ClockFill size={22} aria-hidden="true" /></span>
              <div className="dp-fact-text">
                <strong>Durasi Tiap Pertemuan</strong>
                <span>{schedule.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dp-section">
        <SectionTitle icon={JournalBookmarkFill}>Materi yang Didapatkan</SectionTitle>
        <div className="dp-materials">
          {data.materials.map((m, i) => (
            <article className={`dp-card dp-card--${tones[i % tones.length]}`} key={m.title}>
              <h3>
                <span className="dp-num">{String(i + 1).padStart(2, '0')}</span>
                {m.title}
              </h3>
              <ul>
                {m.items.map((it) => (
                  <li key={it}>
                    <BookmarkFill size={16} aria-hidden="true" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="dp-cta">
        <img
          className="dp-cta-img"
          src="/images/detail/cta.png"
          alt="Anak perempuan memegang buku dengan ceria"
          width="200"
          height="200"
          loading="lazy"
          decoding="async"
        />
        <div className="dp-cta-text">
          <h2>Kamu sudah siap mulai belajar ?</h2>
          <p>
            Pilih program yang sesuai dan daftarkan anak sekarang agar ia bisa
            belajar dengan keceriaan bersama tutor
            berpengalaman.
          </p>
        </div>
        <div className="dp-cta-actions">
          <Link className="button button-outline" to="/#program">
            <ArrowLeft size={18} aria-hidden="true" /> Kembali
          </Link>
          <Link className="button button-primary" to="/pendaftaran">
            Daftar <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}