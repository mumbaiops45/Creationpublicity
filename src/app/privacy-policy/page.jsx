import { site, addressLine } from '@/data/site'
import PageHero from '@/components/common/PageHero'

export const metadata = {
  title: 'Privacy Policy',
  description: `How ${site.legalName} collects, uses and protects the information you submit through this website.`,
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
}

/*
 * TODO(client): have your legal advisor review this before launch. It is a
 * sensible baseline for an Indian business collecting enquiry-form data, but
 * it is not legal advice, and it must match what you actually do with the data.
 */
const sections = [
  {
    title: 'What we collect',
    body: [
      'When you submit an enquiry form on this website we collect the details you enter: your name, company, phone number, email address, and the campaign details you choose to share (cities, budget range, timelines, requirements).',
      'We do not collect payment information through this website, and we do not ask for any sensitive personal data.',
    ],
  },
  {
    title: 'Why we collect it',
    body: [
      'Solely to respond to your enquiry, prepare a proposal or quotation, and carry out any campaign you subsequently commission. We may also contact you about the status of an active campaign.',
      'We do not use enquiry data for automated decision-making or profiling.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'Enquiry records are retained for up to three years so we can reference past quotations and campaign history. You may ask us to delete your record sooner at any time.',
    ],
  },
  {
    title: 'Who we share it with',
    body: [
      'We do not sell, rent or trade your information. We share details only where it is necessary to execute work you have commissioned — for example passing artwork specifications to a printing partner or site details to a mounting crew — and only the minimum required.',
      'We may disclose information where we are legally required to do so.',
    ],
  },
  {
    title: 'Cookies and analytics',
    body: [
      'This website does not set advertising or tracking cookies of its own. If analytics are enabled in future, they will be limited to aggregate visit statistics and this policy will be updated to say so.',
    ],
  },
  {
    title: 'Third-party services',
    body: [
      'The WhatsApp and telephone buttons on this site open your own device applications; any conversation that follows is subject to those providers’ terms. Enquiry forms may be delivered through a third-party form service, which processes the submission solely to pass it on to us.',
    ],
  },
  {
    title: 'Your rights',
    body: [
      'You may ask us at any time for a copy of the information we hold about you, ask us to correct it, or ask us to delete it. Write to us at the email address below and we will respond within thirty days.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. The version published on this page is the one that applies.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        eyebrow="Legal"
        title="Privacy Policy"
        lead={`How ${site.legalName} handles the information you share with us through this website.`}
      />

      <section className="section pt-0">
        <div className="container-x max-w-3xl">
          <div className="space-y-10" data-reveal="up">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-7">
              <h2 className="font-display text-lg font-bold text-ink-900">Contact us</h2>
              <p className="mt-3 leading-relaxed text-muted">
                For any question about this policy or the data we hold, contact:
              </p>
              <address className="mt-4 not-italic leading-relaxed text-body">
                <span className="block font-semibold text-ink-900">{site.legalName}</span>
                {addressLine}
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="text-brand-600 underline underline-offset-2"
                >
                  {site.email}
                </a>
                {' · '}
                <a
                  href={`tel:${site.phoneHref}`}
                  className="text-brand-600 underline underline-offset-2"
                >
                  {site.phone}
                </a>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
