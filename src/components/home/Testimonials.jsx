import { Star, Quote } from "lucide-react";

import testimonialsData from "../../data/testimonialsData";

import FadeIn from "../common/FadeIn";

const Testimonials = () => {
  return (
    <section
      className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeIn>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A96B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                Spa Client Experiences
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            <h2
              id="testimonials-heading"
              className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl"
            >
              What Our
              <span className="mt-2 block font-light italic text-[#3F4A38]">
                Clients Say
              </span>
            </h2>

            {/* Gold Detail */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
            </div>

            <p className="mt-5 text-sm leading-7 text-[#62675E] sm:text-base">
              Read experiences shared by clients who visited Simran Day/Night
              Spa in New Digha for relaxation, wellness and massage treatments.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials */}
        <div
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Client reviews and experiences"
        >
          {testimonialsData.map((testimonial, index) => (
            <FadeIn
              key={testimonial.id}
              delay={index * 0.15}
              direction="up"
            >
              <article className="group relative h-full rounded-[1.5rem] border border-white/80 bg-white p-6 shadow-[0_10px_35px_rgba(63,74,56,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(63,74,56,0.14)] sm:p-7">
                {/* Quote Icon */}
                <div
                  className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C7A2]/50 bg-[#F1EEE3] text-[#8D713D] transition-all duration-300 group-hover:bg-[#3F4A38] group-hover:text-[#FFFDF8]"
                  aria-hidden="true"
                >
                  <Quote size={19} />
                </div>

                {/* Rating */}
                <div
                  className="mb-5 flex gap-1"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={17}
                      aria-hidden="true"
                      className="fill-[#C6A96B] text-[#C6A96B]"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="pr-10 text-sm leading-7 text-[#62675E] sm:text-base">
                  “{testimonial.review}”
                </p>

                {/* Client */}
                <div className="mt-7 flex items-center gap-4 border-t border-[#E6E4DC] pt-5">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={`Photo of ${testimonial.name}`}
                      className="h-12 w-12 rounded-full border-2 border-[#D9C7A2]/60 object-cover"
                      loading="lazy"
                      decoding="async"
                    />

                    <span
                      className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#3F4A38]"
                      aria-hidden="true"
                    >
                      <Star
                        size={10}
                        className="fill-[#C6A96B] text-[#C6A96B]"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#252923]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#777B73]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-7 h-0.5 w-8 rounded-full bg-[#C6A96B] transition-all duration-300 group-hover:w-14" />
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Rating */}
        <FadeIn delay={0.25}>
          <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <div
              className="flex items-center gap-1"
              aria-label="5 out of 5 rating"
            >
              <Star
                className="fill-[#C6A96B] text-[#C6A96B]"
                size={18}
                aria-hidden="true"
              />

              <span className="font-semibold text-[#252923]">
                5/5
              </span>
            </div>

            <span className="hidden text-[#B7B9B0] sm:block">
              •
            </span>

            <p className="text-sm text-[#62675E]">
              Client experiences at Simran Day/Night Spa
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;