import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 pt-24 text-center">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-deep-blue mb-6">Page Not Found</h1>
        
        <div className="mb-8">
          <p className="text-xl mb-4">
            We're sorry, but the page you're looking for doesn't exist.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            You may have mistyped the address or the page may have moved.
          </p>
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
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  )
} 