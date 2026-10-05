import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-[#E2E6DC] bg-[#F8F9F4]/95 shadow-[0_2px_18px_rgba(63,74,56,0.07)] backdrop-blur-md">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ==================== LOGO ==================== */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#D9C7A2] bg-[#F1EEE3] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
            <img
              src="/logo.jpg"
              alt="Simran DayNight Spa Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="leading-none">
            <h1 className="text-[19px] font-bold tracking-[0.12em] text-[#292D2A] sm:text-xl">
              𝗦𝗜𝗠𝗥𝗔𝗡
            </h1>

            <p className="mt-1 text-[9px] font-medium tracking-[0.28em] text-[#7F9276] sm:text-[10px]">
              𝗗𝗮𝘆𝗡𝗶𝗴𝗵𝘁 𝗦𝗽𝗮
            </p>
          </div>
        </Link>

        {/* ==================== DESKTOP NAVIGATION ==================== */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#3F4A38]"
                    : "text-[#626861] hover:text-[#3F4A38]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-[#C6A96B]" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* ==================== PHONE ==================== */}
          <a
            href="tel:+919341314387"
            className="hidden items-center gap-2 text-sm font-medium text-[#525852] transition-colors hover:text-[#3F4A38] xl:flex"
          >
            <Phone size={16} className="text-[#8D713D]" />
            +91 9341314387
          </a>

          {/* ==================== BOOKING BUTTON ==================== */}
          <Link
            to="/booking"
            className="group inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30382B] hover:shadow-lg"
          >
            Book Appointment

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE2D7] bg-white text-[#3F463F] shadow-sm transition-all duration-300 hover:border-[#C9D1C3] hover:bg-[#F1F3EC] hover:text-[#3F4A38] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* ==================== MOBILE MENU ==================== */}
      <div
        className={`overflow-hidden border-t border-[#E2E6DC] bg-[#F8F9F4] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
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
                  `rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#E9EEE4] text-[#3F4A38]"
                      : "text-[#525852] hover:bg-white hover:text-[#3F4A38]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* ==================== MOBILE PHONE ==================== */}
            <a
              href="tel:+919341314387"
              onClick={closeMenu}
              className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium text-[#525852] transition hover:bg-white hover:text-[#3F4A38]"
            >
              <Phone size={17} className="text-[#8D713D]" />
              +91 9341314387
            </a>

            {/* ==================== MOBILE BOOKING ==================== */}
            <Link
              to="/booking"
              onClick={closeMenu}
              className="group mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#3F4A38] px-5 py-3.5 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#30382B] hover:shadow-lg"
            >
              Book Appointment

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;