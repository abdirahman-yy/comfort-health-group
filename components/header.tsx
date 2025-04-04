import Link from "next/link"
import Image from "next/image"
import { Home, Users, FileText } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/comfort-health-group-logo.png"
              alt="Comfort Health Group"
              width={198}
              height={60}
              className="h-auto"
            />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-sm"
                >
                  <Home className="w-4 h-4 mr-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-services"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-sm"
                >
                  <Users className="w-4 h-4 mr-1" />
                  <span>About Us + Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-referral"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-sm"
                >
                  <FileText className="w-4 h-4 mr-1" />
                  <span>Submit Referral</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

