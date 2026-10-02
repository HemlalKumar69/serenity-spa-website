import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Suman <span className="font-normal">Spa</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
            Relax your body, refresh your mind and restore your inner
            balance with our professional spa and wellness treatments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold">Our Services</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
            <span>Swedish Massage</span>
            <span>Deep Tissue Massage</span>
            <span>Aromatherapy</span>
            <span>Body Spa</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <p>721428, Digha kolkata</p>
            <p>+91 0000000000</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 px-4 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Suman Day/Night Spa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;