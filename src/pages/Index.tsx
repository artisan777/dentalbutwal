import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-image.jpg";
import doctorFemale from "@/assets/doctor-female.jpg";
import doctorMale from "@/assets/doctor-male.jpg";
import familyDental from "@/assets/family-dental.jpg";

const Index = () => {
  const services = [
    {
      icon: "fas fa-broom",
      title: "Teeth Cleaning",
      description: "Professional deep cleaning to keep your teeth healthy and bright.",
    },
    {
      icon: "fas fa-star",
      title: "Teeth Whitening",
      description: "Advanced whitening treatments for a brighter, confident smile.",
    },
    {
      icon: "fas fa-tooth",
      title: "Braces & Aligners",
      description: "Straighten your teeth with modern braces and invisible aligners.",
    },
    {
      icon: "fas fa-heartbeat",
      title: "Root Canal",
      description: "Painless root canal treatment by experienced endodontists.",
    },
    {
      icon: "fas fa-cog",
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel natural.",
    },
    {
      icon: "fas fa-child",
      title: "Child Dentistry",
      description: "Gentle, caring dental care specially designed for children.",
    },
  ];

  const features = [
    {
      icon: "fas fa-laptop-medical",
      title: "Modern Equipment",
      description: "State-of-the-art dental technology for precise treatments",
    },
    {
      icon: "fas fa-user-md",
      title: "Experienced Doctors",
      description: "Highly qualified dentists with years of expertise",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Painless Care",
      description: "Advanced techniques ensuring comfortable procedures",
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Affordable Treatments",
      description: "Quality dental care at competitive prices",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Thapa",
      text: "Best dental clinic in Butwal! Dr. Sita is very professional and caring. My teeth whitening results are amazing!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "I was scared of dentists until I visited Butwal Dental. They made me feel comfortable and the treatment was painless.",
      rating: 5,
    },
    {
      name: "Amit Gupta",
      text: "Got my braces here and the results are fantastic! The staff is friendly and the clinic is very clean.",
      rating: 5,
    },
  ];

  const whatsappMessage = "Hi, I'd like to book a dental appointment at Butwal Dental.";
  const whatsappNumber = "9771234567890";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Smile,<br />
                <span className="text-primary">Our Commitment</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Butwal's Trusted Dental Care — Serving smiles since 2018 with modern equipment, experienced doctors, and painless treatments.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-lg">
                    <i className="fab fa-whatsapp mr-2"></i>
                    Book Appointment
                  </Button>
                </a>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-lg">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={heroImage}
                alt="Happy patient at Butwal Dental"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Butwal Dental</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your smile deserves the best care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-3xl text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Doctors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert dental professionals dedicated to your care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <DoctorCard
              name="Dr. Sita Sharma"
              specialty="Cosmetic Dentistry & Whitening Specialist"
              description="Bringing smiles to Butwal since 2018. Expert in cosmetic procedures and smile makeovers."
              image={doctorFemale}
            />
            <DoctorCard
              name="Dr. Ramesh Khatri"
              specialty="Root Canal & Implant Specialist"
              description="Over 15 years of experience in advanced dental procedures and patient care."
              image={doctorMale}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Reviews</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from our satisfied patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src={familyDental}
              alt="Happy family at Butwal Dental"
              className="rounded-2xl shadow-card mb-8 w-full max-h-96 object-cover"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Best Smile?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Visit us near Kalikanagar, Butwal or book your appointment on WhatsApp today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="text-lg">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Book on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
