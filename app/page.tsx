import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comfort Health Group | Housing Stabilization Services",
  description: "Comfort Health Group provides housing stabilization services in Minnesota, helping individuals find and maintain stable housing."
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-16 md:mb-20 pt-6 md:pt-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-blue mb-6 md:mb-8">
          Pioneering Housing Stability, Transforming Lives
        </h1>
        <p className="text-lg md:text-xl text-deep-blue/80 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Comfort Health Group is a leading provider of housing stabilization services, offering expert guidance and
          one-on-one support to overcome housing challenges and make a lasting impact in our community.
        </p>
        <Link href="/submit-referral" className="btn-primary inline-block px-8 py-4 text-base md:text-lg">
          Click Here to Submit A Referral Today
        </Link>
      </section>

      <section className="mb-16 md:mb-20">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue text-center mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-deep-blue/80 mb-4 leading-relaxed">
                At Comfort Health Group, we're dedicated to helping individuals with disabilities secure and maintain
                stable housing through Minnesota's Housing Stabilization Services program.
              </p>
              <p className="text-deep-blue/80 leading-relaxed">
                Our team works directly with clients to navigate housing challenges, from finding suitable living
                arrangements to developing the skills needed for long-term independence.
              </p>
            </div>
            <div className="relative h-60 md:h-72 rounded-lg overflow-hidden">
              <Image
                src="/images/minnesota-image.jpeg"
                alt="Minnesota cityscape"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft-peach rounded-lg p-8 md:p-12 mb-16 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-blue text-center mb-10">Why Choose Comfort Health Group?</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <div className="card bg-white p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-deep-blue">Personalized Approach</h3>
            <p className="leading-relaxed text-deep-blue/80">We tailor our services to meet your unique needs and circumstances.</p>
          </div>
          <div className="card bg-white p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-deep-blue">Experienced Team</h3>
            <p className="leading-relaxed text-deep-blue/80">
              Our dedicated professionals have years of experience in housing stabilization.
            </p>
          </div>
          <div className="card bg-white p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-deep-blue">Comprehensive Support</h3>
            <p className="leading-relaxed text-deep-blue/80">
              From finding a home to maintaining it, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mb-16 md:mb-20 scroll-mt-40">
        <ContactForm />
      </section>

      <section className="text-center mb-12 bg-white rounded-lg shadow-sm p-10 md:p-16">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-6">Ready to Take the First Step?</h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">Let us help you on your journey to stable, comfortable housing.</p>
        <Link href="/submit-referral" className="btn-primary inline-block px-8 py-4 text-base md:text-lg">
          Submit a Referral Now
        </Link>
      </section>
    </div>
  )
}

