import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

import servicesData from "../../data/servicesData";
import FadeIn from "../../components/common/FadeIn";

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-900 py-20 sm:py-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Our Treatments
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Treatments for Your
              <span className="block text-emerald-200">
                Body & Mind
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
              Explore our carefully selected massage, spa and wellness
              treatments designed to help you relax, refresh and feel your best.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <FadeIn>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Choose Your Experience
                </p>

                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Our Signature Services
                </h2>
              </div>

              <p className="hidden text-sm text-gray-500 sm:block">
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
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Price */}
                    <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-md">
                      {service.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-medium text-gray-500">
                      <Clock size={15} className="text-emerald-700" />
                      {service.duration}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900"
                      >
                        View Details
                        <ArrowUpRight size={17} />
                      </Link>

                      <Link
                        to="/booking"
                        className="rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-800"
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

      {/* Bottom CTA */}
      <section className="bg-white py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Not Sure Which Treatment to Choose?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Our team can help you choose a treatment based on your relaxation
              and wellness needs.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
            >
              Talk to Our Team

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default Services;