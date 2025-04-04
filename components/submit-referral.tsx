export default function SubmitReferral() {
  return (
    <section id="submit-referral" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Submit Referral</h2>
        <p className="text-gray-600 mb-8 text-center">
          If you or someone you know is facing housing challenges, we're here to help. Fill out the form below, and our
          dedicated referral team will review your submission and contact you within 24 to 48 hours.
        </p>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Client Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="clientName" className="block text-gray-700 mb-2">
                Full Legal Name
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="clientDOB" className="block text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="clientDOB"
                name="clientDOB"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="clientPhone" className="block text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="clientPhone"
                name="clientPhone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="clientEmail" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="clientEmail"
                name="clientEmail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="currentHousing" className="block text-gray-700 mb-2">
              Current Housing Situation
            </label>
            <textarea
              id="currentHousing"
              name="currentHousing"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 mb-2">Medical Assistance Status</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="maStatus" value="active" className="mr-2" required />
                Active
              </label>
              <label className="flex items-center">
                <input type="radio" name="maStatus" value="pending" className="mr-2" />
                Pending
              </label>
              <label className="flex items-center">
                <input type="radio" name="maStatus" value="none" className="mr-2" />
                None
              </label>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 mt-12 mb-6">Case Manager Information (if applicable)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="cmName" className="block text-gray-700 mb-2">
                Case Manager Name
              </label>
              <input
                type="text"
                id="cmName"
                name="cmName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="cmPhone" className="block text-gray-700 mb-2">
                Case Manager Phone
              </label>
              <input
                type="tel"
                id="cmPhone"
                name="cmPhone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="cmEmail" className="block text-gray-700 mb-2">
                Case Manager Email
              </label>
              <input
                type="email"
                id="cmEmail"
                name="cmEmail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit Referral
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

