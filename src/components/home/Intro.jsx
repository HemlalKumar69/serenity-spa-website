import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Check } from "lucide-react";

import FadeIn from "../common/FadeIn";

const Intro = () => {
  return (
    <section className="overflow-hidden bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* Image */}
        <FadeIn direction="left">
          <div className="relative">

            {/* Decorative Border */}
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#C6A96B]/35 sm:-left-5 sm:-top-5" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(63,74,56,0.15)]">

              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=90"
                alt="Relaxing spa treatment"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3F4A38]/25 via-transparent to-transparent" />

            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-[#D9C7A2]/60 bg-[#FFFDF8]/95 p-5 shadow-[0_15px_40px_rgba(63,74,56,0.15)] backdrop-blur-md sm:-right-5 sm:p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9C7A2] bg-[#F1EEE3]">
                  <Sparkles
                    className="text-[#A1844A]"
                    size={20}
                  />
                </div>

                <div>
                  <p className="text-2xl font-semibold text-[#252923]">
                    8+
                  </p>

                  <p className="text-xs font-medium tracking-wide text-[#777B73]">
                    Years of Experience
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
                Welcome to Suman Day/Night Spa
              </p>

            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl">

              A peaceful escape for

              <span className="mt-2 block font-light italic text-[#3F4A38]">
                your body & soul
              </span>

            </h2>

            {/* Gold Line */}
            <div className="mt-6 flex items-center gap-2">

              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />

              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />

            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-8 text-[#62675E]">
              At Suman Day/Night Spa, we believe true wellness begins when
              you give yourself time to slow down, breathe and reconnect
              with yourself.
            </p>

            <p className="mt-4 text-base leading-8 text-[#62675E]">
              Our experienced therapists combine relaxing techniques,
              premium products and a calm environment to create a
              personalized wellness experience for every guest.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C6A96B]/50 bg-[#EEE9DA]">
                  <Check
                    size={14}
                    className="text-[#6D5930]"
                  />
                </span>

                <p className="text-sm font-medium text-[#4D544B]">
                  Professional Therapists
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C6A96B]/50 bg-[#EEE9DA]">
                  <Check
                    size={14}
                    className="text-[#6D5930]"
                  />
                </span>

                <p className="text-sm font-medium text-[#4D544B]">
                  Premium Products
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C6A96B]/50 bg-[#EEE9DA]">
                  <Check
                    size={14}
                    className="text-[#6D5930]"
                  />
                </span>

                <p className="text-sm font-medium text-[#4D544B]">
                  Relaxing Environment
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C6A96B]/50 bg-[#EEE9DA]">
                  <Check
                    size={14}
                    className="text-[#6D5930]"
                  />
                </span>

                <p className="text-sm font-medium text-[#4D544B]">
                  Personalized Care
                </p>
              </div>

            </div>

            {/* Button */}
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(63,74,56,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-[0_15px_35px_rgba(63,74,56,0.25)]"
            >
              Discover More

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

export default Intro;