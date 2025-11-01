import DoctorCard from "@/components/DoctorCard";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import doctorFemale from "@/assets/doctor-female.jpg";
import doctorMale from "@/assets/doctor-male.jpg";
import dentalTools from "@/assets/dental-tools.jpg";

const About = () => {
  const values = [
    {
      icon: "fas fa-heart",
      title: "Comfort",
      description: "We prioritize your comfort with gentle care and a welcoming environment.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Hygiene",
      description: "Maintaining the highest standards of cleanliness and sterilization.",
    },
    {
      icon: "fas fa-hands-helping",
      title: "Care",
      description: "Compassionate dental care tailored to each patient's unique needs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">Butwal Dental</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018, Butwal Dental has been serving the community of Butwal with compassionate, comprehensive dental care. Our mission is simple: to provide world-class dental treatments in a warm, welcoming environment.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every smile tells a story, and we're honored to be part of yours. With state-of-the-art equipment, experienced professionals, and a commitment to painless procedures, we've become Butwal's most trusted dental clinic.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Expert Staff</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={clinicExterior}
                alt="Butwal Dental Clinic Exterior"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Promise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to delivering exceptional dental care with these core values
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-8 text-center shadow-soft hover:shadow-card transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-4xl text-primary`}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated dental professionals bring years of experience and passion to every patient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <DoctorCard
              name="Dr. Sita Sharma"
              specialty="Cosmetic Dentistry & Whitening Specialist"
              description="Dr. Sharma graduated from B.P. Koirala Institute of Health Sciences with honors. She specializes in cosmetic dentistry, teeth whitening, and smile makeovers. Her gentle approach and attention to detail have made her a favorite among patients."
              image={doctorFemale}
            />
            <DoctorCard
              name="Dr. Ramesh Khatri"
              specialty="Root Canal & Implant Specialist"
              description="With over 15 years of experience, Dr. Khatri is an expert in endodontics and dental implants. He trained at leading dental institutions and brings advanced techniques to Butwal. Known for his painless root canal procedures."
              image={doctorMale}
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <img
              src={dentalTools}
              alt="Professional dental equipment"
              className="rounded-2xl shadow-card w-full"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Butwal Dental was born from a simple vision: to bring world-class dental care to the heart of Butwal. In 2018, Dr. Sita Sharma and Dr. Ramesh Khatri joined forces to create a dental clinic that would change the way people think about dental visits.
              </p>
              <p className="text-muted-foreground mb-4">
                They had both witnessed how fear and anxiety kept people from seeking necessary dental care. They knew that with the right approach — combining modern technology, skilled expertise, and genuine compassion — they could create an environment where patients would actually look forward to their dental appointments.
              </p>
              <p className="text-muted-foreground mb-4">
                Starting with a small clinic near Kalikanagar, Butwal Dental quickly became known for its painless procedures, friendly staff, and outstanding results. Word spread through families and friends, and soon the clinic was serving hundreds of satisfied patients from Butwal and neighboring communities.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, Butwal Dental continues to grow, but our core values remain unchanged: every patient deserves comfort, respect, and the highest quality dental care. We invest in the latest technology, continuously train our staff, and never compromise on hygiene or patient safety.
              </p>
              <p className="text-muted-foreground font-semibold">
                Whether you need a routine cleaning, cosmetic enhancement, or complex dental work, we're here to give you the smile you deserve — with care, compassion, and expertise you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
