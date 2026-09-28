import {
  CalendarCheck,
  Mail,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";

import { useState } from "react";
import axios from "axios";

import servicesData from "../../data/servicesData";
import therapistsData from "../../data/therapistsData";

import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    therapist: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Required fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          therapist:
            formData.therapist || "Any available therapist",
          date: formData.date,
          time: formData.time,
          message: formData.message,
        }
      );

      if (response.data.success) {
        setSubmitted(true);

        console.log("Booking Created:", response.data.booking);
      }
    } catch (error) {
      console.error("Booking API Error:", error);

      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError(
          "Unable to submit booking. Please make sure the server is running."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNewBooking = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      therapist: "",
      date: "",
      time: "",
      message: "",
    });

    setSubmitted(false);
    setError("");
  };

  // Success screen
  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100 sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CalendarCheck size={30} />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Booking Request Submitted!
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-600">
          Thank you, {formData.name}. Your appointment request has been
          received. Our team will contact you shortly to confirm your booking.
        </p>

        <div className="mx-auto mt-7 max-w-md rounded-2xl bg-stone-50 p-5 text-left">
          <div className="flex justify-between gap-4 border-b border-gray-200 pb-3">
            <span className="text-sm text-gray-500">Treatment</span>

            <span className="text-right text-sm font-semibold text-gray-800">
              {formData.service}
            </span>
          </div>

          <div className="flex justify-between gap-4 border-b border-gray-200 py-3">
            <span className="text-sm text-gray-500">Date</span>

            <span className="text-sm font-semibold text-gray-800">
              {formData.date}
            </span>
          </div>

          <div className="flex justify-between gap-4 pt-3">
            <span className="text-sm text-gray-500">Time</span>

            <span className="text-sm font-semibold text-gray-800">
              {formData.time}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleNewBooking}
          className="mt-7 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8 lg:p-10"
    >
      {/* Personal Information */}
      <div>
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
            Personal Details
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Tell Us About Yourself
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Full Name <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <User
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Treatment */}
      <div className="mt-10 border-t border-gray-100 pt-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
            Treatment Details
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Choose Your Experience
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Service */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Select Treatment <span className="text-red-500">*</span>
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            >
              <option value="">Choose a treatment</option>

              {servicesData.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title} - {service.price}
                </option>
              ))}
            </select>
          </div>

          {/* Therapist */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Preferred Therapist
            </label>

            <select
              name="therapist"
              value={formData.therapist}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            >
              <option value="">Any available therapist</option>

              {therapistsData.map((therapist) => (
                <option key={therapist.id} value={therapist.name}>
                  {therapist.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <DateSelector
            selectedDate={formData.date}
            onDateChange={(date) =>
              setFormData((prev) => ({
                ...prev,
                date,
              }))
            }
          />

          {/* Time */}
          <div className="sm:col-span-2">
            <TimeSelector
              selectedTime={formData.time}
              onTimeChange={(time) =>
                setFormData((prev) => ({
                  ...prev,
                  time,
                }))
              }
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Special Request
            </label>

            <div className="relative">
              <MessageSquare
                size={18}
                className="pointer-events-none absolute left-4 top-4 text-gray-400"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us if you have any special requirements..."
                className="w-full resize-none rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      {/* Submit */}
      <div className="mt-10 border-t border-gray-100 pt-8">
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[220px]"
        >
          <CalendarCheck size={19} />

          {loading ? "Submitting..." : "Confirm Booking"}
        </button>

        <p className="mt-3 text-xs text-gray-500">
          * Required fields. Your appointment will be confirmed by our team.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;