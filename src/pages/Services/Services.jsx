import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

import servicesData from "../../data/servicesData";
import FadeIn from "../../components/common/FadeIn";

const Services = () => {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-[#3F4A38] py-20 sm:py-24 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A96B]/10" />

        <FadeIn>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            {/* Label */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A96B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
                Our Treatments
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
              Treatments for Your
              <span className="mt-2 block font-light italic text-[#D9C7A2]">
                Body & Mind
              </span>
            </h1>

            {/* Decorative line */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
              Explore our carefully selected massage, spa and wellness
              treatments designed to help you relax, refresh and feel your
              best.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <FadeIn>
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C6A96B]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                    Choose Your Experience
                  </p>
                </div>

                <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl">
                  Our Signature
                  <span className="mt-2 block font-light italic text-[#3F4A38]">
                    Services
                  </span>
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                  <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
                </div>
              </div>

              <p className="text-sm font-medium text-[#777B73]">
                {servicesData.length} treatments available
              </p>
            </div>
          </FadeIn>

          {/* Service Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <FadeIn
                key={service.id}
                delay={index * 0.12}
                direction="up"
              >
                <article className="group h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_10px_35px_rgba(63,74,56,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(63,74,56,0.15)]">

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/60 via-transparent to-transparent" />

                    {/* Price */}
                    <div className="absolute right-4 top-4 rounded-full border border-[#D9C7A2]/70 bg-[#FFFDF8]/95 px-4 py-2 text-sm font-semibold text-[#3F4A38] shadow-md backdrop-blur-sm">
                      {service.price}
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-[#252923]/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      <Clock
                        size={15}
                        className="text-[#D9C7A2]"
                      />
                      {service.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex min-h-[245px] flex-col p-6">

                    {/* Small decorative line */}
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-px w-7 bg-[#C6A96B]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C6A96B]" />
                    </div>

                    <h3 className="text-xl font-semibold text-[#252923] transition-colors duration-300 group-hover:text-[#3F4A38]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#62675E]">
                      {service.description}
                    </p>

                    {/* Bottom Actions */}
                    <div className="mt-auto flex items-center justify-between border-t border-[#E6E4DC] pt-5">

                      <Link
                        to={`/services/${service.id}`}
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#7C6436] transition-colors duration-300 hover:text-[#3F4A38]"
                      >
                        View Details

                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        />
                      </Link>

                      <Link
                        to="/booking"
                        className="rounded-full bg-[#3F4A38] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30382B] hover:shadow-md"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="bg-[#EFF2E7] pb-20 sm:pb-24 lg:pb-28">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

            <div className="rounded-[1.5rem] border border-white/80 bg-white px-6 py-12 shadow-[0_10px_35px_rgba(63,74,56,0.07)] sm:px-10 sm:py-14">

              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D]">
                <Clock size={23} />
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D]">
                  Need Help Choosing?
                </p>

                <span className="h-px w-10 bg-[#C6A96B]" />
              </div>

              <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-[#252923] sm:text-4xl">
                Not Sure Which Treatment
                <span className="mt-2 block font-light italic text-[#3F4A38]">
                  to Choose?
                </span>
              </h2>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#62675E] sm:text-base">
                Our team can help you choose a treatment based on your
                relaxation and wellness needs.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(63,74,56,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-[0_15px_35px_rgba(63,74,56,0.25)]"
              >
                Talk to Our Team

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default Services;