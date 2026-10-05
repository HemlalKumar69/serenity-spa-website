import {
  ArrowLeft,
  Award,
  CalendarCheck,
  Check,
  Heart,
  Sparkles,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import therapistsData from "../../data/therapistsData";

import FadeIn from "../../components/common/FadeIn";

const TherapistDetails = () => {
  const { id } = useParams();

  const therapist = therapistsData.find(
    (item) => String(item.id) === String(id)
  );

  // If therapist doesn't exist
  if (!therapist) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#EFF2E7] px-4">
        <FadeIn>
          <div className="w-full max-w-md rounded-[1.5rem] border border-white/80 bg-white p-8 text-center shadow-[0_15px_40px_rgba(63,74,56,0.10)]">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3]">
              <span className="text-2xl font-semibold text-[#8D713D]">
                404
              </span>
            </div>

            <h1 className="mt-5 text-2xl font-semibold text-[#252923] sm:text-3xl">
              Therapist Not Found
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#62675E]">
              The therapist profile you are looking for does not exist.
            </p>

            <Link
              to="/therapists"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-lg"
            >
              <ArrowLeft size={17} />
              Back to Therapists
            </Link>

          </div>
        </FadeIn>
      </section>
    );
  }

  const highlights = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every treatment is tailored to your comfort.",
    },
    {
      icon: Sparkles,
      title: "Wellness Focus",
      description: "Focused on relaxation and complete well-being.",
    },
  ];

  const approachItems = [
    "Professional Expertise",
    "Comfortable Experience",
    "Personalized Treatment",
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-[#3F4A38] py-12 sm:py-16">
        {/* Decorative elements */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="left">
            <Link
              to="/therapists"
              className="inline-flex items-center gap-2 rounded-full border border-[#D9C7A2]/30 bg-white/5 px-4 py-2 text-sm font-medium text-[#E5E9DE] backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Therapists
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ==================== PROFILE ==================== */}
      <section className="bg-[#EFF2E7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Therapist Image */}
            <FadeIn direction="left">
              <div className="relative">

                {/* Decorative Border */}
                <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#C6A96B]/35 sm:-left-5 sm:-top-5" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-1.5 shadow-[0_25px_60px_rgba(63,74,56,0.15)]">
                  <div className="overflow-hidden rounded-[1.6rem]">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
                    />
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-[#D9C7A2]/60 bg-[#FFFDF8]/95 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C7A2]/50 bg-[#F1EEE3]">
                    <Award size={20} className="text-[#8D713D]" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8D713D]">
                      Experience
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#252923]">
                      {therapist.experience}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Therapist Information */}
            <FadeIn direction="right" delay={0.15}>
              <div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C6A96B]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                    Wellness Expert
                  </p>
                </div>

                <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#252923] sm:text-5xl">
                  {therapist.name}
                </h1>

                <p className="mt-4 text-base font-medium leading-7 text-[#8D713D] sm:text-lg">
                  {therapist.specialization}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                  <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
                </div>

                <p className="mt-6 text-sm leading-7 text-[#62675E] sm:text-base">
                  With years of experience in wellness and relaxation
                  therapies, {therapist.name} is dedicated to helping every
                  guest feel comfortable, refreshed and completely relaxed.
                </p>

                <p className="mt-4 text-sm leading-7 text-[#62675E] sm:text-base">
                  Every session is approached with care, attention and a
                  personalized understanding of the client's wellness needs.
                </p>

                {/* Highlights */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <FadeIn
                        key={item.title}
                        delay={0.25 + index * 0.1}
                        direction="up"
                      >
                        <div className="h-full rounded-[1.25rem] border border-white/80 bg-white p-5 shadow-[0_8px_25px_rgba(63,74,56,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(63,74,56,0.12)]">

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9C7A2]/50 bg-[#F1EEE3] text-[#8D713D]">
                            <Icon size={22} />
                          </div>

                          <h3 className="mt-4 font-semibold text-[#252923]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-[#62675E]">
                            {item.description}
                          </p>
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>

                {/* Booking Button */}
                <FadeIn delay={0.45}>
                  <Link
                    to="/booking"
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3F4A38] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(63,74,56,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-[0_15px_35px_rgba(63,74,56,0.25)] sm:w-auto"
                  >
                    <CalendarCheck size={19} />
                    Book an Appointment
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </FadeIn>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== EXPERTISE ==================== */}
      <section className="bg-[#EFF2E7] pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="rounded-[1.5rem] border border-white/80 bg-white px-6 py-12 shadow-[0_10px_35px_rgba(63,74,56,0.07)] sm:px-10 sm:py-14">

              <div className="mx-auto max-w-2xl text-center">

                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#C6A96B]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                    Our Approach
                  </p>

                  <span className="h-px w-10 bg-[#C6A96B]" />
                </div>

                <h2 className="text-3xl font-semibold leading-[1.12] text-[#252923] sm:text-4xl">
                  Care That
                  <span className="mt-2 block font-light italic text-[#3F4A38]">
                    Puts You First
                  </span>
                </h2>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                  <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
                </div>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#62675E] sm:text-base">
                  We believe wellness is more than a treatment. It is about
                  creating an environment where you can relax, recharge and
                  feel your best.
                </p>
              </div>

              {/* Approach Items */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {approachItems.map((item, index) => (
                  <FadeIn
                    key={item}
                    delay={index * 0.15}
                    direction="up"
                  >
                    <div className="flex h-full items-center gap-3 rounded-2xl border border-[#E8E8DF] bg-[#EFF2E7]/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9C7A2] hover:shadow-md">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9C7A2]/50 bg-white text-[#8D713D]">
                        <Check size={17} />
                      </div>

                      <p className="text-sm font-semibold text-[#3F4A38]">
                        {item}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Bottom Booking */}
              <div className="mt-10 text-center">
                <Link
                  to="/booking"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3F4A38] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-lg"
                >
                  <CalendarCheck size={18} />
                  Book an Appointment
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default TherapistDetails;