import FadeIn from "../common/FadeIn";

const stats = [
  {
    number: "8+",
    label: "Years of Experience",
  },
  {
    number: "5K+",
    label: "Happy Clients",
  },
  {
    number: "15+",
    label: "Wellness Treatments",
  },
  {
    number: "4.9",
    label: "Average Rating",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#3F4A38] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">

          {stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.12}
              direction="up"
            >
              <div
                className={`relative text-center text-white ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-[#C6A96B]/30"
                    : ""
                }`}
              >
                {/* Number */}
                <p className="text-4xl font-semibold tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-5xl">
                  {stat.number}
                </p>

                {/* Gold Accent */}
                <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-[#C6A96B]" />

                {/* Label */}
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-[#E5E9DE] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;