import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Home, Users, FileText, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/comfort-health-group-logo.png"
              alt="Comfort Health Group"
              width={150}
              height={45}
              className="h-auto sm:w-[180px] md:w-[198px]"
            />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-deep-blue hover:text-caring-green transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
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

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-base py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-5 h-5 mr-2" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-services"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-base py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users className="w-5 h-5 mr-2" />
                  <span>About Us + Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-referral"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-base py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Submit Referral</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

