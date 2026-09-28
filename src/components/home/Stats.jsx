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
    <section className="bg-emerald-800 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <FadeIn
            key={stat.label}
            delay={index * 0.12}
            direction="up"
          >
            <div className="text-center text-white">
              <p className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                {stat.number}
              </p>

              <p className="mt-2 text-xs text-emerald-100 sm:text-sm">
                {stat.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Stats;
