import { useState } from "react";
import { MapPin, Navigation, LocateFixed } from "lucide-react";
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

    window.open(url, "_blank");
  };

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Location Info */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex gap-3">
              <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <MapPin
                  size={22}
                  className="text-emerald-700"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {SPA_LOCATION.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {SPA_LOCATION.address}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Current Location */}
              <button
                onClick={handleGetLocation}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-700 text-emerald-700 hover:bg-emerald-50 text-sm font-medium transition"
              >
                <LocateFixed size={17} />
                My Location
              </button>

              {/* Directions */}
              <button
                onClick={handleDirections}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium transition"
              >
                <Navigation size={17} />
                Get Directions
              </button>
            </div>
          </div>

          {locationError && (
            <p className="mt-3 text-sm text-red-600">
              {locationError}
            </p>
          )}

          {userLocation && (
            <p className="mt-3 text-sm text-emerald-700">
              Your current location has been detected.
            </p>
          )}
        </div>

        {/* Google Maps */}
        <div className="relative w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            title="Suman Day/Night Spa Location"
            src={`https://www.google.com/maps?q=${SPA_LOCATION.latitude},${SPA_LOCATION.longitude}&z=16&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;