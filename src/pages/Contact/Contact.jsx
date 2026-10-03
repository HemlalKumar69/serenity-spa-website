// import {
//   Clock3,
//   Mail,
//   MapPin,
//   MessageSquare,
//   Phone,
//   Send,
// } from "lucide-react";
// import { useState } from "react";

// import FadeIn from "../../components/common/FadeIn";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     console.log("Contact Message:", formData);
//     setSubmitted(true);
//   };

//   const handleNewMessage = () => {
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     });

//     setSubmitted(false);
//   };

//   return (
//     <>
//       {/* Hero */}
//       <section className="bg-emerald-900 py-20 sm:py-24">
//         <FadeIn>
//           <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
//               Get In Touch
//             </p>

//             <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
//               We'd Love to
//               <span className="block text-emerald-200">
//                 Hear From You.
//               </span>
//             </h1>

//             <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
//               Have a question about our treatments or need help choosing the
//               right experience? Get in touch with our team.
//             </p>
//           </div>
//         </FadeIn>
//       </section>

//       {/* Contact */}
//       <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">

//             {/* Contact Info */}
//             <div>
//               <FadeIn direction="right">
//                 <div>
//                   <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
//                     Contact Information
//                   </p>

//                   <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
//                     Let's Start a Conversation
//                   </h2>

//                   <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
//                     Our friendly team is available to answer your questions,
//                     discuss treatments and help you plan your wellness visit.
//                   </p>
//                 </div>
//               </FadeIn>

//               <div className="mt-8 space-y-5">

//                 {/* Address */}
//                 <FadeIn direction="right" delay={0.1}>
//                   <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
//                       <MapPin size={20} />
//                     </div>

//                     <div>
//                       <h3 className="font-bold text-gray-900">
//                         Visit Us
//                       </h3>

//                       <p className="mt-1 text-sm leading-6 text-gray-600">
//                          Simran Day/Night Spa
//                         <br />
//                         Main Road, Wellness Avenue
//                         <br />
//                         India
//                       </p>
//                     </div>
//                   </div>
//                 </FadeIn>

//                 {/* Phone */}
//                 <FadeIn direction="right" delay={0.2}>
//                   <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
//                       <Phone size={20} />
//                     </div>

//                     <div>
//                       <h3 className="font-bold text-gray-900">
//                         Call Us
//                       </h3>

//                       <a
//                         href="tel:+919341314387"
//                         className="mt-1 block text-sm text-gray-600 transition hover:text-emerald-700"
//                       >
//                         +91 9341314387
//                       </a>
//                     </div>
//                   </div>
//                 </FadeIn>

//                 {/* Email */}
//                 <FadeIn direction="right" delay={0.3}>
//                   <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
//                       <Mail size={20} />
//                     </div>

//                     <div>
//                       <h3 className="font-bold text-gray-900">
//                         Email Us
//                       </h3>

//                       <a
//                         href="mailto:hello@serenityspa.com"
//                         className="mt-1 block break-all text-sm text-gray-600 transition hover:text-emerald-700"
//                       >
//                         
//                       </a>
//                     </div>
//                   </div>
//                 </FadeIn>

//                 {/* Hours */}
//                 <FadeIn direction="right" delay={0.4}>
//                   <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
//                       <Clock3 size={20} />
//                     </div>

//                     <div>
//                       <h3 className="font-bold text-gray-900">
//                         Opening Hours
//                       </h3>

//                       <p className="mt-1 text-sm leading-6 text-gray-600">
//                         Monday - Sunday
//                         <br />
//                         9:00 AM - 8:00 PM
//                       </p>
//                     </div>
//                   </div>
//                 </FadeIn>

//               </div>
//             </div>

//             {/* Form */}
//             <FadeIn direction="left" delay={0.15}>
//               <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8 lg:p-10">

//                 {submitted ? (
//                   <FadeIn>
//                     <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
//                       <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
//                         <Send size={28} />
//                       </div>

//                       <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
//                         Message Sent Successfully!
//                       </h2>

//                       <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600">
//                         Thank you, {formData.name}. We have received your
//                         message and our team will get back to you shortly.
//                       </p>

//                       <button
//                         type="button"
//                         onClick={handleNewMessage}
//                         className="mt-7 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
//                       >
//                         Send Another Message
//                       </button>
//                     </div>
//                   </FadeIn>
//                 ) : (
//                   <>
//                     <FadeIn direction="left">
//                       <div className="mb-7">
//                         <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
//                           Send a Message
//                         </p>

