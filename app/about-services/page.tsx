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

      <div id="housing-stabilization" className="scroll-mt-96"></div>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-deep-blue mb-6">Housing Stabilization Services</h2>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
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
      </section>

      <div id="housing-transition" className="scroll-mt-96"></div>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-deep-blue mb-6">Housing Transition Services</h2>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
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
      </section>

      <div id="housing-sustaining" className="scroll-mt-96"></div>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-deep-blue mb-6">Housing Sustaining Services</h2>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
          <p className="text-lg mb-6 leading-relaxed">
            We support clients in maintaining their housing and building long-term stability. Our sustaining services focus on helping individuals develop the skills and resources needed to remain stably housed and thrive in their communities.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Our experienced team works alongside you to address challenges that might threaten housing stability, build positive relationships with landlords and neighbors, and connect you with community resources that support your ongoing success and independence.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-deep-blue mb-4">Who Qualifies?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Recent housing transition clients</li>
              <li>Individuals at risk of housing instability</li>
              <li>People with changing support needs</li>
              <li>Those who need assistance with landlord communication</li>
              <li>Individuals learning independent living skills</li>
            </ul>
          </div>
        </div>
      </section>

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

      <section className="bg-soft-peach p-8 rounded-lg shadow-md text-center mb-10">
        <h2 className="text-2xl font-bold text-deep-blue mb-6">Connect With Us</h2>
        <p className="text-lg mb-6">Have questions about our housing stabilization services? We're here to help.</p>
        <div className="flex justify-center">
          <Link href="/submit-referral" className="btn-primary inline-block px-8 py-4 text-base">
            Submit A Referral
          </Link>
        </div>
      </section>
    </div>
  )
}

