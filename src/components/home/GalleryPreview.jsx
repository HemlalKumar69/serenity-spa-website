import { ArrowUpRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";

import galleryData from "../../data/galleryData";
import FadeIn from "../common/FadeIn";

const GalleryPreview = () => {
  return (
    <section
      className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28"
      aria-labelledby="gallery-preview-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                  Simran Spa Gallery
                </p>
              </div>

              <h2
                id="gallery-preview-heading"
                className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl"
              >
                A Space Designed for
                <span className="mt-2 block font-light italic text-[#3F4A38]">
                  Relaxation
                </span>
              </h2>

              {/* Gold Detail */}
              <div className="mt-5 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>

              <p className="mt-5 text-sm leading-7 text-[#62675E] sm:text-base">
                Take a glimpse inside Simran Day/Night Spa in New Digha,
                Digha, and explore our peaceful wellness environment created
                for relaxation, massage and spa treatments.
              </p>
            </div>

            {/* View Gallery Button */}
            <Link
              to="/gallery"
              aria-label="View the complete Simran Day/Night Spa gallery in Digha"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#C6A96B]/60 bg-white/70 px-5 py-3 text-sm font-semibold text-[#3F4A38] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A96B] hover:bg-white hover:shadow-md"
            >
              View Full Gallery

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3"
          aria-label="Simran Day/Night Spa gallery preview"
        >
          {galleryData.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.12}
              direction="up"
            >
              <Link
                to="/gallery"
                aria-label={`View ${item.title} in the Simran Day/Night Spa gallery`}
                className={`group relative block overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-[0_8px_25px_rgba(63,74,56,0.07)] ${
                  index === 0 ? "sm:row-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={`${item.title} at Simran Day/Night Spa in Digha`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0
                      ? "h-full min-h-[200px] sm:min-h-[200px]"
                      : "h-48 sm:h-60 lg:h-64"
                  }`}
                  loading="lazy"
                  decoding="async"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/75 via-[#3F4A38]/10 to-transparent opacity-70 transition-all duration-300 group-hover:opacity-100" />

                {/* Gold Border Hover */}
                <div className="absolute inset-2 rounded-[1.2rem] border border-white/0 transition-all duration-300 group-hover:border-[#D9C7A2]/70" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-7 bg-[#C6A96B]" />

                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-[#252923]/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Instagram */}
        <FadeIn delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D]"
              aria-hidden="true"
            >
              <Camera size={19} />
            </div>

            <p className="text-sm text-[#62675E]">
              Follow us on Instagram for more spa and wellness inspiration
            </p>

            <span className="rounded-full border border-[#D9C7A2]/50 bg-white px-4 py-2 text-sm font-semibold text-[#3F4A38] shadow-sm">
              @karinak69
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GalleryPreview;