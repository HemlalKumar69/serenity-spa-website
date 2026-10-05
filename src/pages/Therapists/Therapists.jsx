import {
  ArrowUpRight,
  Award,
  CalendarCheck,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

import therapistsData from "../../data/therapistsData";

import FadeIn from "../../components/common/FadeIn";

const Therapists = () => {
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
                Meet Our Experts
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
              Caring Hands.
              <span className="mt-2 block font-light italic text-[#D9C7A2]">
                Experienced Professionals.
              </span>
            </h1>

            {/* Decorative line */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
              Our skilled wellness professionals are committed to creating a
              comfortable, relaxing and personalized experience for every guest.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ==================== THERAPISTS ==================== */}
      <section className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                  Our Team
                </p>

                <span className="h-px w-10 bg-[#C6A96B]" />
              </div>

              <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl">
                Meet the People Behind Your
                <span className="mt-2 block font-light italic text-[#3F4A38]">
                  Wellness
                </span>
              </h2>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>
            </div>
          </FadeIn>

          {/* Therapist Cards */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {therapistsData.map((therapist, index) => (
              <FadeIn
                key={therapist.id}
                delay={index * 0.15}
                direction="up"
              >
                <article className="group h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_10px_35px_rgba(63,74,56,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(63,74,56,0.15)]">

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/45 via-transparent to-transparent" />

                    {/* Experience */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-[#D9C7A2]/60 bg-[#FFFDF8]/95 px-4 py-2 text-xs font-semibold text-[#3F4A38] shadow-lg backdrop-blur-sm">
                      <Award
                        size={15}
                        className="text-[#8D713D]"
                      />
                      {therapist.experience}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex min-h-[275px] flex-col p-6 sm:p-7">

                    {/* Decorative line */}
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-px w-7 bg-[#C6A96B]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C6A96B]" />
                    </div>

                    <h3 className="text-2xl font-semibold text-[#252923] transition-colors duration-300 group-hover:text-[#3F4A38]">
                      {therapist.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#8D713D]">
                      {therapist.specialization}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#62675E]">
                      Dedicated to helping clients relax, release tension and
                      enjoy a personalized wellness experience.
                    </p>

                    {/* Actions */}
                    <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">

                      <Link
                        to={`/therapists/${therapist.id}`}
                        className="group/profile inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#C6A96B]/60 bg-white px-5 py-3 text-sm font-semibold text-[#3F4A38] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6A96B] hover:bg-[#FFFDF8] hover:shadow-sm"
                      >
                        View Profile

                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover/profile:translate-x-1 group-hover/profile:-translate-y-1"
                        />
                      </Link>

                      <Link
                        to="/booking"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#3F4A38] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30382B] hover:shadow-md"
                      >
                        <CalendarCheck size={17} />
                        Book
                      </Link>

                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY OUR THERAPISTS ==================== */}
      <section className="bg-[#EFF2E7] pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Left Content */}
            <FadeIn direction="left">
              <div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C6A96B]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                    Why Our Team
                  </p>
                </div>

                <h2 className="text-3xl font-semibold leading-[1.12] text-[#252923] sm:text-4xl">
                  Expertise With a
                  <span className="mt-2 block font-light italic text-[#3F4A38]">
                    Personal Touch
                  </span>
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                  <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
                </div>

                <p className="mt-6 text-sm leading-7 text-[#62675E] sm:text-base">
                  We believe great wellness care is not just about technique.
                  It is also about listening, understanding and making every
                  guest feel comfortable.
                </p>

                <div className="mt-8 space-y-6">

                  {/* Experienced Professionals */}
                  <FadeIn delay={0.15} direction="left">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D9C7A2]/50 bg-[#F1EEE3] text-[#8D713D]">
                        <Award size={20} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#252923]">
                          Experienced Professionals
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-[#62675E]">
                          Skilled therapists with years of wellness experience.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Client-Focused Care */}
                  <FadeIn delay={0.3} direction="left">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D9C7A2]/50 bg-[#F1EEE3] text-[#8D713D]">
                        <Heart size={20} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#252923]">
                          Client-Focused Care
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-[#62675E]">
                          Your comfort and relaxation always come first.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                </div>
              </div>
            </FadeIn>

            {/* Right CTA Card */}
            <FadeIn direction="right" delay={0.2}>
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#3F4A38] p-8 text-white shadow-[0_15px_40px_rgba(63,74,56,0.16)] sm:p-10">

                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#C6A96B]/10 blur-2xl" />

                <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

                <div className="relative">

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#C6A96B]" />

                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2]">
                      Your Wellness Matters
                    </p>
                  </div>

                  <h3 className="text-3xl font-semibold leading-[1.12] text-[#FFFDF8] sm:text-4xl">
                    Find the Right
                    <span className="mt-2 block font-light italic text-[#D9C7A2]">
                      Treatment for You
                    </span>
                  </h3>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                    <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#E5E9DE]">
                    Not sure which treatment is right for you? Our team can
                    help you choose an experience based on your individual
                    needs.
                  </p>

                  <Link
                    to="/booking"
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFFDF8] px-6 py-3 text-sm font-semibold text-[#3F4A38] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
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

          </div>
        </div>
      </section>
    </>
  );
};

export default Therapists;