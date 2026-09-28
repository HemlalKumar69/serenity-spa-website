import { ArrowUpRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";

import galleryData from "../../data/galleryData";
import FadeIn from "../common/FadeIn";

const GalleryPreview = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeIn>
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Our Gallery
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                A Space Designed for{" "}
                <span className="text-emerald-700">Relaxation</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Take a glimpse inside our peaceful wellness space and discover
                an environment created to help you slow down and relax.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900"
            >
              View Full Gallery
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {galleryData.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.12}
              direction="up"
            >
              <Link
                to="/gallery"
                className={`group relative block overflow-hidden rounded-2xl ${
                  index === 0 ? "sm:row-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                    index === 0
                      ? "h-full min-h-[300px] sm:min-h-[500px]"
                      : "h-48 sm:h-60 lg:h-64"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Instagram */}
        <FadeIn delay={0.25}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <Camera size={19} />
            </div>

            <p className="text-sm text-gray-600">
              Follow us on Instagram for more wellness inspiration
            </p>

            <span className="font-semibold text-emerald-700">
              @karinak69
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GalleryPreview;