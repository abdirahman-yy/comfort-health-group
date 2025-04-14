"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Users, FileText, Menu, X, ChevronDown, Phone } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDdRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesMobileOpen(false);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleServicesMobile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsServicesMobileOpen(!isServicesMobileOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (mobileDdRef.current && !mobileDdRef.current.contains(event.target as Node)) {
        setIsServicesMobileOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check for hash on page load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Add a small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    }
  }, [pathname])

  // Handle anchor link navigation
  const handleAnchorClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    const targetId = href.split("#")[1]
    
    // Close dropdowns
    setIsServicesDropdownOpen(false)
    setIsServicesMobileOpen(false)
    setIsMenuOpen(false)
    
    // If we're on a different page, navigate first then scroll
    if (window.location.pathname !== "/about-services") {
      router.push(href)
      // Add a listener for route changes
      const handleRouteChange = () => {
        // Remove the listener after it's used
        window.removeEventListener("popstate", handleRouteChange)
        // Scroll to the element after a short delay to ensure the page has loaded
        setTimeout(() => {
          const element = document.getElementById(targetId)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 300)
      }
      window.addEventListener("popstate", handleRouteChange)
    } else {
      // If we're already on the page, just scroll
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="fixed w-full bg-white shadow-sm z-10">
      <div className="container mx-auto px-3 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/comfort-health-group-logo.png"
              alt="Comfort Health Group"
              width={160}
              height={45}
              className="h-auto sm:w-[170px] md:w-[190px]"
            />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-deep-blue hover:text-caring-green transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center text-base font-medium text-deep-blue hover:text-caring-green transition-colors"
                >
                  About Us + Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div 
                  ref={dropdownRef}
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 ${isServicesDropdownOpen ? 'block' : 'hidden'}`}
                >
                  <Link
                    href="/about-services"
                    className="block w-full text-left px-4 py-2 text-base hover:bg-gray-100 transition-colors"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    About Us & Impact
                  </Link>
                  <button
                    onClick={(e) => handleAnchorClick(e, '/about-services#housing-stabilization')}
                    className="block w-full text-left px-4 py-2 text-base hover:bg-gray-100 transition-colors"
                  >
                    Housing Stabilization Services (HSS)
                  </button>
                  <button
                    onClick={(e) => handleAnchorClick(e, '/about-services#housing-transition')}
                    className="block w-full text-left px-4 py-2 text-base hover:bg-gray-100 transition-colors"
                  >
                    Housing Transition Services
                  </button>
                  <button
                    onClick={(e) => handleAnchorClick(e, '/about-services#housing-sustaining')}
                    className="block w-full text-left px-4 py-2 text-base hover:bg-gray-100 transition-colors"
                  >
                    Housing Sustaining Services
                  </button>
                </div>
              </li>
              <li>
                <Link
                  href="/hipaa-privacy"
                  className="text-base font-medium text-deep-blue hover:text-caring-green transition-colors"
                >
                  HIPAA & Privacy
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-base font-medium text-deep-blue hover:text-caring-green transition-colors"
                  onClick={(e) => handleAnchorClick(e, '/#contact')}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  href="/submit-referral"
                  className="text-base font-medium bg-caring-green text-white px-4 py-2 rounded hover:bg-caring-green/90 transition-colors"
                >
                  Submit Referral
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-3">
            <ul className="flex flex-col space-y-4">
              <li>
                <div className="relative">
                  <button
                    onClick={toggleServicesMobile}
                    className="flex items-center w-full text-base font-medium text-deep-blue hover:text-caring-green transition-colors"
                  >
                    About Us + Services
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesMobileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesMobileOpen && (
                    <div ref={mobileDdRef} className="pl-4 mt-2 space-y-2">
                      <Link
                        href="/about-services"
                        className="block w-full text-left py-2 text-base text-deep-blue hover:text-caring-green"
                        onClick={(e) => {
                          setIsServicesMobileOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        About Us & Impact
                      </Link>
                      <button
                        className="block w-full text-left py-2 text-base text-deep-blue hover:text-caring-green"
                        onClick={(e) => handleAnchorClick(e, '/about-services#housing-stabilization')}
                      >
                        Housing Stabilization Services (HSS)
                      </button>
                      <button
                        className="block w-full text-left py-2 text-base text-deep-blue hover:text-caring-green"
                        onClick={(e) => handleAnchorClick(e, '/about-services#housing-transition')}
                      >
                        Housing Transition Services
                      </button>
                      <button
                        className="block w-full text-left py-2 text-base text-deep-blue hover:text-caring-green"
                        onClick={(e) => handleAnchorClick(e, '/about-services#housing-sustaining')}
                      >
                        Housing Sustaining Services
                      </button>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href="/hipaa-privacy"
                  className="block text-base font-medium text-deep-blue hover:text-caring-green transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HIPAA & Privacy
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="block text-base font-medium text-deep-blue hover:text-caring-green transition-colors"
                  onClick={(e) => handleAnchorClick(e, '/#contact')}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  href="/submit-referral"
                  className="block text-base font-medium bg-caring-green text-white px-4 py-2 rounded hover:bg-caring-green/90 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Submit Referral
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}



