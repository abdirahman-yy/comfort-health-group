export default function HipaaPrivacy() {
  return (
    <div className="min-h-screen bg-warm-white">
      <div className="container mx-auto px-4 py-12 pt-20">
        <h1 className="text-4xl font-bold text-deep-blue mb-8 text-center">HIPAA & Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">Key Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>HIPAA Privacy Rule:</strong> Outlines the rights individuals have over their health information
                and the limitations on who may access it.
              </li>
              <li>
                <strong>HIPAA Security Rule:</strong> Explains the protections in place for electronic health
                information, ensuring data remains confidential and secure.
              </li>
              <li>
                <strong>Patient Safety Rule:</strong> Describes how information is used to enhance patient safety
                without compromising privacy.
              </li>
              <li>
                <strong>Protected Information:</strong> Defines what is considered personal and sensitive data.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">State and Agency Responsibilities</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Comfort Health Group is committed to safeguarding client data and adhering to all relevant privacy laws
              and regulations. When collecting information, we provide clients with a privacy notice detailing their
              rights and how their information will be used and protected.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">Relevant Laws and Regulations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minnesota Government Data Practices Act</li>
              <li>Minnesota Statutes concerning private, confidential, and medical data</li>
              <li>Federal regulations protecting health and tax information</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

