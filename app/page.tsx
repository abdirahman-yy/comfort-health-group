import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12 md:mb-16 pt-4 md:pt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue mb-4 md:mb-6">
          Pioneering Housing Stability, Transforming Lives
        </h1>
        <p className="text-lg md:text-xl text-deep-blue/80 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          Comfort Health Group is a leading provider of housing stabilization services, offering expert guidance and
          one-on-one support to overcome housing challenges and make a lasting impact in our community.
        </p>
        <Link href="/submit-referral" className="btn-primary inline-block px-6 py-3 text-base md:text-lg">
          Click Here to Submit A Referral Today
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-4">Our Commitment to You</h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            At Comfort Health Group, we understand that stable housing is the foundation for a better life. Our
            dedicated team works tirelessly to ensure that every individual we serve finds not just a house, but a true
            home.
          </p>
          <Link href="/about-services" className="btn-secondary inline-block px-5 py-2.5 text-base">
            Learn More About Our Services
          </Link>
        </div>
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
          <Image
            src="/images/minnesota-image.jpeg"
            alt="Minneapolis skyline and Mississippi River"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="bg-soft-peach rounded-lg p-6 md:p-8 mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-blue text-center mb-6 md:mb-8">Why Choose Comfort Health Group?</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="card bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-deep-blue">Personalized Approach</h3>
            <p className="leading-relaxed text-deep-blue/80">We tailor our services to meet your unique needs and circumstances.</p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-deep-blue">Experienced Team</h3>
            <p className="leading-relaxed text-deep-blue/80">
              Our dedicated professionals have years of experience in housing stabilization.
            </p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-deep-blue">Comprehensive Support</h3>
            <p className="leading-relaxed text-deep-blue/80">
              From finding a home to maintaining it, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-4">Ready to Take the First Step?</h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">Let us help you on your journey to stable, comfortable housing.</p>
        <Link href="/submit-referral" className="btn-primary inline-block px-6 py-3 text-base md:text-lg">
          Submit a Referral Now
        </Link>
      </section>
    </div>
  )
}

