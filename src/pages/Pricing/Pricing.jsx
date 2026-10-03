// import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";

// import servicesData from "../../data/servicesData";
// import FadeIn from "../../components/common/FadeIn";

// const Pricing = () => {
//   const popularService = 2;

//   return (
//     <>
//       {/* Hero */}
//       <section className="bg-emerald-900 py-20 sm:py-24">
//         <FadeIn>
//           <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
//               Our Pricing
//             </p>

//             <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
//               Simple & Transparent
//               <span className="block text-emerald-200">
//                 Wellness Pricing.
//               </span>
//             </h1>

//             <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
//               Choose the treatment that suits you best and enjoy a peaceful
//               wellness experience at Simran Day/Night Spa.
//             </p>
//           </div>
//         </FadeIn>
//       </section>

//       {/* Pricing */}
//       <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           {/* Heading */}
//           <FadeIn>
//             <div className="mx-auto mb-12 max-w-2xl text-center">
//               <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
//                 <Sparkles size={22} />
//               </div>

//               <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
//                 Treatment Plans
//               </p>

//               <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                 Choose Your{" "}
//                 <span className="text-emerald-700">
//                   Perfect Treatment
//                 </span>
//               </h2>

//               <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
//                 Quality wellness treatments with experienced professionals,
//                 premium products and personalized care.
//               </p>
//             </div>
//           </FadeIn>

//           {/* Cards */}
//           <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//             {servicesData.map((service, index) => {
//               const isPopular = service.id === popularService;

//               return (
//                 <FadeIn
//                   key={service.id}
//                   delay={index * 0.12}
//                   direction="up"
//                 >
//                   <article
//                     className={`relative h-full overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
//                       isPopular
//                         ? "ring-2 ring-emerald-600"
//                         : "ring-gray-100"
//                     }`}
//                   >
//                     {/* Popular */}
//                     {isPopular && (
//                       <div className="absolute right-5 top-5 rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-bold text-white">
//                         Most Popular
//                       </div>
//                     )}

//                     {/* Icon */}
//                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 hover:rotate-6">
//                       <Sparkles size={22} />
//                     </div>

//                     {/* Title */}
//                     <h3 className="mt-6 pr-24 text-2xl font-bold text-gray-900">
//                       {service.title}
//                     </h3>

//                     <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
//                       {service.description}
//                     </p>

//                     {/* Price */}
//                     <div className="mt-6 flex items-end justify-between border-b border-gray-100 pb-6">
//                       <div>
//                         <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
//                           Starting From
//                         </p>

//                         <p className="mt-1 text-3xl font-bold text-emerald-700">
//                           {service.price}
//                         </p>
//                       </div>

//                       <div className="mb-1 flex items-center gap-1.5 text-sm text-gray-500">
//                         <Clock size={16} />
//                         {service.duration}
//                       </div>
//                     </div>

//                     {/* Features */}
//                     <div className="mt-6 space-y-3">
//                       <div className="flex items-center gap-3 text-sm text-gray-700">
//                         <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
//                           <Check size={13} />
//                         </span>
//                         Professional therapist
//                       </div>

//                       <div className="flex items-center gap-3 text-sm text-gray-700">
//                         <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
//                           <Check size={13} />
//                         </span>
//                         Premium wellness products
//                       </div>

//                       <div className="flex items-center gap-3 text-sm text-gray-700">
//                         <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
//                           <Check size={13} />
//                         </span>
//                         Personalized care
//                       </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="mt-7 flex flex-col gap-3">
//                       <Link
//                         to="/booking"
//                         className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
//                       >
//                         Book Now
//                         <ArrowRight size={17} />
//                       </Link>

//                       <Link
//                         to={`/services/${service.id}`}
//                         className="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:text-emerald-700"
//                       >
//                         View Treatment
//                       </Link>
//                     </div>
//                   </article>
//                 </FadeIn>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Membership CTA */}
//       <section className="bg-white py-16 sm:py-20">
//         <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
//           <FadeIn>
//             <div className="overflow-hidden rounded-3xl bg-emerald-800 px-6 py-12 text-center sm:px-10 sm:py-14">
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
//                 Wellness Made Easy
//               </p>

//               <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
//                 Not Sure Which Treatment to Choose?
//               </h2>

//               <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
//                 Our team can help you select the right treatment according to
//                 your relaxation, wellness and skincare needs.
//               </p>

//               <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
//                 <Link
//                   to="/booking"
//                   className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-lg"
//                 >
//                   Book an Appointment
//                   <ArrowRight size={18} />
//                 </Link>

//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center rounded-full border border-emerald-300 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700"
//                 >
//                   Talk to Us
//                 </Link>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Pricing;