import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Therapists", path: "/therapists" },
    { name: "Gallery", path: "/gallery" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
            <span className="text-xl">🌿</span>
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-bold tracking-wide text-gray-900">
              SERENITY
            </h1>

            <p className="mt-1 text-[10px] font-medium tracking-[0.3em] text-emerald-700">
              SPA & WELLNESS
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-emerald-700"
                    : "text-gray-600 hover:text-emerald-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-600" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="hidden xl:flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <Phone size={16} />
            +91 0000000000
          </a>

          {/* Booking Button */}
          <Link
            to="/booking"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-gray-800 transition hover:bg-emerald-50 hover:text-emerald-700 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Phone */}
            <a
              href="tel:+919876543210"
              onClick={closeMenu}
              className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Phone size={17} />
              +91 98765 43210
            </a>

            {/* Mobile Booking */}
            <Link
              to="/booking"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-emerald-700 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;