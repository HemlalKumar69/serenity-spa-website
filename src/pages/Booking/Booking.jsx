import {
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  MessageCircle
} from "lucide-react";

import BookingForm from "../../components/booking/BookingForm";
import FadeIn from "../../components/common/FadeIn";

const Booking = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-900 py-20 sm:py-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Book Your Visit
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Your Time to
              <span className="block text-emerald-200">
                Relax Starts Here.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
              Choose your preferred treatment, date and time. Our team will
              contact you to confirm your appointment.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Booking Section */}
      <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-12">

            {/* Form */}
            <FadeIn direction="right">
              <BookingForm />
            </FadeIn>

            {/* Sidebar */}
            <aside className="space-y-5">

              {/* Quick Info */}
              <FadeIn direction="left">
                <div className="rounded-3xl bg-emerald-800 p-7 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">
                    Appointment Info
                  </p>

                  <h2 className="mt-3 text-2xl font-bold">
                    What to Expect
                  </h2>

                  <div className="mt-7 space-y-5">

                    {/* Easy Booking */}
                    <FadeIn delay={0.1} direction="left">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                          <CalendarCheck size={19} />
                        </div>

                        <div>
                          <h3 className="font-semibold">
                            Easy Booking
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-emerald-100">
                            Choose a treatment, date and convenient time.
                          </p>
                        </div>
                      </div>
                    </FadeIn>

                    {/* Flexible Timings */}
                    <FadeIn delay={0.2} direction="left">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                          <Clock size={19} />
                        </div>

                        <div>
                          <h3 className="font-semibold">
                            Flexible Timings
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-emerald-100">
                            Multiple appointment slots are available every day.
                          </p>
                        </div>
                      </div>
                    </FadeIn>

                    {/* Personal Care */}
                    <FadeIn delay={0.3} direction="left">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                          <ShieldCheck size={19} />
                        </div>

                        <div>
                          <h3 className="font-semibold">
                            Personal Care
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-emerald-100">
                            Every treatment is designed around your comfort.
                          </p>
                        </div>
                      </div>
                    </FadeIn>

                  </div>
                </div>
              </FadeIn>

              {/* Contact Card */}
              <FadeIn direction="left" delay={0.2}>
                <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-xl font-bold text-gray-900">
                    Need Help?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Have questions before booking? Our team is happy to help.
                  </p>

                  <div className="mt-6 space-y-4">

                    <a
                      href="tel:+919341314387"
                      className="flex items-center gap-3 text-sm font-medium text-gray-700 transition hover:text-emerald-700"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                        <Phone size={18} />
                      </span>

                      +91 9341314387
                    </a>

                    <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                        <MapPin size={18} />
                      </span>

                      New Digha, Digha, West Bengal 721428
                    </div>

                    {/* Call & WhatsApp Buttons */}
<div className="mt-8 flex flex-col gap-4 sm:flex-row">

  {/* Call Button */}
  <a
    href="tel:+919341314387"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-emerald-800"
  >
    <Phone size={20} />
    Call Now
  </a>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919341314387?text=Hello%20Simran%20Day/Night%20Spa,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-green-600"
  >
    <MessageCircle size={20} />
    WhatsApp
  </a>

</div>

                  </div>
                </div>
              </FadeIn>

            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Your Wellness Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Take a Moment for Yourself
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              A little time for yourself can make a big difference. Book your
              relaxing experience at Simran Day/Night Spa today.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default Booking;
