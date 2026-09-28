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
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Your wellness is our
              <span className="block font-light italic">
                priority
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
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
                <div className="group h-full rounded-3xl border border-gray-100 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 transition-all duration-300 group-hover:bg-emerald-700">
                    <Icon
                      size={28}
                      className="text-emerald-700 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
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
