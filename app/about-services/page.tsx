import Image from "next/image"

export default function AboutServices() {
  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <h1 className="text-4xl font-bold text-deep-blue mb-12 text-center">About Us + Our Services</h1>

      <section className="mb-16">
        <h2 className="section-title">Our Mission & Impact</h2>
        <p className="text-lg mb-6 leading-relaxed">
          At Comfort Health Group, our mission is to foster stability, empowerment, and overall well-being in
          communities. We serve the Twin Cities and surrounding metro areas with a personalized approach that goes
          beyond simply securing housing.
        </p>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/minnesota-beautiful.jpg"
            alt="Minneapolis skyline at sunset"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="section-title">Housing Stabilization Services (HSS)</h2>
        <p className="text-lg mb-6 leading-relaxed">
          HSS is a Minnesota Medical Assistance benefit program dedicated to supporting individuals with disabilities,
          mental illness, substance use challenges, and seniors. Our program is designed to break down barriers to
          affordable housing and improve overall stability and quality of life.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Housing Transition Services</h3>
            <p className="leading-relaxed">
              We assist clients in planning, finding, and moving into a home. This includes help with benefit
              applications, budgeting, and building relationships with landlords.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Housing Sustaining Services</h3>
            <p className="leading-relaxed">
              We support clients in maintaining their housing once secured, with regular check-ins, updating support
              plans, and offering continued education on tenant rights.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

