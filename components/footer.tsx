import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div className="bg-deep-blue/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Comfort Health Group</h3>
            <p className="text-sm leading-relaxed">Pioneering Housing Stability, Transforming Lives</p>
          </div>
          <div className="bg-deep-blue/30 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Phone:</p>
                <p className="text-sm mb-2 text-white/90">651-363-6866</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email:</p>
                <p className="text-sm mb-2 text-white/90">info.chgllc@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-medium">Address:</p>
                <p className="text-sm text-white/90">6160 Summit Drive,</p>
                <p className="text-sm text-white/90">Brooklyn Center, MN 55430</p>
              </div>
            </div>
          </div>
          <div className="bg-deep-blue/30 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-caring-green transition-colors inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-services" className="text-sm hover:text-caring-green transition-colors inline-block py-1">
                  About Us + Services
                </Link>
              </li>
              <li>
                <Link href="/submit-referral" className="text-sm hover:text-caring-green transition-colors inline-block py-1">
                  Submit Referral
                </Link>
              </li>
              <li>
                <Link href="/hipaa-privacy" className="text-sm hover:text-caring-green transition-colors inline-block py-1">
                  HIPAA & Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm">
          &copy; {new Date().getFullYear()} Comfort Health Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

