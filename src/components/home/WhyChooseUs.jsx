import {
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import FadeIn from "../common/FadeIn";

const features = [
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description:
      "Every treatment is tailored to your comfort, wellness needs and relaxation goals.",
  },
  {
    icon: Sparkles,
    title: "Expert Therapists",
    description:
      "Our trained therapists focus on providing a calm, professional and relaxing experience.",
  },
  {
    icon: Leaf,
    title: "Premium Products",
    description:
      "We use carefully selected products and natural ingredients for a luxurious experience.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Safe",
    description:
      "Your comfort, hygiene and safety are always among our highest priorities.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#EFF2E7] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">

            {/* Label */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A96B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D713D] sm:text-sm">
                Why Choose Us
              </p>

              <span className="h-px w-10 bg-[#C6A96B]" />
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-semibold leading-[1.12] tracking-tight text-[#252923] sm:text-4xl lg:text-5xl">
              Your wellness is our

              <span className="mt-2 block font-light italic text-[#3F4A38]">
                priority
              </span>
            </h2>

            {/* Gold Detail */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#C6A96B]" />
              <span className="h-1 w-2 rounded-full bg-[#C6A96B]/50" />
            </div>

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-[#62675E]">
              From the moment you walk in, every detail is designed to
              make you feel comfortable, relaxed and cared for.
            </p>

          </div>
        </FadeIn>

        {/* Features */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn
                key={feature.title}
                delay={index * 0.12}
                direction="up"
              >
                <div className="group h-full rounded-[1.5rem] border border-white/80 bg-white p-7 text-center shadow-[0_8px_30px_rgba(63,74,56,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(63,74,56,0.13)]">

                  {/* Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D9C7A2]/50 bg-[#F1EEE3] transition-all duration-300 group-hover:border-[#3F4A38] group-hover:bg-[#3F4A38]">

                    <Icon
                      size={28}
                      strokeWidth={1.7}
                      className="text-[#8D713D] transition-colors duration-300 group-hover:text-[#FFFDF8]"
                    />

                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-semibold text-[#252923] transition-colors duration-300 group-hover:text-[#3F4A38]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[#62675E]">
                    {feature.description}
                  </p>

                  {/* Bottom Gold Accent */}
                  <div className="mx-auto mt-6 h-0.5 w-8 rounded-full bg-[#C6A96B] transition-all duration-300 group-hover:w-14" />

                </div>
              </FadeIn>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;