//                         <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
//                           How Can We Help?
//                         </h2>

//                         <p className="mt-3 text-sm leading-6 text-gray-600">
//                           Fill out the form and we'll get back to you as soon
//                           as possible.
//                         </p>
//                       </div>
//                     </FadeIn>

//                     <form onSubmit={handleSubmit}>
//                       <div className="grid gap-5 sm:grid-cols-2">

//                         {/* Name */}
//                         <FadeIn delay={0.1}>
//                           <div>
//                             <label className="mb-2 block text-sm font-semibold text-gray-800">
//                               Full Name{" "}
//                               <span className="text-red-500">*</span>
//                             </label>

//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               placeholder="Enter your name"
//                               className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
//                             />
//                           </div>
//                         </FadeIn>

//                         {/* Email */}
//                         <FadeIn delay={0.2}>
//                           <div>
//                             <label className="mb-2 block text-sm font-semibold text-gray-800">
//                               Email Address{" "}
//                               <span className="text-red-500">*</span>
//                             </label>

//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               placeholder="Enter your email"
//                               className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
//                             />
//                           </div>
//                         </FadeIn>

//                         {/* Phone */}
//                         <FadeIn delay={0.3}>
//                           <div className="sm:col-span-2">
//                             <label className="mb-2 block text-sm font-semibold text-gray-800">
//                               Phone Number
//                             </label>

//                             <input
//                               type="tel"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               placeholder="Enter your phone number"
//                               className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
//                             />
//                           </div>
//                         </FadeIn>

//                         {/* Message */}
//                         <FadeIn delay={0.4}>
//                           <div className="sm:col-span-2">
//                             <label className="mb-2 block text-sm font-semibold text-gray-800">
//                               Your Message{" "}
//                               <span className="text-red-500">*</span>
//                             </label>

//                             <div className="relative">
//                               <MessageSquare
//                                 size={18}
//                                 className="pointer-events-none absolute left-4 top-4 text-gray-400"
//                               />

//                               <textarea
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 rows="7"
//                                 placeholder="Write your message here..."
//                                 className="w-full resize-none rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
//                               />
//                             </div>
//                           </div>
//                         </FadeIn>
//                       </div>

//                       <FadeIn delay={0.5}>
//                         <button
//                           type="submit"
//                           className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg sm:w-auto sm:min-w-[190px]"
//                         >
//                           <Send size={18} />
//                           Send Message
//                         </button>
//                       </FadeIn>
//                     </form>
//                   </>
//                 )}
//               </div>
//             </FadeIn>

//           </div>
//         </div>
//       </section>

//       {/* Map / Location */}
//       <section className="bg-white py-16 sm:py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <FadeIn>
//             <div className="mb-8 text-center">
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
//                 Find Us
//               </p>

//               <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
//                 Visit Simran Day/Night Spa
//               </h2>
//             </div>
//           </FadeIn>

//           <FadeIn delay={0.15}>
//             <div className="flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl bg-emerald-50 p-8 text-center ring-1 ring-emerald-100 sm:min-h-[380px]">
//               <div>
//                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 text-white">
//                   <MapPin size={28} />
//                 </div>

//                 <h3 className="mt-5 text-2xl font-bold text-gray-900">
//                   Simran Day/Night Spa
//                 </h3>

//                 <p className="mt-2 text-sm text-gray-600">
//                   Main Road, Wellness Avenue, India
//                 </p>

//                 <a
//                   href="https://www.google.com/maps"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="mt-5 inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
//                 >
//                   Get Directions
//                 </a>
//               </div>
//             </div>
//           </FadeIn>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;


import { API_BASE_URL } from "../../utils/constants";

