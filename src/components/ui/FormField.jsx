import { useId } from 'react';
import './ui.css';

/**
 * FormField - label + isian + petunjuk/pesan error.
 * type: 'text' | 'email' | 'tel' | 'select' | 'textarea'
 * options: array string, khusus type 'select'
 */
export default function FormField({
  label,
  name,
  type = 'text',
  options = [],
  placeholder,
  required = false,
  optional = false,
  hint,
  error,
  disabled = false,
  value,
  onChange,
}) {
  const id = useId();
  const messageId = `${id}-msg`;
  const common = {
    id,
    name,
    required,
    disabled,
    value,
    onChange,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error || hint ? messageId : undefined,
    className: ['ui-input', error && 'ui-input-error'].filter(Boolean).join(' '),
  };

  let control;
  if (type === 'select') {
    control = (
      <select {...common} defaultValue={value === undefined ? '' : undefined}>
        <option value="" disabled>{placeholder || 'Pilih salah satu'}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    );
  } else if (type === 'textarea') {
    control = <textarea {...common} rows="3" placeholder={placeholder} />;
  } else {
    control = <input {...common} type={type} placeholder={placeholder} />;
  }

  return (
    <div className="ui-field">
      <label htmlFor={id} className="ui-label">
        {label}
        {required && <span className="ui-required"> *</span>}
        {optional && <span className="ui-optional"> (opsional)</span>}
      </label>
      {control}
      {(error || hint) && (
        <p id={messageId} className={error ? 'ui-message ui-message-error' : 'ui-message'}>
          {error || hint}
        </p>
      )}
    </div>
  );
}
