import {
  GeoAltFill, EnvelopeFill, TelephoneFill, Whatsapp, ChevronRight,
} from 'react-bootstrap-icons';

const contacts = [
  {
    icon: GeoAltFill, tone: 'blue', label: 'Alamat', value: 'Jl. Tidar, Kota Malang',
    href: 'https://www.google.com/maps/search/?api=1&query=Jl.+Tidar+Malang',
  },
  {
    icon: EnvelopeFill, tone: 'pink', label: 'Email', value: 'cerdasceria@gmail.com',
    href: 'mailto:cerdasceria@gmail.com',
  },
  {
    icon: TelephoneFill, tone: 'yellow', label: 'Telepon', value: '0813-7890-6543',
    href: 'tel:+6281378906543',
  },
];

export default function Kontak() {
  return (
    <section className="kontak">
      <h1>Hubungi Kami</h1>
      <p className="kontak-lead">
        Punya pertanyaan soal kelas atau jadwal? Kami senang membantu.
      </p>

      <div className="kontak-list">
        {contacts.map(({ icon: Icon, tone, label, value, href }) => (
          <a className="contact-row" href={href} key={label}
             target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            <span className={`contact-icon contact-icon--${tone}`}>
              <Icon size={20} aria-hidden="true" />
            </span>
            <span className="contact-text">
              <span>{label}</span>
              <strong>{value}</strong>
            </span>
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        ))}
      </div>

      <a className="button button-primary kontak-wa" href="https://wa.me/6281378906543"
         target="_blank" rel="noopener noreferrer">
        <Whatsapp size={18} aria-hidden="true" /> Chat via WhatsApp
      </a>
    </section>
  );
}