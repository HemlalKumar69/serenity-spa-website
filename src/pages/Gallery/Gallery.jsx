import { ArrowUpRight, Camera, X } from "lucide-react";

import { useState } from "react";

import { Link } from "react-router-dom";

import galleryData from "../../data/galleryData";

import FadeIn from "../../components/common/FadeIn";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-[#3F4A38] py-20 sm:py-24 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A96B]/10" />

        <FadeIn>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            {/* Label */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A96B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
                Our Gallery
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
              A Space Made for
              <span className="mt-2 block font-light italic text-[#D9C7A2]">
                Relaxation & Wellness.
              </span>
            </h1>

            {/* Decorative line */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
              Take a look inside our peaceful spa environment, relaxing
              treatments and wellness experience.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D] shadow-sm">
                <Camera size={23} />
              </div>

              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                  Simran Day/Night Moments
                </p>

                <span className="h-px w-10 bg-[#C6A96B]" />
              </div>

              <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl">
                Explore Our
                <span className="mt-2 block font-light italic text-[#3F4A38]">
                  Spa Experience
                </span>
              </h2>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>

              <p className="mt-5 text-sm leading-7 text-[#62675E] sm:text-base">
                Every corner of Simran Day/Night Spa is designed to create a
                calm, comfortable and refreshing experience.
              </p>
            </div>
          </FadeIn>

          {/* ==================== IMAGES ==================== */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryData.map((item, index) => (
              <FadeIn
                key={item.id}
                delay={index * 0.12}
                direction="up"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group relative w-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-1.5 text-left shadow-[0_10px_35px_rgba(63,74,56,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(63,74,56,0.15)]"
                >
                  <div className="relative overflow-hidden rounded-[1.2rem]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-80"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/80 via-[#252923]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Image Details */}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                      <div>
                        <p className="text-lg font-semibold text-white">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs text-[#E5E9DE]">
                          Simran Day/Night Spa
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#FFFDF8] text-[#3F4A38] shadow-lg">
                        <ArrowUpRight size={19} />
                      </div>
                    </div>

                    {/* Top Camera Icon */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#252923]/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <Camera size={17} />
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          {/* ==================== INSTAGRAM ==================== */}
          <FadeIn delay={0.2}>
            <div className="mt-14 rounded-[1.5rem] border border-white/80 bg-white p-8 text-center shadow-[0_10px_35px_rgba(63,74,56,0.07)] sm:p-10">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9C7A2]/60 bg-[#F1EEE3] text-[#8D713D]">
                <Camera size={24} />
              </div>

              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C6A96B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D]">
                  Stay Connected
                </p>

                <span className="h-px w-10 bg-[#C6A96B]" />
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-[#252923] sm:text-3xl">
                Follow Our
                <span className="ml-2 font-light italic text-[#3F4A38]">
                  Wellness Journey
                </span>
              </h3>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
              </div>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#62675E] sm:text-base">
                Follow us for wellness tips, spa moments, special offers and
                relaxing experiences.
              </p>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#3F4A38] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-lg"
              >
                @karinak69

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </FadeIn>

          {/* ==================== BOOKING CTA ==================== */}
          <FadeIn delay={0.25}>
            <div className="relative mt-16 overflow-hidden rounded-[1.5rem] bg-[#3F4A38] px-6 py-14 text-center shadow-[0_15px_40px_rgba(63,74,56,0.15)] sm:px-10">

              {/* Decorative circles */}
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />

              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

              <div className="relative">

                <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#C6A96B]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
                    Experience It Yourself
                  </p>

                  <span className="h-px w-10 bg-[#C6A96B]" />
                </div>

                <h2 className="text-3xl font-semibold leading-[1.12] text-[#FFFDF8] sm:text-4xl">
                  Ready to Relax &
                  <span className="mt-2 block font-light italic text-[#D9C7A2]">
                    Reconnect?
                  </span>
                </h2>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                  <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
                </div>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
                  Step into a peaceful environment designed to refresh your
                  body, calm your mind and restore your energy.
                </p>

                <Link
                  to="/booking"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFFDF8] px-7 py-3.5 text-sm font-semibold text-[#3F4A38] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  Book Your Appointment

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== IMAGE MODAL ==================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#252923]/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <FadeIn>
            <div
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#FFFDF8]/95 text-[#252923] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white"
                aria-label="Close image"
              >
                <X size={21} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[85vh] w-auto max-w-full rounded-[1.25rem] border border-white/20 object-contain shadow-2xl"
              />

              {/* Modal Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-[1.25rem] bg-gradient-to-t from-[#252923]/90 via-[#252923]/50 to-transparent px-5 pb-5 pt-14">

                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#D9C7A2]">
                  Simran Day/Night Spa
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  {selectedImage.title}
                </h3>
              </div>

            </div>
          </FadeIn>
        </div>
      )}
    </>
  );
};

export default Gallery;