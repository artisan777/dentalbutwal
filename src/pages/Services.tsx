import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: "fas fa-broom",
      title: "Teeth Cleaning",
      description: "Professional deep cleaning removes plaque and tartar buildup, preventing cavities and gum disease. Our hygienists use gentle techniques and advanced tools for a thorough, comfortable cleaning experience.",
    },
    {
      icon: "fas fa-star",
      title: "Teeth Whitening",
      description: "Get a brighter, whiter smile with our professional whitening treatments. We use safe, effective bleaching agents that can lighten teeth by several shades in just one session. Perfect for special occasions or everyday confidence.",
    },
    {
      icon: "fas fa-tooth",
      title: "Braces & Aligners",
      description: "Straighten your teeth with traditional metal braces or nearly invisible clear aligners. We create personalized treatment plans to correct misalignment, gaps, and bite issues for a perfect smile.",
    },
    {
      icon: "fas fa-heartbeat",
      title: "Root Canal Treatment",
      description: "Save damaged or infected teeth with our painless root canal procedures. Using modern techniques and local anesthesia, we remove infection and restore tooth function without discomfort.",
    },
    {
      icon: "fas fa-cog",
      title: "Dental Implants",
      description: "Replace missing teeth permanently with dental implants. These titanium posts fuse with your jawbone to provide a stable foundation for natural-looking replacement teeth that last a lifetime.",
    },
    {
      icon: "fas fa-child",
      title: "Child Dentistry",
      description: "Gentle, specialized dental care for children of all ages. We create a fun, stress-free environment to help kids develop healthy dental habits. Fluoride treatments, sealants, and cavity prevention.",
    },
    {
      icon: "fas fa-times-circle",
      title: "Tooth Extraction",
      description: "Safe, painless tooth removal when necessary. We use local anesthesia and gentle techniques for wisdom teeth, damaged teeth, or overcrowding situations.",
    },
    {
      icon: "fas fa-crown",
      title: "Dental Crowns & Bridges",
      description: "Restore damaged or missing teeth with custom crowns and bridges. Made from high-quality materials, they look and function like natural teeth.",
    },
    {
      icon: "fas fa-smile-beam",
      title: "Smile Makeovers",
      description: "Complete cosmetic transformation combining multiple procedures — whitening, veneers, bonding, and contouring — to create your dream smile.",
    },
    {
      icon: "fas fa-hand-sparkles",
      title: "Gum Treatment",
      description: "Treat gum disease and inflammation with deep cleaning, scaling, and root planing. We help restore gum health to prevent tooth loss.",
    },
    {
      icon: "fas fa-tooth",
      title: "Veneers",
      description: "Thin, custom-made shells bonded to the front of your teeth to correct chips, stains, gaps, or misalignment for a flawless smile.",
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Dental Checkups",
      description: "Regular examinations to detect problems early. We check for cavities, gum disease, oral cancer, and other issues. Includes X-rays and professional advice.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Dental Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive dental care for the whole family. From routine checkups to advanced cosmetic procedures, we offer everything you need for a healthy, beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a consultation with our experts. We'll examine your teeth, discuss your concerns, and recommend the best treatment plan for your unique needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/9771234567890?text=Hi, I'd like to book a dental consultation at Butwal Dental."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-semibold transition-smooth text-lg shadow-card hover:shadow-lg">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Book Free Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
