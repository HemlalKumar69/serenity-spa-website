import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const phoneNumber = "917320817939";

  return (
    <div className="fixed bottom-6 right-5 z-[9999] flex flex-col gap-3">
      {/* Call */}
      <a
        href={`tel:+${phoneNumber}`}
        aria-label="Call Suman Day/Night Spa"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-emerald-800"
      >
        <Phone size={25} />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=Hello%20Suman%20Day/Night%20Spa,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Suman Day/Night Spa"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingContact;