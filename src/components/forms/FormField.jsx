import { cn } from '@/lib/utils'

/**
 * Renders one field from a schema entry in src/data/services.js.
 * Supported types: text, tel, email, number, date, textarea, select, checkboxes.
 */
export default function FormField({ field, value, error, onChange }) {
  const id = `field-${field.name}`
  const describedBy = error ? `${id}-error` : undefined
  const isWide = field.type === 'textarea' || field.type === 'checkboxes'

  const label = (
    <label htmlFor={field.type === 'checkboxes' ? undefined : id} className="field-label">
      {field.label}
      {field.required && <span className="ml-1 text-brand-500">*</span>}
    </label>
  )

  return (
    <div className={cn(isWide && 'sm:col-span-2')}>
      {field.type === 'checkboxes' ? (
        <fieldset>
          <legend className="field-label">
            {field.label}
            {field.required && <span className="ml-1 text-brand-500">*</span>}
          </legend>
          <div className="mt-1 grid gap-2 sm:grid-cols-2">
            {field.options.map((option) => {
              const checked = Array.isArray(value) && value.includes(option)
              return (
                <label key={option} className="checkbox-tile">
                  <input
                    type="checkbox"
                    name={field.name}
                    value={option}
                    checked={checked}
                    onChange={(e) => {
                      const next = new Set(Array.isArray(value) ? value : [])
                      if (e.target.checked) next.add(option)
                      else next.delete(option)
                      onChange(field.name, [...next])
                    }}
                  />
                  <span>{option}</span>
                </label>
              )
            })}
          </div>
        </fieldset>
      ) : (
        <>
          {label}

          {field.type === 'textarea' && (
            <textarea
              id={id}
              name={field.name}
              rows={4}
              placeholder={field.placeholder}
              value={value ?? ''}
              required={field.required}
              aria-invalid={Boolean(error)}
              aria-describedby={describedBy}
              onChange={(e) => onChange(field.name, e.target.value)}
              className="field-input resize-y"
            />
          )}

          {field.type === 'select' && (
            <select
              id={id}
              name={field.name}
              value={value ?? ''}
              required={field.required}
              aria-invalid={Boolean(error)}
              aria-describedby={describedBy}
              onChange={(e) => onChange(field.name, e.target.value)}
              className="field-input"
            >
              <option value="">Please select…</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}

          {!['textarea', 'select', 'checkboxes'].includes(field.type) && (
            <input
              id={id}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={value ?? ''}
              required={field.required}
              aria-invalid={Boolean(error)}
              aria-describedby={describedBy}
              // Nudge mobile keyboards towards the right layout.
              inputMode={
                field.type === 'tel' ? 'tel' : field.type === 'number' ? 'numeric' : undefined
              }
              autoComplete={
                { name: 'name', email: 'email', phone: 'tel', company: 'organization' }[
                  field.name
                ]
              }
              onChange={(e) => onChange(field.name, e.target.value)}
              className="field-input"
            />
          )}
        </>
      )}

      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[0.78rem] text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
