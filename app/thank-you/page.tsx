import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | Comfort Health Group",
  description: "Thank you for your submission to Comfort Health Group."
}

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
            Your submission has been received successfully.
          </p>
          <p className="text-lg text-gray-600">
            Our team will review your information and get back to you within 24-48 hours.
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
              <span>We'll provide the information or assistance you need</span>
            </li>
          </ol>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="py-3 px-6 bg-caring-green text-white font-medium rounded-md shadow-md hover:bg-caring-green/90 transition duration-300 flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7-7 7 7" />
            </svg>
            Return to Homepage
          </Link>
          <Link 
            href="/about-services" 
            className="py-3 px-6 bg-white text-deep-blue font-medium border-2 border-deep-blue rounded-md shadow-sm hover:bg-deep-blue/5 transition duration-300 flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Learn About Our Services
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