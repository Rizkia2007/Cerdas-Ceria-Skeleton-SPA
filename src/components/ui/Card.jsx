import './ui.css';

/**
 * Card - kartu konten.
 * color: 'white' | 'yellow' | 'pink' | 'blue' | 'green'
 * selected: kartu disorot (mis. paket yang dipilih)
 */
export default function Card({ title, icon, color = 'white', selected = false, children, footer }) {
  const className = ['ui-card', `ui-card-${color}`, selected && 'ui-card-selected'].filter(Boolean).join(' ');
  return (
    <article className={className}>
      {icon && <div className="ui-card-icon">{icon}</div>}
      {title && <h3 className="ui-card-title">{title}</h3>}
      {children && <div className="ui-card-body">{children}</div>}
      {footer && <div className="ui-card-footer">{footer}</div>}
    </article>
  );
}
