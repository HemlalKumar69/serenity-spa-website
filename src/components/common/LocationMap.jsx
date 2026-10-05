import { useState } from "react";

import {
  MapPin,
  Navigation,
  LocateFixed,
  ExternalLink,
} from "lucide-react";

import { SPA_LOCATION } from "../../utils/constants";

const LocationMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState("");

  // Get customer's current location
  const handleGetLocation = () => {
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError(
        "Your browser does not support location access."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setLocationError(
          "Please allow location access to use your current location."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // Open Google Maps directions
  const handleDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${SPA_LOCATION.latitude},${SPA_LOCATION.longitude}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Open location directly in Google Maps
  const handleOpenMap = () => {
    window.open(
      SPA_LOCATION.googleMapsUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C6A96B]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
              Visit Our Spa in Digha
            </p>

            <span className="h-px w-10 bg-[#C6A96B]" />
          </div>

          <h2
            id="location-heading"
            className="text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl"
          >
            Find Simran Day/Night Spa in
            <span className="mt-2 block font-light italic text-[#3F4A38]">
              New Digha, West Bengal
            </span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
            <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#62675E] sm:text-base">
            Visit Simran Day/Night Spa in New Digha, Digha, West Bengal
            for relaxing spa and massage treatments. Use the map below
            to find our location and get directions.
          </p>
        </div>

        {/* Location Info */}
        <div className="mb-6 rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-[0_10px_35px_rgba(63,74,56,0.07)] sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Location Details */}
            <div className="flex gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9C7A2]/60 bg-[#F1EEE3]"
                aria-hidden="true"
              >
                <MapPin size={22} className="text-[#8D713D]" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#252923]">
                  Simran Day/Night Spa
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-[#62675E]">
                  {SPA_LOCATION.address}
                </p>

                <p className="mt-2 text-xs font-medium text-[#8D713D]">
                  New Digha, Digha, West Bengal
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {/* My Location */}
              <button
                type="button"
                onClick={handleGetLocation}
                aria-label="Use my current location"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C6A96B]/70 bg-white px-5 py-2.5 text-sm font-semibold text-[#3F4A38] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6A96B] hover:bg-[#F8F6EE] hover:shadow-md"
              >
                <LocateFixed size={17} aria-hidden="true" />
                My Location
              </button>

              {/* Directions */}
              <button
                type="button"
                onClick={handleDirections}
                aria-label="Get directions to Simran Day/Night Spa in Digha"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3F4A38] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30382B] hover:shadow-lg"
              >
                <Navigation size={17} aria-hidden="true" />
                Get Directions
              </button>
            </div>
          </div>

          {/* Location Error */}
          {locationError && (
            <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-600">
                {locationError}
              </p>
            </div>
          )}

          {/* Location Success */}
          {userLocation && (
            <div className="mt-4 rounded-xl border border-[#C9D1C3] bg-[#F1F3EC] px-4 py-3">
              <p className="text-sm font-medium text-[#52624D]">
                ✓ Your current location has been detected.
              </p>
            </div>
          )}
        </div>

        {/* Google Maps */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-1.5 shadow-[0_15px_45px_rgba(63,74,56,0.10)] sm:h-[450px]">
          <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]">
            <iframe
              title="Simran Day/Night Spa location in New Digha, Digha, West Bengal"
              src={`https://www.google.com/maps?q=${SPA_LOCATION.latitude},${SPA_LOCATION.longitude}&z=16&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Open in Google Maps */}
            <button
              type="button"
              onClick={handleOpenMap}
              aria-label="Open Simran Day/Night Spa location in Google Maps"
              className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/95 px-4 py-2.5 text-xs font-semibold text-[#3F4A38] shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Open in Maps
            </button>
          </div>
        </div>

        {/* Local SEO Information */}
        <div className="mt-6 rounded-[1.5rem] border border-[#DDE3D7] bg-[#F8F9F4] p-5 text-center sm:p-6">
          <p className="text-sm leading-7 text-[#62675E]">
            Looking for a{" "}
            <strong className="font-semibold text-[#3F4A38]">
              spa in Digha
            </strong>
            ,{" "}
            <strong className="font-semibold text-[#3F4A38]">
              massage spa in New Digha
            </strong>
            , or a relaxing{" "}
            <strong className="font-semibold text-[#3F4A38]">
              body massage in Digha
            </strong>
            ? Visit Simran Day/Night Spa and explore our wellness
            treatments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;