import { ArrowUpRight, Award, CalendarCheck, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import therapistsData from "../../data/therapistsData";
import FadeIn from "../../components/common/FadeIn";

const Therapists = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-900 py-20 sm:py-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Meet Our Experts
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Caring Hands.
              <span className="block text-emerald-200">
                Experienced Professionals.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
              Our skilled wellness professionals are committed to creating a
              comfortable, relaxing and personalized experience for every guest.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Therapists */}
      <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Our Team
              </p>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Meet the People Behind Your{" "}
                <span className="text-emerald-700">Wellness</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {therapistsData.map((therapist, index) => (
              <FadeIn
                key={therapist.id}
                delay={index * 0.15}
                direction="up"
              >
                <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="h-80 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-96"
                    />

                    {/* Experience */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-gray-800 shadow-lg">
                      <Award size={15} className="text-emerald-700" />
                      {therapist.experience}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {therapist.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-emerald-700">
                      {therapist.specialization}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      Dedicated to helping clients relax, release tension and
                      enjoy a personalized wellness experience.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        to={`/therapists/${therapist.id}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-emerald-700 hover:text-emerald-700"
                      >
                        View Profile
                        <ArrowUpRight size={17} />
                      </Link>

                      <Link
                        to="/booking"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
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

      {/* Why Our Therapists */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Left Content */}
            <FadeIn direction="left">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Why Our Team
                </p>

                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Expertise With a{" "}
                  <span className="text-emerald-700">
                    Personal Touch
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                  We believe great wellness care is not just about technique.
                  It is also about listening, understanding and making every
                  guest feel comfortable.
                </p>

                <div className="mt-7 space-y-5">

                  <FadeIn delay={0.15} direction="left">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                        <Award size={20} />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          Experienced Professionals
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-500">
                          Skilled therapists with years of wellness experience.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.3} direction="left">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                        <Heart size={20} />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          Client-Focused Care
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-500">
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
              <div className="rounded-3xl bg-emerald-800 p-8 text-white sm:p-10">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  Your Wellness Matters
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Find the Right Treatment for You
                </h3>

                <p className="mt-4 text-sm leading-7 text-emerald-100">
                  Not sure which treatment is right for you? Our team can help
                  you choose an experience based on your individual needs.
                </p>

                <Link
                  to="/booking"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
                >
                  Book an Appointment
                  <CalendarCheck size={18} />
                </Link>

              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
};

export default Therapists;