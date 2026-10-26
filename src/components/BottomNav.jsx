import { NavLink } from 'react-router-dom';
import {
  House, HouseFill, Book, BookFill, PencilSquare,
  Image as ImageIcon, ImageFill, Telephone, TelephoneFill,
} from 'react-bootstrap-icons';

const tabs = [
  { to: '/', label: 'Beranda', icon: House, active: HouseFill, end: true },
  { to: '/program', label: 'Program', icon: Book, active: BookFill },
  { to: '/pendaftaran', label: 'Daftar', icon: PencilSquare, active: PencilSquare, primary: true },
  { to: '/kegiatan', label: 'Kegiatan', icon: ImageIcon, active: ImageFill },
  { to: '/kontak', label: 'Kontak', icon: Telephone, active: TelephoneFill },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Menu utama">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.end}
          className={({ isActive }) =>
            ['bn-item', t.primary && 'bn-primary', isActive && 'is-active']
              .filter(Boolean)
              .join(' ')
          }
        >
          {({ isActive }) => {
            const Icon = isActive ? t.active : t.icon;
            return (
              <>
                <span className="bn-icon">
                  <Icon size={t.primary ? 24 : 22} aria-hidden="true" />
                </span>
                <span className="bn-label">{t.label}</span>
              </>
            );
          }}
        </NavLink>
      ))}
    </nav>
  );
}