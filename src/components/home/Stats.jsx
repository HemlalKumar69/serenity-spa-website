import { Award, Heart, Sparkles, Star } from "lucide-react";
import FadeIn from "../common/FadeIn";

const stats = [
  {
    icon: Award,
    value: "8+",
    label: "Years of Experience",
    description: "Wellness & spa experience",
  },
  {
    icon: Heart,
    value: "5K+",
    label: "Happy Clients",
    description: "Relaxation experiences",
  },
  {
    icon: Sparkles,
    value: "15+",
    label: "Wellness Treatments",
    description: "Spa & massage services",
  },
  {
    icon: Star,
    value: "4.9 ★",
    label: "Average Rating",
    description: "Client experience",
  },
];

const Stats = () => {
  return (
    <section
      className="bg-[#3F4A38] py-16 sm:py-20 lg:py-24"
      aria-labelledby="spa-stats-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SEO-friendly hidden heading */}
        <h2
          id="spa-stats-heading"
          className="sr-only"
        >
          Simran Day/Night Spa in Digha – Experience and Wellness Highlights
        </h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeIn
                key={stat.label}
                delay={index * 0.1}
                direction="up"
              >
                <article className="group text-center">
                  {/* Icon */}
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9C7A2]/40 bg-[#FFFDF8]/10 transition-all duration-300 group-hover:border-[#D9C7A2] group-hover:bg-[#FFFDF8]/15"
                    aria-hidden="true"
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      className="text-[#D9C7A2]"
                    />
                  </div>

                  {/* Number */}
                  <p
                    className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </p>

                  {/* Label */}
                  <h3 className="mt-2 text-sm font-semibold text-[#F5F1E8] sm:text-base">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-xs leading-5 text-white/65 sm:text-sm">
                    {stat.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;