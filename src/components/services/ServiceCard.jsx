
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <article className="group h-full overflow-hidden rounded-[1.5rem] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(63,74,56,0.16)]">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} spa and massage treatment at Simran Day/Night Spa in Digha`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />

        {/* Premium Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#252923]/65 via-[#3F4A38]/10 to-transparent" />

        {/* Price */}
        <div className="absolute right-4 top-4 rounded-full border border-[#D9C7A2]/70 bg-[#FFFDF8]/95 px-4 py-2 text-sm font-semibold text-[#3F4A38] shadow-md backdrop-blur-sm">
          {service.price}
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-[#252923]/45 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md">
          <Clock size={15} className="text-[#D9C78F]" />
          {service.duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex min-h-[215px] flex-col p-6">
        {/* Small Gold Accent */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-7 bg-[#C6A96B]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C6A96B]" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#252923] transition-colors duration-300 group-hover:text-[#3F4A38]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#62675E]">
          {service.description}
        </p>

        {/* Explore Link */}
        <Link
          to={`/services/${service.id}`}
          aria-label={`Explore ${service.title} treatment at Simran Day/Night Spa in Digha`}
          className="group/link mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#7C6436] transition-colors duration-300 hover:text-[#3F4A38]"
        >
          Explore Treatment
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
          />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;

