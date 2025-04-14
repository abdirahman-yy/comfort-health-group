import { Metadata } from "next"

export const metadata: Metadata = {
  title: "HIPAA Privacy & Policy Notice | Comfort Health Group",
  description: "Learn about Comfort Health Group's HIPAA compliance and privacy policies."
}

export default function HipaaPrivacy() {
  return (
    <div className="min-h-screen bg-warm-white">
      <div className="container mx-auto px-4 py-12 pt-20">
        <h1 className="text-4xl font-bold text-deep-blue mb-8 text-center">HIPAA Privacy & Policy Notice</h1>
        <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-10">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-blue mb-6 pb-2 border-b border-gray-200">Key Definitions</h2>
            <div className="space-y-4">
              <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <p className="mb-1"><strong className="text-deep-blue">HIPAA Privacy Rule:</strong> The federal law that grants individuals rights over their health information and outlines who can access and receive personal health information.</p>
              </div>
              
              <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <p className="mb-1"><strong className="text-deep-blue">HIPAA Security Rule:</strong> The federal law that protects health information in electronic form, requiring covered entities to implement safeguards to secure electronic protected health information (ePHI).</p>
              </div>
              
              <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <p className="mb-1"><strong className="text-deep-blue">Patient Safety Rule:</strong> A federal regulation that outlines confidentiality protections for identifiable information used to analyze patient safety events and improve patient outcomes.</p>
              </div>
              
              <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <p className="mb-1"><strong className="text-deep-blue">Protected Information:</strong> Personal information about an individual or their family that is typically not shared with the general public without the individual's consent.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-blue mb-6 pb-2 border-b border-gray-200">State and Agency Responsibilities</h2>
            <div className="p-6 bg-soft-peach rounded-lg">
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Comfort Health Group, we are committed to safeguarding your protected health information (PHI) and complying with all applicable laws and regulations. When we collect your information, we provide clear privacy notices to explain how your information will be used, who may access it, and your rights regarding your personal data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Privacy Notice:</strong> When we collect your protected information, we will provide you with a privacy notice that explains your rights and the details of how your information will be handled. This notice is not a consent or authorization for release, but a disclosure of your rights under privacy laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If any consent or authorization is needed, we will provide you with the necessary forms in addition to this notice.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-6 pb-2 border-b border-gray-200">Applicable Laws and Regulations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-deep-blue mb-3">Minnesota Government Data Practices Act</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Private data (Minn. Stat. §13.02, subd. 12)</li>
                  <li>Confidential data (Minn. Stat. §13.02, subd. 3)</li>
                  <li>Welfare data (Minn. Stat. §13.46)</li>
                  <li>Medical data (Minn. Stat. §13.384)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-deep-blue mb-3">Federal Regulations</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Health Insurance Portability Accountability Act (HIPAA), 45 C.F.R. § 160.103</li>
                  <li>Minnesota Health Records Act (Minn. Stat. §144.291 – 144.298)</li>
                  <li>Chemical health records (42 U.S.C. § 290dd-2 and 42 C.F.R. § 2.1 to §2.67)</li>
                  <li>Federal tax information protection (26 U.S.C. § 6103)</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="p-6 bg-deep-blue/5 rounded-lg">
            <h2 className="text-xl font-semibold text-deep-blue mb-4">Our Commitment to Your Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              At Comfort Health Group, we take the protection of your personal and health information seriously. We implement stringent safeguards, conduct regular privacy training for our staff, and consistently review our procedures to ensure compliance with all relevant federal and state laws and regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

