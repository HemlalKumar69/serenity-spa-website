import { ArrowRight, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";

import FadeIn from "../common/FadeIn";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-emerald-900 py-16 sm:py-20 lg:py-24">
      {/* Decorative Elements */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-emerald-700/40 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-600/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

        {/* Icon */}
        <FadeIn direction="down">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
            <CalendarCheck size={27} />
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Your Wellness Journey Starts Here
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Relax, Refresh &{" "}
            <span className="text-emerald-200">Renew?</span>
          </h2>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
            Give yourself the care you deserve. Book a relaxing treatment with
            our experienced therapists and enjoy your personal moment of peace.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/booking"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-xl sm:w-auto"
            >
              Book Your Appointment

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default CTA;