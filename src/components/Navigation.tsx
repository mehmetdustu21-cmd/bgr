import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Anasayfa" },
    { to: "/hakkimizda", label: "Hakkımızda" },
    { to: "/urunler", label: "Ürünler" },
    { to: "/iletisim", label: "İletişim" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-3 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+905303095799" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={16} />
              <span>0 (530) 309 57 99</span>
            </a>
            <a href="mailto:info@bgrmobiya.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={16} />
              <span>info@bgrmobiya.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span className="hidden sm:inline">İstanbul, Türkiye</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.jpeg" 
                alt="BGR Mobilya Logo" 
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors font-medium ${
                    location.pathname === link.to
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+905303095799">
                <Button variant="hero" size="sm">
                  İletişime Geçin
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`transition-colors font-medium py-2 ${
                      location.pathname === link.to
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a href="tel:+905303095799" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full">
                    İletişime Geçin
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
