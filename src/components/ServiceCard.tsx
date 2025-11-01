import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const whatsappMessage = `Hi, I'd like to know more about ${title} at Butwal Dental.`;
  const whatsappNumber = "9771234567890";

  return (
    <div className="group bg-card border rounded-xl p-6 shadow-soft hover:shadow-card transition-smooth">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-smooth">
        <i className={`${icon} text-3xl text-primary group-hover:text-primary-foreground transition-smooth`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-smooth">
          <i className="fab fa-whatsapp mr-2"></i>
          Book Now
        </Button>
      </a>
    </div>
  );
};

export default ServiceCard;
