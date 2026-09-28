import { ArrowRight, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-emerald-900 py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-700/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-600/30 blur-3xl" />

        <FadeIn>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              About Serenity Spa
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Your Space to
              <span className="block text-emerald-200">
                Relax & Reconnect
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
              A peaceful wellness destination created to help you slow down,
              release stress and take care of yourself.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                  alt="Serenity Spa relaxing environment"
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                />
              </div>

              <div className="absolute -bottom-6 -right-3 rounded-2xl bg-emerald-800 px-6 py-5 text-white shadow-xl sm:-right-6">
                <p className="text-3xl font-bold">8+</p>
                <p className="mt-1 text-xs text-emerald-100">
                  Years of Wellness
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.15}>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Our Story
              </p>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                More Than a Spa.
                <span className="block text-emerald-700">
                  A Feeling of Peace.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                Serenity Spa was created with one simple idea — everyone
                deserves a place where they can pause, breathe and take care of
                themselves.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                From relaxing massages to personalized wellness treatments, our
                experienced therapists focus on creating a calm and comfortable
                experience for every guest.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FadeIn delay={0.25}>
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <Heart size={19} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Personalized Care
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Treatments designed around your needs.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <Leaf size={19} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Natural Wellness
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
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

      {/* Mission & Vision */}
      <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                What We Believe
              </p>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Wellness Begins With{" "}
                <span className="text-emerald-700">You</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Everything we do is focused on helping you feel relaxed,
                refreshed and cared for.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn direction="left">
              <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-100 sm:p-9">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Sparkles size={22} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  To create meaningful wellness experiences through expert care,
                  peaceful surroundings and treatments that help our clients
                  reconnect with themselves.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="h-full rounded-3xl bg-emerald-800 p-7 text-white shadow-sm sm:p-9">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-emerald-200">
                  <ShieldCheck size={22} />
                </div>

                <h3 className="text-2xl font-bold">
                  Our Vision
                </h3>

                <p className="mt-4 text-sm leading-7 text-emerald-100 sm:text-base">
                  To become a trusted wellness destination where every guest
                  feels valued, relaxed and confident about taking time for
                  their well-being.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Our Values
              </p>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Guests Choose Serenity
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.12}
                direction="up"
              >
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <Heart size={18} />
                  </div>

                  <h3 className="font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-900 py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Take Time for Yourself
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
              Your body and mind deserve a moment of care. Book your next
              wellness experience with us.
            </p>

            <Link
              to="/booking"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-lg"
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