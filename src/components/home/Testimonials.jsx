import { Star, Quote } from "lucide-react";

import testimonialsData from "../../data/testimonialsData";
import FadeIn from "../common/FadeIn";

const Testimonials = () => {
  return (
    <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeIn>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Client Experiences
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              What Our{" "}
              <span className="text-emerald-700">
                Clients Say
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Discover why our clients choose Suman Day/Night Spa whenever they need
              relaxation, care and a little time for themselves.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <FadeIn
              key={testimonial.id}
              delay={index * 0.15}
              direction="up"
            >
              <div className="relative h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">

                {/* Quote Icon */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Quote size={19} />
                </div>

                {/* Rating */}
                <div className="mb-5 flex gap-1">
                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={17}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  “{testimonial.review}”
                </p>

                {/* Client */}
                <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Rating */}
        <FadeIn delay={0.25}>
          <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <div className="flex items-center gap-1">
              <Star
                className="fill-amber-400 text-amber-400"
                size={18}
              />

              <span className="font-bold text-gray-900">
                5/5
              </span>
            </div>

            <span className="hidden text-gray-300 sm:block">
              •
            </span>

            <p className="text-sm text-gray-500">
              Loved by 5,000+ happy clients
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Testimonials;
