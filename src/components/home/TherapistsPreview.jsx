import { ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

import therapistsData from "../../data/therapistsData";
import FadeIn from "../common/FadeIn";

const TherapistsPreview = () => {
  return (
    <section
      className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28"
      aria-labelledby="therapists-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <FadeIn>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A96B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                Meet Our Spa Therapists
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            <h2
              id="therapists-heading"
              className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl"
            >
              Skilled Hands.
              <span className="mt-2 block font-light italic text-[#3F4A38]">
                Caring Hearts.
              </span>
            </h2>

            {/* Gold Detail */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
            </div>

            <p className="mt-5 text-sm leading-7 text-[#62675E] sm:text-base">
              Meet our professional spa therapists at Simran Day/Night Spa
              in New Digha, Digha. Our team focuses on creating a calm,
              comfortable and relaxing massage experience.
            </p>
          </div>
        </FadeIn>

        {/* Therapist Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
                    alt={`${therapist.name} - ${therapist.specialization} at Simran Day/Night Spa in Digha`}
                    className="h-80 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:h-96"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/35 via-transparent to-transparent opacity-80" />

                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-[#D9C7A2]/60 bg-[#FFFDF8]/95 px-4 py-2 text-xs font-semibold text-[#3F4A38] shadow-md backdrop-blur-sm">
                    <Award
                      size={15}
                      className="text-[#A1844A]"
                      aria-hidden="true"
                    />
                    {therapist.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="flex min-h-[180px] flex-col p-6">
                  {/* Small Accent */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px w-7 bg-[#C6A96B]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C6A96B]" />
                  </div>

                  {/* Therapist Name */}
                  <h3 className="text-xl font-semibold text-[#252923] transition-colors duration-300 group-hover:text-[#3F4A38]">
                    {therapist.name}
                  </h3>

                  {/* Specialization */}
                  <p className="mt-2 text-sm leading-6 text-[#62675E]">
                    {therapist.specialization}
                  </p>

                  {/* Profile Link */}
                  <Link
                    to={`/therapists/${therapist.id}`}
                    aria-label={`View ${therapist.name}'s profile`}
                    className="group/link mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#7C6436] transition-colors duration-300 hover:text-[#3F4A38]"
                  >
                    View Profile

                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Button */}
        <FadeIn delay={0.25}>
          <div className="mt-12 text-center">
            <Link
              to="/therapists"
              aria-label="View all spa therapists at Simran Day/Night Spa in Digha"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(63,74,56,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-[0_15px_35px_rgba(63,74,56,0.25)]"
            >
              Meet All Therapists

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TherapistsPreview;