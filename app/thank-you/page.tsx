import Link from "next/link"

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-16 pt-24 text-center">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="my-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg 
              className="h-16 w-16 text-caring-green" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-deep-blue mb-6">Thank You!</h1>
        
        <div className="mb-8">
          <p className="text-xl mb-4">
            Your referral has been submitted successfully.
          </p>
          <p className="text-lg text-gray-600">
            Our team will review your information and contact you within 24-48 hours.
          </p>
        </div>
        
        <div className="border-t border-gray-100 pt-6 mb-6">
          <h2 className="text-xl font-semibold text-deep-blue mb-4">What happens next?</h2>
          <ol className="text-left text-gray-600 space-y-3 mb-6 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-caring-green text-white rounded-full flex items-center justify-center mr-2 mt-0.5">1</span>
              <span>Our team will review your submission</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-caring-green text-white rounded-full flex items-center justify-center mr-2 mt-0.5">2</span>
              <span>A specialist will reach out to you within 24-48 hours</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-caring-green text-white rounded-full flex items-center justify-center mr-2 mt-0.5">3</span>
              <span>We'll begin the assessment and planning process</span>
            </li>
          </ol>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Return to Homepage
          </Link>
          <Link href="/submit-referral" className="btn-secondary">
            Submit Another Referral
          </Link>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-100 text-gray-500 text-sm">
          <p>If you have any questions, please contact us at:</p>
          <p className="font-semibold">651-363-6866 or info.chgllc@gmail.com</p>
        </div>
      </div>
    </div>
  )
} 