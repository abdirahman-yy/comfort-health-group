import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Comfort Health Group</h3>
            <p className="text-sm">Pioneering Housing Stability, Transforming Lives</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Phone:</p>
            <p className="text-sm">651-363-6866</p>
            <p className="text-sm">Email:</p>
            <p className="text-sm">info.chgllc@gmail.com</p>
            <p className="text-sm">Address:</p>
            <p className="text-sm">6160 Summit Drive,</p>
            <p className="text-sm">Brooklyn Center, MN 55430</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-services" className="text-sm hover:underline">
                  About Us + Services
                </Link>
              </li>
              <li>
                <Link href="/submit-referral" className="text-sm hover:underline">
                  Submit Referral
                </Link>
              </li>
              <li>
                <Link href="/hipaa-privacy" className="text-sm hover:underline">
                  HIPAA & Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          &copy; {new Date().getFullYear()} Comfort Health Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

