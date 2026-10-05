import {
  ArrowRight,
  CalendarCheck,
  Phone,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

import FadeIn from "../common/FadeIn";

const CTA = () => {
  const phoneNumber = "919341314387";

  const whatsappMessage =
    "Hello Simran Day/Night Spa, I would like to know more about your spa and massage services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      className="relative overflow-hidden bg-[#3F4A38] py-20 sm:py-24 lg:py-28"
      aria-labelledby="cta-heading"
    >
      {/* Decorative Elements */}
      <div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A96B]/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Icon */}
        <FadeIn direction="down">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D9C7A2]/40 bg-[#FFFDF8]/10 text-[#D9C7A2] shadow-lg backdrop-blur-sm"
            aria-hidden="true"
          >
            <CalendarCheck size={27} strokeWidth={1.7} />
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
            Spa & Massage in Digha
          </p>

          <h2
            id="cta-heading"
            className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#FFFDF8] sm:text-4xl lg:text-5xl"
          >
            Ready to Relax, Refresh &
            <span className="mt-2 block font-light italic text-[#D9C7A2]">
              Renew?
            </span>
          </h2>

          {/* Gold Detail */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
            <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
            Give yourself the care you deserve at{" "}
            <strong className="font-semibold text-white">
              Simran Day/Night Spa
            </strong>{" "}
            in New Digha, Digha. Book a relaxing spa or massage treatment
            and enjoy a peaceful wellness experience.
          </p>
        </FadeIn>

        {/* Main Buttons */}
        <FadeIn delay={0.3}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/booking"
              aria-label="Book a spa or massage appointment in Digha"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FFFDF8] px-7 py-3.5 text-sm font-semibold text-[#3F4A38] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:w-auto"
            >
              Book Your Appointment

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={`tel:+${phoneNumber}`}
              aria-label="Call Simran Day/Night Spa in Digha"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D9C7A2]/60 px-7 py-3.5 text-sm font-semibold text-[#FFFDF8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFFDF8]/10 sm:w-auto"
            >
              <Phone size={17} aria-hidden="true" />
              Call Now
            </a>
          </div>
        </FadeIn>

        {/* WhatsApp */}
        <FadeIn delay={0.4}>
          <div className="mt-4 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Simran Day/Night Spa on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full border border-[#D9C7A2]/30 bg-[#FFFDF8]/5 px-6 py-3 text-sm font-medium text-[#E5E9DE] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFFDF8]/10"
            >
              <MessageCircle
                size={18}
                aria-hidden="true"
                className="text-[#D9C7A2]"
              />
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;