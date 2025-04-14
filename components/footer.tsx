import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Comfort Health Group</h3>
            <p className="text-sm text-white/90">Pioneering Housing Stability, Transforming Lives</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-services"
                  className="text-white/90 hover:text-caring-green transition-colors"
                >
                  About Services
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-referral"
                  className="text-white/90 hover:text-caring-green transition-colors"
                >
                  Submit Referral
                </Link>
              </li>
              <li>
                <Link
                  href="/hipaa-privacy"
                  className="text-white/90 hover:text-caring-green transition-colors"
                >
                  HIPAA & Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/90">
              <li>Phone: +1 (651) 363-6866</li>
              <li>Email: info.chgllc@gmail.com</li>
              <li>Address: 6160 Summit Dr N, Brooklyn Center, MN 55430</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/90">
          &copy; {new Date().getFullYear()} Comfort Health Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

