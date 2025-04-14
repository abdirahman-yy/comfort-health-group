import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Home, Users, FileText, Menu, X, ChevronDown, Phone } from "lucide-react"
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

  // Handle anchor link navigation
  const handleAnchorClick = (anchor: string) => {
    setIsServicesDropdownOpen(false);
    setIsServicesMobileOpen(false);
    setIsMenuOpen(false);
    
    if ((pathname === '/about-services' && anchor.startsWith('housing-')) || 
        (pathname === '/' && anchor === 'contact')) {
      // If already on the page with the correct anchor, scroll to it immediately
      scrollToAnchor(anchor);
    } else if (anchor.startsWith('housing-')) {
      // If it's a housing anchor, navigate to about-services page with the hash
      router.push(`/about-services#${anchor}`);
    } else if (anchor === 'contact') {
      // If it's the contact anchor, navigate to home page with the hash
      router.push(`/#${anchor}`);
    }
  };

  // Function to scroll to an anchor with the correct offset
  const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 250,
          behavior: 'smooth'
        });
      }, 10);
    }
  };

  // Check for hash on page load
  useEffect(() => {
    // Handle hash in URL on initial load
    if ((pathname === '/about-services' && window.location.hash) || 
        (pathname === '/' && window.location.hash)) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToAnchor(hash);
      }, 500); // Longer delay for initial page load
    }
  }, [pathname]);

  return (
    <header className="fixed w-full bg-white shadow-sm z-10">
      <div className="container mx-auto px-3 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/comfort-health-group-logo.png"
              alt="Comfort Health Group"
              width={130}
              height={35}
              className="h-auto sm:w-[140px] md:w-[160px]"
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
            <ul className="flex space-x-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-xs py-1"
                >
                  <Home className="w-3.5 h-3.5 mr-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-xs py-1"
                >
                  <Users className="w-3.5 h-3.5 mr-1" />
                  <span>About Us + Services</span>
                  <ChevronDown className="w-2.5 h-2.5 ml-0.5" />
                </button>
                {isServicesDropdownOpen && (
                  <div ref={dropdownRef} className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-60">
                    <Link
                      href="/about-services"
                      className="block px-4 py-2 text-deep-blue hover:bg-gray-50 hover:text-caring-green"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      About Us & Impact
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-deep-blue hover:bg-gray-50 hover:text-caring-green"
                      onClick={() => handleAnchorClick('housing-stabilization')}
                    >
                      Housing Stabilization Services
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-deep-blue hover:bg-gray-50 hover:text-caring-green"
                      onClick={() => handleAnchorClick('housing-transition')}
                    >
                      Housing Transition Services
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-deep-blue hover:bg-gray-50 hover:text-caring-green"
                      onClick={() => handleAnchorClick('housing-sustaining')}
                    >
                      Housing Sustaining Services
                    </button>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/hipaa-privacy"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-xs py-1"
                >
                  <FileText className="w-3.5 h-3.5 mr-1" />
                  <span>HIPAA & Privacy</span>
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-xs py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('contact');
                  }}
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <Link
                  href="/submit-referral"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-xs py-1"
                >
                  <FileText className="w-3.5 h-3.5 mr-1" />
                  <span>Submit Referral</span>
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
                <Link
                  href="/"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-base py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-5 h-5 mr-2" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={toggleServicesMobile}
                    className="flex items-center w-full text-deep-blue hover:text-caring-green transition duration-300 text-base py-2"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    <span>About Us + Services</span>
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesMobileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesMobileOpen && (
                    <div ref={mobileDdRef} className="pl-7 mt-2 space-y-2">
                      <Link
                        href="/about-services"
                        className="block py-2 text-deep-blue hover:text-caring-green"
                        onClick={() => {
                          setIsServicesMobileOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        About Us & Impact
                      </Link>
                      <button
                        className="block w-full text-left py-2 text-deep-blue hover:text-caring-green"
                        onClick={() => handleAnchorClick('housing-stabilization')}
                      >
                        Housing Stabilization Services
                      </button>
                      <button
                        className="block w-full text-left py-2 text-deep-blue hover:text-caring-green"
                        onClick={() => handleAnchorClick('housing-transition')}
                      >
                        Housing Transition Services
                      </button>
                      <button
                        className="block w-full text-left py-2 text-deep-blue hover:text-caring-green"
                        onClick={() => handleAnchorClick('housing-sustaining')}
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
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-base py-2" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  <span>HIPAA & Privacy</span>
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-base py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('contact');
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <Link
                  href="/submit-referral"
                  className="flex items-center text-deep-blue hover:text-caring-green transition duration-300 text-base py-2"
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

