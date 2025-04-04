import Link from "next/link"

export default function Home() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Pioneering Housing Stability, Transforming Lives</h2>
        <p className="text-xl text-gray-600 mb-8">
          Comfort Health Group is a leading provider of housing stabilization services, offering expert guidance and
          one-on-one support to overcome housing challenges and make a lasting impact in our community.
        </p>
        <Link
          href="#submit-referral"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Click Here to Submit A Referral Today
        </Link>
      </div>
    </section>
  )
}

