import { useState } from "react";
import { X } from "lucide-react";
import galleryWhitening from "@/assets/gallery-whitening.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import familyDental from "@/assets/family-dental.jpg";
import dentalTools from "@/assets/dental-tools.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import heroImage from "@/assets/hero-image.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: galleryWhitening,
      alt: "Before and after teeth whitening results",
      category: "Before & After",
    },
    {
      src: galleryInterior,
      alt: "Modern dental treatment room",
      category: "Clinic Interior",
    },
    {
      src: familyDental,
      alt: "Happy family with healthy smiles",
      category: "Happy Patients",
    },
    {
      src: dentalTools,
      alt: "Professional dental equipment",
      category: "Equipment",
    },
    {
      src: clinicExterior,
      alt: "Butwal Dental clinic building",
      category: "Clinic Exterior",
    },
    {
      src: heroImage,
      alt: "Satisfied patient after treatment",
      category: "Happy Patients",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Take a look at our state-of-the-art facilities, amazing treatment results, and the smiles we've helped create over the years.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-card transition-smooth cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold text-lg">{image.category}</p>
                    <p className="text-white/90 text-sm">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <i className="fas fa-expand-alt text-primary"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Full size view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of satisfied patients who trust Butwal Dental for their dental care. Book your appointment today!
            </p>
            <a
              href="https://wa.me/9771234567890?text=Hi, I'd like to book a dental appointment at Butwal Dental."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-semibold transition-smooth text-lg shadow-card hover:shadow-lg">
                <i className="fab fa-whatsapp mr-2"></i>
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
