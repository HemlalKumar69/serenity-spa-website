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
      <section className="flex min-h-[70vh] items-center justify-center bg-[#EFF2E7] px-4">
        <FadeIn>
          <div className="w-full max-w-md rounded-[1.5rem] border border-white/80 bg-white p-8 text-center shadow-[0_15px_40px_rgba(63,74,56,0.10)]">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D]">
              <Sparkles size={23} />
            </div>

            <h1 className="mt-6 text-3xl font-semibold text-[#252923]">
              Service Not Found
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#62675E]">
              The treatment you are looking for does not exist.
            </p>

            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-lg"
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
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-[#3F4A38] py-12 sm:py-16 lg:py-20">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <FadeIn direction="left">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#D9C7A2]/30 bg-white/5 px-4 py-2 text-sm font-medium text-[#E5E9DE] backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Services
            </Link>
          </FadeIn>

          {/* Hero Content */}
          <FadeIn delay={0.15}>
            <div className="mt-8 max-w-3xl">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
                  Our Treatment
                </p>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
                A carefully designed wellness experience created to help you
                relax, refresh and feel your best.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== MAIN DETAILS ==================== */}
      <section className="bg-[#EFF2E7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">

              {/* Decorative Border */}
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#C6A96B]/35 sm:-left-5 sm:-top-5" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white p-1.5 shadow-[0_25px_60px_rgba(63,74,56,0.15)]">
                <div className="overflow-hidden rounded-[1.6rem]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
                  />
                </div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/60 bg-[#FFFDF8]/95 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3]">
                  <Sparkles size={18} className="text-[#8D713D]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#8D713D]">
                    Wellness Experience
                  </p>
                  <p className="text-sm font-medium text-[#252923]">
                    Designed for you
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.15}>
            <div className="flex flex-col justify-center">

              {/* Duration & Price */}
              <div className="flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white px-4 py-2.5 text-sm font-semibold text-[#4D544B] shadow-sm">
                  <Clock
                    size={17}
                    className="text-[#8D713D]"
                  />
                  {service.duration}
                </div>

                <div className="rounded-full border border-[#D9C7A2]/40 bg-[#3F4A38] px-5 py-2.5 text-sm font-semibold text-white shadow-sm">
                  {service.price}
                </div>
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-3xl font-semibold leading-[1.12] text-[#252923] sm:text-4xl">
                Relax. Refresh.
                <span className="block font-light italic text-[#3F4A38]">
                  Reconnect.
                </span>
              </h2>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-[#62675E] sm:text-base">
                {service.description}
              </p>

              <p className="mt-4 text-sm leading-7 text-[#62675E] sm:text-base">
                Our treatment is designed with your comfort in mind. From the
                moment you arrive, our team focuses on creating a peaceful and
                welcoming experience.
              </p>

              {/* Benefits */}
              <FadeIn delay={0.25}>
                <div className="mt-8">

                  <h3 className="flex items-center gap-2 text-lg font-semibold text-[#252923]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9C7A2]/50 bg-[#F1EEE3]">
                      <Sparkles
                        size={18}
                        className="text-[#8D713D]"
                      />
                    </span>

                    Treatment Benefits
                  </h3>

                  <div className="mt-5 space-y-3">
                    {benefits.map((benefit, index) => (
                      <FadeIn
                        key={benefit}
                        delay={0.3 + index * 0.1}
                        direction="left"
                      >
                        <div className="flex items-start gap-3">

                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D9C7A2]/50 bg-[#F1EEE3] text-[#8D713D]">
                            <Check
                              size={13}
                              strokeWidth={3}
                            />
                          </span>

                          <p className="text-sm leading-6 text-[#62675E]">
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
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <Link
                    to="/booking"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3F4A38] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(63,74,56,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-[0_15px_35px_rgba(63,74,56,0.25)]"
                  >
                    <CalendarCheck size={18} />
                    Book This Treatment
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#C6A96B]/60 bg-white px-7 py-3.5 text-sm font-semibold text-[#3F4A38] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A96B] hover:bg-[#FFFDF8] hover:shadow-md"
                  >
                    Have Questions?
                  </Link>

                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="bg-[#EFF2E7] pb-20 sm:pb-24 lg:pb-28">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

            <div className="rounded-[1.5rem] border border-white/80 bg-white px-6 py-12 shadow-[0_10px_35px_rgba(63,74,56,0.07)] sm:px-10 sm:py-14">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D]">
                <CalendarCheck size={23} />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[#252923] sm:text-3xl">
                Ready for Your
                <span className="ml-2 font-light italic text-[#3F4A38]">
                  Wellness Experience?
                </span>
              </h2>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#62675E]">
                Choose a convenient time and let our team take care of the rest.
              </p>

              <Link
                to="/booking"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(63,74,56,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-[0_15px_35px_rgba(63,74,56,0.25)]"
              >
                Book an Appointment

                <CalendarCheck
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>

            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default ServiceDetails;