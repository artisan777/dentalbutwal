import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <i className="fas fa-tooth text-primary text-xl"></i>
              </div>
              <span className="font-bold text-xl">Butwal Dental</span>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              Serving smiles in Butwal since 2018. Your trusted partner for comprehensive dental care with modern equipment and experienced doctors.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-smooth inline-flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-primary-foreground/90 text-sm">
                    Kalikanagar, Butwal, Nepal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-phone mt-1"></i>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+97771234567"
                    className="text-primary-foreground/90 text-sm hover:text-primary-foreground transition-smooth"
                  >
                    +977 71-234567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-envelope mt-1"></i>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:info@butwaldental.com"
                    className="text-primary-foreground/90 text-sm hover:text-primary-foreground transition-smooth"
                  >
                    info@butwaldental.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-clock mt-1"></i>
                <div>
                  <p className="font-medium">Clinic Hours</p>
                  <p className="text-primary-foreground/90 text-sm">Mon-Sat: 9AM-6PM</p>
                  <p className="text-primary-foreground/90 text-sm">Sun: 9AM-2PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/90 text-sm">
            © {new Date().getFullYear()} Butwal Dental. All rights reserved. | Designed with care for your smile.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
