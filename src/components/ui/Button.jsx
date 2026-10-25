import './ui.css';

/**
 * Button - tombol aksi.
 * variant: 'primary' | 'outline'   size: 'default' | 'small'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
}) {
  const className = ['button', `button-${variant}`, size === 'small' && 'button-small', fullWidth && 'button-full']
    .filter(Boolean)
    .join(' ');
  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