import {
  Clock3,
  // Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";
import axios from "axios";

import FadeIn from "../../components/common/FadeIn";
import LocationMap from "../../components/common/LocationMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        `${API_BASE_URL}/api/contacts`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );

      if (response.data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Contact API Error:", error);

      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError(
          "Unable to send message. Please make sure the server is running."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNewMessage = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setSubmitted(false);
    setError("");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-900 py-20 sm:py-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Get In Touch
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              We'd Love to
              <span className="block text-emerald-200">
                Hear From You.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
              Have a question about our treatments or need help choosing the
              right experience? Get in touch with our team.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Contact */}
      <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">

            {/* Contact Info */}
            <div>
              <FadeIn direction="right">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Contact Information
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Let's Start a Conversation
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                    Our friendly team is available to answer your questions,
                    discuss treatments and help you plan your wellness visit.
                  </p>
                </div>
              </FadeIn>

              <div className="mt-8 space-y-5">

                {/* Address */}
                <FadeIn direction="right" delay={0.1}>
                  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        Visit Us
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Simran Day/Night Spa
                        <br />
                        Plot No. 373-534, N2 Sector
                        <br />
                        New Digha, Digha, West Bengal 721428
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Phone */}
                <FadeIn direction="right" delay={0.2}>
                  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <Phone size={20} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        Call Us
                      </h3>

                      <a
                        href="tel:+919341314387"
                        className="mt-1 block text-sm text-gray-600 transition hover:text-emerald-700"
                      >
                        +91 9341314387
                      </a>

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

                {/* Email */}
                <FadeIn direction="right" delay={0.3}>
                  <div className="">
                    

                    <div>
                      {/* <h3 className="font-bold text-gray-900">
                        Email Us
                      </h3> */}

                      <a
                        href=""
                        className="mt-1 block break-all text-sm text-gray-600 transition hover:text-emerald-700"
                      >
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Hours */}
                <FadeIn direction="right" delay={0.4}>
                  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <Clock3 size={20} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        Opening Hours
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Monday - Sunday
                        <br />
                        9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>

                </FadeIn>                

              </div>                       

            </div>

            {/* Form */}
            <FadeIn direction="left" delay={0.15}>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8 lg:p-10">

                {submitted ? (
                  <FadeIn>
                    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Send size={28} />
                      </div>

                      <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                        Message Sent Successfully!
                      </h2>

                      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600">
                        Thank you, {formData.name}. We have received your
                        message and our team will get back to you shortly.
                      </p>

                      <button
                        type="button"
                        onClick={handleNewMessage}
                        className="mt-7 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </FadeIn>
                ) : (
                  <>
                    <FadeIn direction="left">
                      <div className="mb-7">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
                          Send a Message
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                          How Can We Help?
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          Fill out the form and we'll get back to you as soon
                          as possible.
                        </p>
                      </div>
                    </FadeIn>

                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-5 sm:grid-cols-2">

                        {/* Name */}
                        <FadeIn delay={0.1}>
                          <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-800">
                              Full Name{" "}
                              <span className="text-red-500">*</span>
                            </label>

                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                            />
                          </div>
                        </FadeIn>

                        {/* Email */}
                        <FadeIn delay={0.2}>
                          <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-800">
                              Email Address{" "}
                              <span className="text-red-500">*</span>
                            </label>

                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                            />
                          </div>
                        </FadeIn>

                        {/* Phone */}
                        <FadeIn delay={0.3}>
                          <div className="sm:col-span-2">
                            <label className="mb-2 block text-sm font-semibold text-gray-800">
                              Phone Number
                            </label>

                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                            />
                          </div>
                        </FadeIn>

                        {/* Message */}
                        <FadeIn delay={0.4}>
                          <div className="sm:col-span-2">
                            <label className="mb-2 block text-sm font-semibold text-gray-800">
                              Your Message{" "}
                              <span className="text-red-500">*</span>
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
                                rows="7"
                                placeholder="Write your message here..."
                                className="w-full resize-none rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                              />
                            </div>
                          </div>
                        </FadeIn>
                      </div>

                      {/* Error */}
                      {error && (
                        <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                          {error}
                        </div>
                      )}

                      {/* Submit */}
                      <FadeIn delay={0.5}>
                        <button
                          type="submit"
                          disabled={loading}
                          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[190px]"
                        >
                          <Send size={18} />

                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </FadeIn>

                      <p className="mt-3 text-xs text-gray-500">
                        * Required fields. Your message will be sent to our
                        team.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Map / Location */}
      {/* <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Find Us
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Visit Simran Day/Night Spa
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl bg-emerald-50 p-8 text-center ring-1 ring-emerald-100 sm:min-h-[380px]">
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 text-white">
                  <MapPin size={28} />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  Simran Day/Night Spa
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Main Road, Wellness Avenue, India
                </p>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </section> */}

        {/* Map / Location */}
<section className="bg-white py-16 sm:py-20">
  <FadeIn>
    <div className="mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Find Us
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
        Visit Simran Day/Night Spa
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
        Find us at our Digha, West Bengal location.
      </p>
    </div>
  </FadeIn>

  <LocationMap />
</section>

    </>
  );
};

export default Contact;