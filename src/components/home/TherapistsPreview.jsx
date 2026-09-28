import { ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

import therapistsData from "../../data/therapistsData";
import FadeIn from "../common/FadeIn";

const TherapistsPreview = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <FadeIn>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Meet Our Experts
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Skilled Hands.{" "}
              <span className="text-emerald-700">
                Caring Hearts.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Our experienced therapists are dedicated to providing
              personalized treatments that help you relax, recover and feel
              your best.
            </p>
          </div>
        </FadeIn>

        {/* Therapist Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {therapistsData.map((therapist, index) => (
            <FadeIn
              key={therapist.id}
              delay={index * 0.15}
              direction="up"
            >
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
                  />

                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-gray-800 shadow-md">
                    <Award
                      size={15}
                      className="text-emerald-700"
                    />
                    {therapist.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {therapist.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {therapist.specialization}
                  </p>

                  <Link
                    to={`/therapists/${therapist.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900"
                  >
                    View Profile

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Button */}
        <FadeIn delay={0.25}>
          <div className="mt-10 text-center">
            <Link
              to="/therapists"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Meet All Therapists
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default TherapistsPreview;
