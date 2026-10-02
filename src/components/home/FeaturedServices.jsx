import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import servicesData from "../../data/servicesData";
import ServiceCard from "../services/ServiceCard";
import FadeIn from "../common/FadeIn";

const FeaturedServices = () => {
  return (
    <section className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">

            {/* Small Label */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A96B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                Our Treatments
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl">
              Treatments designed for

              <span className="mt-2 block font-light italic text-[#3F4A38]">
                complete relaxation
              </span>
            </h2>

            {/* Gold Detail */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
            </div>

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-[#62675E]">
              Choose from our carefully designed treatments and give
              yourself the relaxation and care you deserve.
            </p>

          </div>
        </FadeIn>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              direction="up"
            >
              <div className="h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_10px_35px_rgba(63,74,56,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(63,74,56,0.14)]">
                <ServiceCard service={service} />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View All Button */}
        <FadeIn delay={0.2}>
          <div className="mt-12 flex justify-center">

            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(63,74,56,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-[0_15px_35px_rgba(63,74,56,0.25)]"
            >
              View All Services

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default FeaturedServices;