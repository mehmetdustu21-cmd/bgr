import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Anasayfa = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Kaliteli Ofis Mobilyaları ile İşinize Değer Katın
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              BGR MOBİLYA olarak, modern ve fonksiyonel ofis mobilyaları ile iş alanlarınızı dönüştürüyoruz. 
              Ergonomik tasarımlar ve yüksek kalite standartlarıyla yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/urunler">
                <Button variant="hero" size="lg">
                  Ürünlerimizi Keşfedin
                </Button>
              </Link>
              <a href="tel:+905303095799">
                <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/20">
                  Hemen Arayın
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Yıllık Tecrübe</h3>
              <p className="text-muted-foreground">Sektörde uzman ekibimizle hizmet veriyoruz</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mutlu Müşteri</h3>
              <p className="text-muted-foreground">Müşteri memnuniyeti önceliğimiz</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">1000+</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tamamlanan Proje</h3>
              <p className="text-muted-foreground">Başarıyla teslim edilen projeler</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kurumsal İhtiyaçlarınız İçin Bize Ulaşın
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun çözümleri sunmak için hazır
          </p>
          <a href="tel:+905303095799">
            <Button variant="hero" size="lg">
              <Phone className="mr-2" size={20} />
              0 (530) 309 57 99
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Anasayfa;
