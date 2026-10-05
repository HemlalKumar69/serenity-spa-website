import { Link } from "react-router-dom";

import {
  ArrowRight,
  Play,
  Phone,
  MessageCircle,
} from "lucide-react";

const Hero = () => {
  const phoneNumber = "919341314387";

  return (
    <section
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#EFF2E7]"
      aria-label="Simran Day/Night Spa and Massage Center in Digha"
    >
      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=85')",
        }}
        role="img"
        aria-label="Relaxing massage treatment at a spa"
      />

      {/* =========================
          DARK OVERLAY
      ========================== */}
      <div className="absolute inset-0 bg-black/45" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">

          {/* =========================
              SMALL LABEL
          ========================== */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] sm:text-sm">
              Wellness & Relaxation in Digha
            </span>
          </div>

          {/* =========================
              MAIN SEO HEADING
          ========================== */}

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Spa & Massage Center
            <br />

            <span className="font-light italic">
              in Digha, West Bengal
            </span>
          </h1>

          {/* =========================
              SEO SUPPORTING CONTENT
          ========================== */}

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Relax, rejuvenate and reconnect at{" "}
            <strong>Simran Day/Night Spa</strong> in New Digha.
            Enjoy professional Swedish massage, deep tissue massage,
            aromatherapy, hot stone therapy, body spa and facial
            treatments in a peaceful wellness environment.
          </p>

          {/* =========================
              MAIN BUTTONS
          ========================== */}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            {/* BOOKING */}
            <Link
              to="/booking"
              aria-label="Book a spa and massage appointment in Digha"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
            >
              Book Appointment

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* SERVICES */}
            <Link
              to="/services"
              aria-label="Explore spa and massage services in Digha"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              <Play size={17} />

              Explore Services
            </Link>
          </div>

          {/* =========================
              CALL & WHATSAPP
          ========================== */}

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">

            {/* CALL */}
            <a
              href={`tel:+${phoneNumber}`}
              aria-label="Call Simran Day/Night Spa in Digha"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9C7A2] bg-white/80 px-6 py-3 text-sm font-semibold text-[#52624D] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#F1F3EC] hover:shadow-md"
            >
              <Phone size={18} />

              Call Now
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${phoneNumber}?text=Hello%20Simran%20Day%20%26%20Night,%20I%20would%20like%20to%20know%20more%20about%20your%20spa%20and%20massage%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Simran Day/Night Spa on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C9D1C3] bg-[#F1F3EC]/90 px-6 py-3 text-sm font-semibold text-[#52624D] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5EBDD] hover:shadow-md"
            >
              <MessageCircle size={18} />

              WhatsApp
            </a>
          </div>

          {/* =========================
              BOTTOM HIGHLIGHTS
          ========================== */}

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/25 pt-6 sm:gap-8">

            <div>
              <p className="text-2xl font-bold sm:text-3xl">
                10+
              </p>

              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Spa Treatments
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold sm:text-3xl">
                5K+
              </p>

              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold sm:text-3xl">
                4.9★
              </p>

              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Client Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          DECORATIVE BOTTOM GRADIENT
      ========================== */}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default Hero;