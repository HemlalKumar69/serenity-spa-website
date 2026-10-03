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
    // { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E4DA] bg-[#FAF9F6]/95 shadow-[0_2px_15px_rgba(82,98,77,0.06)] backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          {/* <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C7A2] bg-[#F1F3EC] shadow-sm">
            <span className="text-xl">🌿</span>
          </div> */}


          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#D9C7A2] bg-[#F1F3EC] shadow-sm">
            <img
              src="/logo.jpg"
              alt="Girl"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-bold tracking-[0.12em] text-[#292D2A]">
              SIMRAN
            </h1>

            <p className="mt-1 text-[10px] font-medium tracking-[0.3em] text-[#7F9276]">
              DayNight Spa
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
                `relative py-2 text-sm font-medium transition-all duration-300 ${isActive
                  ? "text-[#52624D]"
                  : "text-[#626861] hover:text-[#52624D]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#B6A477]" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Phone */}
          <a
            href="tel:+919341314387"
            className="hidden items-center gap-2 text-sm font-medium text-[#525852] transition-colors hover:text-[#52624D] xl:flex"
          >
            <Phone size={16} className="text-[#7F9276]" />
            +91 9341314387
          </a>

          {/* Booking Button */}
          <Link
            to="/booking"
            className="rounded-full bg-[#52624D] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3F4D3B] hover:shadow-lg"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E0D7] bg-white text-[#3F463F] shadow-sm transition-all hover:border-[#C9D1C3] hover:bg-[#F1F3EC] hover:text-[#52624D] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[#E8E4DA] bg-[#FAF9F6] transition-all duration-300 lg:hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
                  `rounded-xl px-4 py-3.5 text-sm font-medium transition ${isActive
                    ? "bg-[#F1F3EC] text-[#52624D]"
                    : "text-[#525852] hover:bg-white hover:text-[#52624D]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Phone */}
            <a
              href="tel:+919341314387"
              onClick={closeMenu}
              className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium text-[#525852] transition hover:bg-white hover:text-[#52624D]"
            >
              <Phone size={17} className="text-[#7F9276]" />
              +91 9341314387
            </a>

            {/* Mobile Booking */}
            <Link
              to="/booking"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-[#52624D] px-5 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-[#3F4D3B]"
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