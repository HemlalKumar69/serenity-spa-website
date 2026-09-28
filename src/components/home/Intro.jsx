import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeIn from "../common/FadeIn";

const Intro = () => {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* Image */}
        <FadeIn direction="left">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                alt="Relaxing spa treatment"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-white p-5 shadow-xl sm:-right-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50">
                  <Sparkles
                    className="text-emerald-700"
                    size={20}
                  />
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    8+
                  </p>

                  <p className="text-xs text-gray-500">
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Welcome to Serenity Spa
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              A peaceful escape for
              <span className="block font-light italic">
                your body & soul
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600">
              At Serenity Spa, we believe true wellness begins when you
              give yourself time to slow down, breathe and reconnect with
              yourself.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Our experienced therapists combine relaxing techniques,
              premium products and a calm environment to create a
              personalized wellness experience for every guest.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  ✓
                </span>

                <p className="text-sm font-medium text-gray-700">
                  Professional Therapists
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  ✓
                </span>

                <p className="text-sm font-medium text-gray-700">
                  Premium Products
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  ✓
                </span>

                <p className="text-sm font-medium text-gray-700">
                  Relaxing Environment
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  ✓
                </span>

                <p className="text-sm font-medium text-gray-700">
                  Personalized Care
                </p>
              </div>
            </div>

            {/* Button */}
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg"
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
