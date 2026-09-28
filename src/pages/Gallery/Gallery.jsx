import { ArrowUpRight, Camera, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import galleryData from "../../data/galleryData";
import FadeIn from "../../components/common/FadeIn";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-900 py-20 sm:py-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Our Gallery
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              A Space Made for
              <span className="block text-emerald-200">
                Relaxation & Wellness.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
              Take a look inside our peaceful spa environment, relaxing
              treatments and wellness experience.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Gallery */}
      <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Camera size={22} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Serenity Moments
              </p>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Explore Our{" "}
                <span className="text-emerald-700">Spa Experience</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Every corner of Serenity Spa is designed to create a calm,
                comfortable and refreshing experience.
              </p>
            </div>
          </FadeIn>

          {/* Images */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryData.map((item, index) => (
              <FadeIn
                key={item.id}
                delay={index * 0.12}
                direction="up"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group relative w-full overflow-hidden rounded-3xl bg-white text-left shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-80"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-white">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs text-white/80">
                          Serenity Spa
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-700">
                        <ArrowUpRight size={19} />
                      </div>
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          {/* Instagram style bottom */}
          <FadeIn delay={0.2}>
            <div className="mt-12 rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-gray-100 sm:p-10">
              <Camera
                size={25}
                className="mx-auto text-emerald-700"
              />

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Follow Our Wellness Journey
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
                Follow us for wellness tips, spa moments, special offers and
                relaxing experiences.
              </p>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                @karinak69
                <ArrowUpRight size={17} />
              </a>
            </div>
          </FadeIn>

          {/* Booking CTA */}
          <FadeIn delay={0.25}>
            <div className="mt-16 rounded-3xl bg-emerald-800 px-6 py-12 text-center sm:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Experience It Yourself
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to Relax & Reconnect?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-emerald-100">
                Step into a peaceful environment designed to refresh your
                body, calm your mind and restore your energy.
              </p>

              <Link
                to="/booking"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Book Your Appointment
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <FadeIn>
            <div
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition hover:bg-gray-100"
                aria-label="Close image"
              >
                <X size={20} />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-10">
                <h3 className="text-xl font-bold text-white">
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