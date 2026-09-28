import {
  ArrowLeft,
  CalendarCheck,
  Check,
  Clock,
  Sparkles,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import servicesData from "../../data/servicesData";
import FadeIn from "../../components/common/FadeIn";

const ServiceDetails = () => {
  const { id } = useParams();

  const service = servicesData.find(
    (item) => item.id.toString() === id
  );

  // If service doesn't exist
  if (!service) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-stone-50 px-4">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Service Not Found
            </h1>

            <p className="mt-3 text-sm text-gray-600">
              The treatment you are looking for does not exist.
            </p>

            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              <ArrowLeft size={17} />
              Back to Services
            </Link>
          </div>
        </FadeIn>
      </section>
    );
  }

  const benefits = [
    "Helps reduce everyday stress and tension",
    "Promotes relaxation and overall well-being",
    "Performed by experienced wellness professionals",
    "Personalized attention for a comfortable experience",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <FadeIn direction="left">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-100 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Services
            </Link>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Our Treatment
              </p>

              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                {service.title}
              </h1>

              <p className="mt-4 text-sm leading-7 text-emerald-100 sm:text-base">
                A carefully designed wellness experience created to help you
                relax, refresh and feel your best.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Details */}
      <section className="bg-stone-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

          {/* Image */}
          <FadeIn direction="left">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={service.image}
                alt={service.title}
                className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.15}>
            <div className="flex flex-col justify-center">

              {/* Duration & Price */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-100">
                  <Clock size={17} className="text-emerald-700" />
                  {service.duration}
                </div>

                <div className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold text-white">
                  {service.price}
                </div>
              </div>

              <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                Relax. Refresh. Reconnect.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                {service.description}
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Our treatment is designed with your comfort in mind. From the
                moment you arrive, our team focuses on creating a peaceful and
                welcoming experience.
              </p>

              {/* Benefits */}
              <FadeIn delay={0.25}>
                <div className="mt-7">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                    <Sparkles size={19} className="text-emerald-700" />
                    Treatment Benefits
                  </h3>

                  <div className="mt-4 space-y-3">
                    {benefits.map((benefit, index) => (
                      <FadeIn
                        key={benefit}
                        delay={0.3 + index * 0.1}
                        direction="left"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <Check size={13} strokeWidth={3} />
                          </span>

                          <p className="text-sm text-gray-600">
                            {benefit}
                          </p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Booking */}
              <FadeIn delay={0.7}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/booking"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
                  >
                    <CalendarCheck size={18} />
                    Book This Treatment
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
                  >
                    Have Questions?
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-14 sm:py-18">
        <FadeIn>
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Ready for Your Wellness Experience?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Choose a convenient time and let our team take care of the rest.
            </p>

            <Link
              to="/booking"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
            >
              Book an Appointment

              <CalendarCheck
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default ServiceDetails;