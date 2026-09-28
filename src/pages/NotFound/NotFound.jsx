import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "../../components/common/FadeIn";

const NotFound = () => {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-stone-50 px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        {/* Icon */}
        <FadeIn>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition duration-300 hover:scale-110 hover:shadow-lg">
            <SearchX size={36} />
          </div>
        </FadeIn>

        {/* 404 */}
        <FadeIn delay={0.1}>
          <p className="mt-8 text-7xl font-black tracking-tight text-emerald-700 sm:text-8xl">
            404
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.2}>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Page Not Found
          </h1>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.3}>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
            Sorry, the page you're looking for doesn't exist or may have been
            moved. Let's get you back to a peaceful place.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
            >
              <Home size={18} />
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:text-emerald-700 hover:shadow-md"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </FadeIn>

        {/* Small message */}
        <FadeIn delay={0.5}>
          <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-medium text-gray-800">
              Need some relaxation?
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Explore our treatments and find the perfect wellness experience.
            </p>

            <Link
              to="/services"
              className="mt-4 inline-block text-sm font-semibold text-emerald-700 transition hover:text-emerald-800 hover:underline"
            >
              Explore Services →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default NotFound;
