import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import BookingForm from "../../components/booking/BookingForm";
import FadeIn from "../../components/common/FadeIn";

const Booking = () => {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-[#3F4A38] py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

        <FadeIn>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A96B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
                Book Your Visit
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
              Your Time to
              <span className="mt-2 block font-light italic text-[#D9C7A2]">
                Relax Starts Here.
              </span>
            </h1>

            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
              Choose your preferred treatment, date and time. Our team will
              contact you to confirm your appointment.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ==================== BOOKING SECTION ==================== */}
      <section className="bg-[#EFF2E7] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-12">
            {/* ==================== FORM ==================== */}
            <FadeIn direction="right">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-[0_10px_35px_rgba(63,74,56,0.08)] sm:p-7 lg:p-8">
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#C6A96B]" />

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8D713D]">
                      Appointment
                    </p>
                  </div>

                  <h2 className="text-2xl font-semibold text-[#252923] sm:text-3xl">
                    Book Your
                    <span className="ml-2 font-light italic text-[#3F4A38]">
                      Treatment
                    </span>
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#62675E]">
                    Fill in your details below and choose a convenient
                    appointment time.
                  </p>
                </div>

                <BookingForm />
              </div>
            </FadeIn>

            {/* ==================== SIDEBAR ==================== */}
            <aside className="space-y-5">
              {/* ==================== QUICK INFO ==================== */}
              <FadeIn direction="left">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#3F4A38] p-7 text-white shadow-[0_12px_35px_rgba(63,74,56,0.14)]">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#C6A96B]/10 blur-2xl" />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#C6A96B]" />

                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9C7A2]">
                        Appointment Info
                      </p>
                    </div>

                    <h2 className="mt-3 text-2xl font-semibold">
                      What to Expect
                    </h2>

                    <div className="mt-7 space-y-6">
                      {/* Easy Booking */}
                      <FadeIn delay={0.1} direction="left">
                        <div className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C6A96B]/30 bg-white/10 text-[#D9C7A2]">
                            <CalendarCheck size={19} />
                          </div>

                          <div>
                            <h3 className="font-semibold">
                              Easy Booking
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-[#E5E9DE]">
                              Choose a treatment, date and convenient time.
                            </p>
                          </div>
                        </div>
                      </FadeIn>

                      {/* Flexible Timings */}
                      <FadeIn delay={0.2} direction="left">
                        <div className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C6A96B]/30 bg-white/10 text-[#D9C7A2]">
                            <Clock size={19} />
                          </div>

                          <div>
                            <h3 className="font-semibold">
                              Flexible Timings
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-[#E5E9DE]">
                              Multiple appointment slots are available every
                              day.
                            </p>
                          </div>
                        </div>
                      </FadeIn>

                      {/* Personal Care */}
                      <FadeIn delay={0.3} direction="left">
                        <div className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C6A96B]/30 bg-white/10 text-[#D9C7A2]">
                            <ShieldCheck size={19} />
                          </div>

                          <div>
                            <h3 className="font-semibold">
                              Personal Care
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-[#E5E9DE]">
                              Every treatment is designed around your comfort.
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* ==================== CONTACT CARD ==================== */}
              <FadeIn direction="left" delay={0.2}>
                <div className="rounded-[1.5rem] border border-white/80 bg-white p-7 shadow-[0_10px_35px_rgba(63,74,56,0.08)]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C6A96B]" />

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D713D]">
                      Contact Us
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#252923]">
                    Need Help?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#62675E]">
                    Have questions before booking? Our team is happy to help.
                  </p>

                  <div className="mt-6 space-y-4">
                    {/* Phone */}
                    <a
                      href="tel:+919341314387"
                      className="group flex items-center gap-3 text-sm font-medium text-[#62675E] transition hover:text-[#3F4A38]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9C7A2]/50 bg-[#F1EEE3] text-[#8D713D] transition group-hover:bg-[#3F4A38] group-hover:text-white">
                        <Phone size={18} />
                      </span>

                      +91 9341314387
                    </a>

                    {/* Location */}
                    <div className="flex items-center gap-3 text-sm font-medium text-[#62675E]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9C7A2]/50 bg-[#F1EEE3] text-[#8D713D]">
                        <MapPin size={18} />
                      </span>

                      <span>
                        New Digha, Digha,
                        <br />
                        West Bengal 721428
                      </span>
                    </div>
                  </div>

                  {/* ==================== CALL & WHATSAPP ==================== */}
                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {/* Call */}
                    <a
                      href="tel:+919341314387"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3F4A38] px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#30382B] hover:shadow-lg"
                    >
                      <Phone size={19} />

                      Call Now

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919341314387?text=Hello%20Simran%20Day%2FNight%20Spa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#4CAF50] px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#3D9141] hover:shadow-lg"
                    >
                      <MessageCircle size={19} />

                      WhatsApp

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="bg-[#EFF2E7] pb-20 pt-4 sm:pb-24">
        <FadeIn>
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#3F4A38] px-6 py-14 text-center shadow-[0_15px_40px_rgba(63,74,56,0.15)] sm:px-10">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C6A96B]/15 blur-3xl" />

              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D9C7A2]/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#C6A96B]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C7A2] sm:text-sm">
                    Your Wellness Journey
                  </p>

                  <span className="h-px w-10 bg-[#C6A96B]" />
                </div>

                <h2 className="text-3xl font-semibold leading-[1.12] text-[#FFFDF8] sm:text-4xl">
                  Take a Moment for
                  <span className="mt-2 block font-light italic text-[#D9C7A2]">
                    Yourself
                  </span>
                </h2>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
                  <span className="h-1 w-2 rounded-full bg-[#C6A96B]/60" />
                </div>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#E5E9DE] sm:text-base">
                  A little time for yourself can make a big difference. Book
                  your relaxing experience at Simran Day/Night Spa today.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default Booking;