import EnquiryForm from '@/components/forms/EnquiryForm'

/** The enquiry form on a service page, pre-loaded with that service's fields. */
export default function ServiceEnquiryForm({ service }) {
  return (
    <EnquiryForm
      fields={service.formFields}
      serviceName={service.title}
      title={`Enquire about ${service.title}`}
      lead={`Tell us what you have in mind and we will come back with options, availability and a price for ${service.title.toLowerCase()}.`}
    />
  )
}
