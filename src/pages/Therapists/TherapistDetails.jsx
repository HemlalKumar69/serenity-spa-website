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

  if (!therapist) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-stone-50 px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-6xl font-black text-emerald-700">404</p>

            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              Therapist Not Found
            </h1>

            <p className="mt-3 text-sm text-gray-600">
              The therapist profile you are looking for does not exist.
            </p>

            <Link
              to="/therapists"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              <ArrowLeft size={17} />
              Back to Therapists
            </Link>
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="left">
            <Link
              to="/therapists"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-100 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Therapists
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-stone-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Image */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
                  />
                </div>

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-lg">
                  <Award size={17} className="text-emerald-700" />
                  {therapist.experience}
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="right" delay={0.15}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Wellness Expert
                </p>

                <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
                  {therapist.name}
                </h1>

                <p className="mt-3 text-base font-semibold text-emerald-700">
                  {therapist.specialization}
                </p>

                <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
                  With years of experience in wellness and relaxation
                  therapies, {therapist.name} is dedicated to helping every
                  guest feel comfortable, refreshed and completely relaxed.
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  Every session is approached with care, attention and a
                  personalized understanding of the client's wellness needs.
                </p>

                {/* Highlights */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <FadeIn delay={0.25} direction="up">
                    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Heart size={22} className="text-emerald-700" />

                      <h3 className="mt-3 font-bold text-gray-900">
                        Personalized Care
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Every treatment is tailored to your comfort.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.35} direction="up">
                    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Sparkles size={22} className="text-emerald-700" />

                      <h3 className="mt-3 font-bold text-gray-900">
                        Wellness Focus
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Focused on relaxation and complete well-being.
                      </p>
                    </div>
                  </FadeIn>

                </div>

                {/* Button */}
                <FadeIn delay={0.45}>
                  <Link
                    to="/booking"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg sm:w-auto"
                  >
                    <CalendarCheck size={19} />
                    Book an Appointment
                  </Link>
                </FadeIn>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Care That Puts You First
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
                We believe wellness is more than a treatment. It is about
                creating an environment where you can relax, recharge and feel
                your best.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              "Professional Expertise",
              "Comfortable Experience",
              "Personalized Treatment",
            ].map((item, index) => (
              <FadeIn
                key={item}
                delay={index * 0.15}
                direction="up"
              >
                <div className="flex items-center gap-3 rounded-2xl bg-stone-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check size={17} />
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default TherapistDetails;