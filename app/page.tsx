import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
          Pioneering Housing Stability, Transforming Lives
        </h1>
        <p className="text-xl text-deep-blue/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Comfort Health Group is a leading provider of housing stabilization services, offering expert guidance and
          one-on-one support to overcome housing challenges and make a lasting impact in our community.
        </p>
        <Link href="/submit-referral" className="btn-primary">
          Click Here to Submit A Referral Today
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="section-title">Our Commitment to You</h2>
          <p className="text-lg mb-6 leading-relaxed">
            At Comfort Health Group, we understand that stable housing is the foundation for a better life. Our
            dedicated team works tirelessly to ensure that every individual we serve finds not just a house, but a true
            home.
          </p>
          <Link href="/about-services" className="btn-secondary">
            Learn More About Our Services
          </Link>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/minnesota-image.jpeg"
            alt="Minneapolis skyline and Mississippi River"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="bg-soft-peach rounded-lg p-8 mb-16">
        <h2 className="section-title text-center">Why Choose Comfort Health Group?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-white">
            <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
            <p className="leading-relaxed">We tailor our services to meet your unique needs and circumstances.</p>
          </div>
          <div className="card bg-white">
            <h3 className="text-xl font-semibold mb-4">Experienced Team</h3>
            <p className="leading-relaxed">
              Our dedicated professionals have years of experience in housing stabilization.
            </p>
          </div>
          <div className="card bg-white">
            <h3 className="text-xl font-semibold mb-4">Comprehensive Support</h3>
            <p className="leading-relaxed">
              From finding a home to maintaining it, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="section-title">Ready to Take the First Step?</h2>
        <p className="text-xl mb-8 leading-relaxed">Let us help you on your journey to stable, comfortable housing.</p>
        <Link href="/submit-referral" className="btn-primary">
          Submit a Referral Now
        </Link>
      </section>
    </div>
  )
}

