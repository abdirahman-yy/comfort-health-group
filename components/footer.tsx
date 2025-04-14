import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Comfort Health Group</h3>
            <p className="text-sm text-white/90">Pioneering Housing Stability, Transforming Lives</p>
            <div className="pt-4">
              <h4 className="text-base font-semibold mb-2">Ready to Take the First Step?</h4>
              <p className="text-sm text-white/90 mb-4">Let us help you on your journey to stable, comfortable housing.</p>
              <Link 
                href="/submit-referral"
                className="inline-block bg-caring-green text-white text-sm font-semibold px-4 py-2 rounded hover:bg-caring-green/90 transition-colors"
              >
                Submit a Referral Now
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Phone:</p>
                <p className="text-sm text-white/90">651-363-6866</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email:</p>
                <p className="text-sm text-white/90">info.chgllc@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-medium">Address:</p>
                <p className="text-sm text-white/90">6160 Summit Drive,</p>
                <p className="text-sm text-white/90">Brooklyn Center, MN 55430</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-caring-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-services" className="text-sm hover:text-caring-green transition-colors">
                  About Us + Services
                </Link>
              </li>
              <li>
                <Link href="/submit-referral" className="text-sm hover:text-caring-green transition-colors">
                  Submit Referral
                </Link>
              </li>
              <li>
                <Link href="/hipaa-privacy" className="text-sm hover:text-caring-green transition-colors">
                  HIPAA & Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Send Us a Message</h4>
            <form className="space-y-3">
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-caring-green"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-caring-green"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium block mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-caring-green"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-1">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-caring-green"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-caring-green text-white text-sm font-semibold px-4 py-2 rounded hover:bg-caring-green/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/90">
          &copy; {new Date().getFullYear()} Comfort Health Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

