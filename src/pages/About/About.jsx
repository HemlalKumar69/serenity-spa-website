import {
  ArrowRight,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import FadeIn from "../../components/common/FadeIn";

const About = () => {
  const values = [
    {
      title: "Expert Care",
      text: "Experienced therapists focused on your comfort.",
    },
    {
      title: "Premium Experience",
      text: "Thoughtfully designed treatments and surroundings.",
    },
    {
      title: "Clean & Safe",
      text: "High standards of hygiene and cleanliness.",
    },
    {
      title: "Personal Attention",
      text: "A welcoming experience tailored to every guest.",
    },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-[#3F4A38] py-20 sm:py-24 lg:py-28">
        {/* Decorative circles */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A96B]/10" />

        <FadeIn>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            {/* Label */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A96B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
                About Simran Day/Night Spa
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
              Your Space to
              <span className="mt-2 block font-light italic text-[#D9C7A2]">
                Relax & Reconnect
              </span>
            </h1>

            {/* Decorative line */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
            </div>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
              A peaceful wellness destination created to help you slow down,
              release stress and take care of yourself.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#C6A96B]/35 sm:-left-5 sm:-top-5" />

              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(63,74,56,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                  alt="Simran Day/Night Spa relaxing environment"
                  className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/30 via-transparent to-transparent" />
              </div>

              {/* Experience Card */}
              <div className="absolute -bottom-6 -right-3 rounded-2xl border border-[#D9C7A2]/60 bg-[#FFFDF8]/95 px-6 py-5 shadow-[0_15px_40px_rgba(63,74,56,0.15)] backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3]">
                    <Sparkles
                      size={19}
                      className="text-[#A1844A]"
                    />
                  </div>

                  <div>
                    <p className="text-3xl font-semibold text-[#252923]">
                      8+
                    </p>

                    <p className="mt-1 text-xs font-medium tracking-wide text-[#777B73]">
                      Years of Wellness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.15}>
            <div className="lg:pl-4">
              {/* Label */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                  Our Story
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl">
                More Than a Spa.
                <span className="mt-2 block font-light italic text-[#3F4A38]">
                  A Feeling of Peace.
                </span>
              </h2>

              {/* Decorative line */}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>

              {/* Paragraphs */}
              <p className="mt-6 text-sm leading-7 text-[#62675E] sm:text-base">
                Spa was Simran Day/Night created with one simple idea —
                everyone deserves a place where they can pause, breathe and
                take care of themselves.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#62675E] sm:text-base">
                From relaxing massages to personalized wellness treatments,
                our experienced therapists focus on creating a calm and
                comfortable experience for every guest.
              </p>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FadeIn delay={0.25}>
                  <div className="group flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D] transition-all duration-300 group-hover:bg-[#3F4A38] group-hover:text-white">
                      <Heart size={19} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#252923]">
                        Personalized Care
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#777B73]">
                        Treatments designed around your needs.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div className="group flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D] transition-all duration-300 group-hover:bg-[#3F4A38] group-hover:text-white">
                      <Leaf size={19} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#252923]">
                        Natural Wellness
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#777B73]">
                        A calming approach to complete relaxation.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== MISSION & VISION ==================== */}
      <section className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                  What We Believe
                </p>

                <span className="h-px w-10 bg-[#C6A96B]" />
              </div>

              <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl">
                Wellness Begins With
                <span className="mt-2 block font-light italic text-[#3F4A38]">
                  You
                </span>
              </h2>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>

              <p className="mt-5 text-sm leading-7 text-[#62675E] sm:text-base">
                Everything we do is focused on helping you feel relaxed,
                refreshed and cared for.
              </p>
            </div>
          </FadeIn>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <FadeIn direction="left">
              <div className="h-full rounded-[1.5rem] border border-white/80 bg-white p-7 shadow-[0_10px_35px_rgba(63,74,56,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(63,74,56,0.13)] sm:p-9">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D]">
                  <Sparkles size={22} />
                </div>

                <h3 className="text-2xl font-semibold text-[#252923]">
                  Our Mission
                </h3>

                <div className="mt-4 h-1 w-10 rounded-full bg-[#C6A96B]" />

                <p className="mt-5 text-sm leading-7 text-[#62675E] sm:text-base">
                  To create meaningful wellness experiences through expert
                  care, peaceful surroundings and treatments that help our
                  clients reconnect with themselves.
                </p>
              </div>
            </FadeIn>

            {/* Vision */}
            <FadeIn direction="right" delay={0.15}>
              <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-[#3F4A38] p-7 text-white shadow-[0_15px_40px_rgba(63,74,56,0.16)] sm:p-9">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#C6A96B]/10 blur-2xl" />

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9C7A2]/30 bg-white/10 text-[#D9C7A2]">
                    <ShieldCheck size={22} />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#FFFDF8]">
                    Our Vision
                  </h3>

                  <div className="mt-4 h-1 w-10 rounded-full bg-[#C6A96B]" />

                  <p className="mt-5 text-sm leading-7 text-[#E5E9DE] sm:text-base">
                    To become a trusted wellness destination where every guest
                    feels valued, relaxed and confident about taking time for
                    their well-being.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
      <section className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                  Our Values
                </p>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl">
                Why Guests Choose
                <span className="mt-2 block font-light italic text-[#3F4A38]">
                  Simran Day/Night Spa
                </span>
              </h2>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.12}
                direction="up"
              >
                <div className="group h-full rounded-[1.5rem] border border-white/80 bg-white p-6 shadow-[0_8px_30px_rgba(63,74,56,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(63,74,56,0.13)]">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D9C7A2]/50 bg-[#F1EEE3] text-[#8D713D] transition-all duration-300 group-hover:bg-[#3F4A38] group-hover:text-[#FFFDF8]">
                    <Heart size={18} />
                  </div>

                  <h3 className="font-semibold text-[#252923] transition-colors duration-300 group-hover:text-[#3F4A38]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#62675E]">
                    {item.text}
                  </p>

                  <div className="mt-6 h-0.5 w-8 rounded-full bg-[#C6A96B] transition-all duration-300 group-hover:w-14" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative overflow-hidden bg-[#3F4A38] py-20 sm:py-24">
        {/* Decorative circles */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

        <FadeIn>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D9C7A2]/40 bg-[#FFFDF8]/10 text-[#D9C7A2] shadow-lg backdrop-blur-sm">
              <Sparkles size={26} strokeWidth={1.7} />
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
              Your Wellness Journey Starts Here
            </p>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#FFFDF8] sm:text-4xl">
              Take Time for Yourself
            </h2>

            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
              Your body and mind deserve a moment of care. Book your next
              wellness experience with us.
            </p>

            <Link
              to="/booking"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFFDF8] px-7 py-3.5 text-sm font-semibold text-[#3F4A38] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              Book Appointment

              <ArrowRight
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

export default About;