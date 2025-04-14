import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Our Services | Comfort Health Group",
  description: "Learn about our housing services, including Housing Stabilization Services, Housing Transition Services, and Housing Sustaining Services."
}

export default function AboutServices() {
  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <h1 className="text-4xl font-bold text-deep-blue mb-12 text-center">About Us + Our Services</h1>

      <section className="mb-16" id="mission">
        <h2 className="text-3xl font-bold text-deep-blue mb-6">Our Mission & Impact</h2>
        <p className="text-lg mb-6 leading-relaxed">
          At Comfort Health Group, our mission is to foster stability, empowerment, and overall well-being in
          communities. We serve the Twin Cities and surrounding metro areas with a personalized approach that goes
          beyond simply securing housing.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          We're committed to creating lasting positive change in the lives of our clients through compassionate, culturally-responsive support. Our team of dedicated professionals works collaboratively with individuals and families to address their unique needs and build pathways to independence and long-term success.
        </p>
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/minnesota-beautiful.jpg"
            alt="Minneapolis skyline at sunset"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      <div id="housing-stabilization" className="scroll-mt-48">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-deep-blue mb-4">Housing Stabilization Services (HSS)</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Housing Stabilization Services is a Minnesota Medical Assistance benefit program designed to help individuals with disabilities, including mental illness and substance use disorder, as well as seniors, in the process of finding and maintaining suitable housing.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            We believe all Minnesotans with disabilities deserve to live, work, and engage in communities of their choice. Finding housing, managing finances, navigating landlord relationships, and understanding lease agreements can be challenging. Our services aim to make stable, affordable housing accessible to improve overall well-being.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-deep-blue mb-4">Who Qualifies?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Adults residing in Minnesota</li>
              <li>Have active Medical Assistance coverage</li>
              <li>Are 18 years of age or older</li>
              <li>Have a documented disability or mental illness</li>
              <li>Are experiencing housing instability</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="housing-transition" className="scroll-mt-48">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-deep-blue mb-4">Housing Transition Services</h2>
          <p className="text-lg mb-6 leading-relaxed">
            We assist clients in planning for, finding, and moving into homes in their communities. Our comprehensive transition services help individuals navigate the complex process of securing appropriate housing while providing essential support every step of the way.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Whether you're seeking your first home, transitioning from homelessness, or moving to more suitable accommodations, our team provides personalized guidance to ensure a smooth transition to stable housing that meets your needs and preferences.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-deep-blue mb-4">Who Qualifies?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Individuals experiencing homelessness</li>
              <li>People in unstable or unsafe housing situations</li>
              <li>Those seeking more independent living arrangements</li>
              <li>Individuals transitioning from institutional settings</li>
              <li>People with changing accessibility needs</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="housing-sustaining" className="scroll-mt-48">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-deep-blue mb-4">Housing Sustaining Services</h2>
          <p className="text-lg mb-6 leading-relaxed">
            We support clients in maintaining their housing and building long-term stability. Our sustaining services focus on helping individuals develop the skills and resources needed to remain stably housed and thrive in their communities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-deep-blue mb-3">Key Services Include:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Housing stability planning and support</li>
                <li>Assistance with lease compliance</li>
                <li>Help with utility management</li>
                <li>Connection to community resources</li>
                <li>Ongoing case management</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-deep-blue mb-3">Our Approach:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Regular check-ins and support</li>
                <li>Skill-building workshops</li>
                <li>Crisis intervention when needed</li>
                <li>Advocacy with landlords and service providers</li>
                <li>Long-term stability planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-deep-blue mb-6">Our Core Services Include</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-4">Planning & Assessment</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Developing personalized housing plans</li>
              <li>Determining benefit eligibility</li>
              <li>Conducting housing needs assessments</li>
              <li>Budget development and financial planning</li>
              <li>Identifying housing barriers and solutions</li>
            </ul>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-4">Housing Support</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Assistance with housing applications</li>
              <li>Support with tenant screening</li>
              <li>Researching suitable housing options</li>
              <li>Transportation to housing appointments</li>
              <li>Move-in assistance and coordination</li>
            </ul>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-4">Ongoing Stability</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tenant education and advocacy</li>
              <li>Early intervention for housing issues</li>
              <li>Community resource connections</li>
              <li>Benefits application assistance</li>
              <li>Building independent living skills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-deep-blue mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Comfort Health Group, we are dedicated to providing comprehensive housing support services that empower individuals to achieve and maintain stable housing. Our mission is to transform lives through accessible, person-centered care that addresses both housing needs and overall well-being.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

