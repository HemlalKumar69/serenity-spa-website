import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Price */}
        <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-md">
          {service.price}
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-medium text-white">
          <Clock size={15} />
          {service.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-700">
          {service.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {service.description}
        </p>

        <Link
          to={`/services/${service.id}`}
          className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
        >
          Explore Treatment

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;