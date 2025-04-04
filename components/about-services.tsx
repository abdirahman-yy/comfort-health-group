export default function AboutServices() {
  return (
    <section id="about-services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us + Our Services</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission & Impact</h3>
          <p className="text-gray-600 mb-4">
            At Comfort Health Group, our mission is to foster stability, empowerment, and overall well-being in
            communities. We serve the Twin Cities and surrounding metro areas with a personalized approach that goes
            beyond simply securing housing.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Housing Stabilization Services (HSS)</h3>
          <p className="text-gray-600 mb-4">
            HSS is a Minnesota Medical Assistance benefit program dedicated to supporting individuals with disabilities,
            mental illness, substance use challenges, and seniors. Our program is designed to break down barriers to
            affordable housing and improve overall stability and quality of life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Housing Transition Services</h4>
            <p className="text-gray-600">
              We assist clients in planning, finding, and moving into a home. This includes help with benefit
              applications, budgeting, and building relationships with landlords.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Housing Sustaining Services</h4>
            <p className="text-gray-600">
              We support clients in maintaining their housing once secured, with regular check-ins, updating support
              plans, and offering continued education on tenant rights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Housing Consultation Services</h4>
            <p className="text-gray-600">
              We provide expert guidance through personalized planning, particularly useful for clients navigating
              housing transitions without an active waiver or targeted case management.
            </p>
          </div>
        </div>
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <blockquote className="text-gray-700 italic">
            "I thought finding affordable housing options was an impossibility for me...my housing coordinator at
            Comfort Health Group made it a possibility."
          </blockquote>
          <p className="text-gray-600 mt-2">- Satisfied Client</p>
        </div>
      </div>
    </section>
  )
}

