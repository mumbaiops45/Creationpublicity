'use client'

import { useMemo, useState } from 'react'
import { site, whatsappLink } from '@/data/site'
import { baseFormFields } from '@/data/services'
import FormField from './FormField'
import { CheckIcon, WhatsAppIcon, MailIcon, ArrowIcon } from '@/components/common/Icons'

/**
 * The enquiry form used both for the general contact page and for each
 * service page (which passes its own `fields`).
 *
 * Delivery on a static site: set NEXT_PUBLIC_FORM_ENDPOINT to a form service
 * (Web3Forms, Formspree, Getform, or your own webhook) and submissions POST
 * there as JSON. If no endpoint is configured the form still validates and
 * then hands the visitor a pre-filled WhatsApp message and email instead, so
 * an enquiry is never lost. See CONTENT-GUIDE.md.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || ''
const ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || ''

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
// Deliberately lenient: 8–15 digits after stripping spaces, dashes and +.
const PHONE_RE = /^\+?[\d\s-]{8,18}$/

export default function EnquiryForm({
  fields = [],
  serviceName = 'General Enquiry',
  title = 'Send us an enquiry',
  lead = 'Tell us what you need. We reply to every enquiry within one working day.',
  compact = false,
}) {
  const allFields = useMemo(() => [...baseFormFields, ...fields], [fields])

  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | manual | error

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  /** Human-readable transcript, reused for WhatsApp, email and the payload. */
  const transcript = useMemo(() => {
    const lines = [`New enquiry — ${serviceName}`, '']
    allFields.forEach((field) => {
      const raw = values[field.name]
      const text = Array.isArray(raw) ? raw.join(', ') : raw
      if (text) lines.push(`${field.label}: ${text}`)
    })
    return lines.join('\n')
  }, [allFields, values, serviceName])

  const validate = () => {
    const next = {}

    allFields.forEach((field) => {
      const value = values[field.name]
      const empty = Array.isArray(value) ? value.length === 0 : !String(value ?? '').trim()

      if (field.required && empty) {
        next[field.name] = `${field.label} is required`
        return
      }
      if (empty) return

      if (field.type === 'email' && !EMAIL_RE.test(value)) {
        next[field.name] = 'Enter a valid email address'
      }
      if (field.type === 'tel' && !PHONE_RE.test(value)) {
        next[field.name] = 'Enter a valid phone number'
      }
    })

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validate()) {
      // Move the visitor to the first thing they need to fix.
      const firstError = document.querySelector('[aria-invalid="true"]')
      firstError?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      firstError?.focus?.({ preventScroll: true })
      return
    }

    // No endpoint configured yet — offer WhatsApp and email instead.
    if (!ENDPOINT) {
      setStatus('manual')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...(ACCESS_KEY ? { access_key: ACCESS_KEY } : {}),
          subject: `Website enquiry — ${serviceName}`,
          service: serviceName,
          submittedAt: new Date().toISOString(),
          ...values,
          message_transcript: transcript,
        }),
      })

      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('sent')
    } catch (error) {
      console.error('Enquiry submission failed:', error)
      setStatus('error')
    }
  }

  /* ---------------------------------------------------------------------- */
  /* Success                                                                 */
  /* ---------------------------------------------------------------------- */

  if (status === 'sent') {
    return (
      <div className="glass rounded-2xl p-10 text-center">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand-300 bg-brand-50 text-brand-600">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="font-display text-2xl font-bold text-ink-900">Enquiry received</h3>
        <p className="mx-auto mt-3 max-w-sm text-[0.92rem] leading-relaxed text-muted">
          Thank you. Our team will get back to you within one working day. For
          anything urgent, message us directly on WhatsApp.
        </p>
        <a
          href={whatsappLink(`Hi, I just submitted an enquiry about ${serviceName}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost mt-7"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Message us on WhatsApp
        </a>
      </div>
    )
  }

  /* ---------------------------------------------------------------------- */
  /* Form                                                                    */
  /* ---------------------------------------------------------------------- */

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={compact ? '' : 'glass rounded-2xl p-6 sm:p-9'}
      id="enquiry"
    >
      {title && (
        <div className="mb-7">
          <h3 className="font-display text-2xl font-bold text-ink-900">{title}</h3>
          {lead && <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{lead}</p>}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {allFields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={setValue}
          />
        ))}
      </div>

      {/* Honeypot — bots fill this in, people never see it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website-url">Leave this field empty</label>
        <input
          id="website-url"
          name="website-url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          onChange={(e) => setValue('_gotcha', e.target.value)}
        />
      </div>

      {status === 'manual' && (
        <div className="mt-7 rounded-xl border border-brand-200 bg-brand-50 p-5">
          <p className="text-[0.9rem] font-semibold text-brand-800">
            Almost there — choose how to send it
          </p>
          <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted">
            Your details are ready. Send them straight to our team on WhatsApp, or
            open it as an email.
          </p>
          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={whatsappLink(transcript)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-1"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Send on WhatsApp
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                `Website enquiry — ${serviceName}`,
              )}&body=${encodeURIComponent(transcript)}`}
              className="btn btn-ghost flex-1"
            >
              <MailIcon className="h-4 w-4" />
              Send by Email
            </a>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-7 rounded-xl border border-red-400/30 bg-red-500/10 p-5">
          <p className="text-[0.9rem] font-semibold text-red-200">
            That did not go through
          </p>
          <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted">
            Something went wrong sending your enquiry. Please try again, or reach us
            directly on{' '}
            <a
              href={whatsappLink(transcript)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 underline underline-offset-2"
            >
              WhatsApp
            </a>{' '}
            or at{' '}
            <a
              href={`tel:${site.phoneHref}`}
              className="font-semibold text-brand-600 underline underline-offset-2"
            >
              {site.phone}
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn btn-primary group w-full px-8 py-4 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
          {status !== 'sending' && (
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>

        <p className="text-[0.76rem] leading-relaxed text-faint">
          We reply within one working day.
          <br className="hidden sm:block" /> Your details are never shared with anyone.
        </p>
      </div>
    </form>
  )
}
