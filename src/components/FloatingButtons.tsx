const FloatingButtons = () => {
  const whatsappMessage = "Hi, I'd like to book a dental appointment at Butwal Dental.";
  const whatsappNumber = "9771234567890"; // Replace with actual number
  const phoneNumber = "+97771234567";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-card transition-smooth hover:scale-110"
        aria-label="Chat on WhatsApp"
        title="Book Appointment on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl group-hover:animate-pulse"></i>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group w-14 h-14 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full flex items-center justify-center shadow-card transition-smooth hover:scale-110"
        aria-label="Call Now"
        title="Call Now"
      >
        <i className="fas fa-phone-alt text-xl group-hover:animate-pulse"></i>
      </a>
    </div>
  );
};

export default FloatingButtons;
