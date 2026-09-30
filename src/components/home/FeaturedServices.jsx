import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import servicesData from "../../data/servicesData";
import ServiceCard from "../services/ServiceCard";
import FadeIn from "../common/FadeIn";

const FeaturedServices = () => {
  return (
    <section className="bg-stone-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Our Treatments
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Treatments designed for
              <span className="block font-light italic">
                complete relaxation
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
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
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>

        {/* View All Button */}
        <FadeIn delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg"
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
