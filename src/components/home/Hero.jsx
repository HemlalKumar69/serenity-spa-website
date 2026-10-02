import { Link } from "react-router-dom";
import { ArrowRight, Play, Phone, MessageCircle} from "lucide-react";

const Hero = () => {
  const phoneNumber = "917320817939";
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#EFF2E7]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">

          {/* Small Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] sm:text-sm">
              Wellness & Relaxation
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Relax Your Body.
            <br />
            <span className="font-light italic">
              Renew Your Mind.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Escape the everyday and discover a peaceful space designed
            to restore your body, refresh your mind and bring you back
            to your best self.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
            >
              Book Appointment
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              <Play size={17} />
              Explore Services
            </Link>
          </div>

           {/* Call & WhatsApp */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">

            {/* Call */}
            <a
              href={`tel:+${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9C7A2] bg-white/80 px-6 py-3 text-sm font-semibold text-[#52624D] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#F1F3EC] hover:shadow-md"
            >
              <Phone size={18} />
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber}?text=Hello%20Suman%20Day%20%26%20Night,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C9D1C3] bg-[#F1F3EC]/90 px-6 py-3 text-sm font-semibold text-[#52624D] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5EBDD] hover:shadow-md"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

          {/* Bottom Highlights */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/25 pt-6 sm:gap-8">
            <div>
              <p className="text-2xl font-bold sm:text-3xl">10+</p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Treatments
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold sm:text-3xl">5K+</p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold sm:text-3xl">4.9★</p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Client Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default Hero;