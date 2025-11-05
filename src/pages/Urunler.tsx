import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Urunler = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800",
      title: "Ofis Koltukları",
      description: "Ergonomik ve rahat ofis koltukları. Çalışma verimliliğinizi artırın.",
      features: ["Ergonomik tasarım", "Ayarlanabilir yükseklik", "Lomber destek", "Premium kumaş"]
    },
    {
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800",
      title: "Çalışma Masaları",
      description: "Modern ve fonksiyonel çalışma masaları. Her boyut ve tasarımda.",
      features: ["Dayanıklı malzeme", "Geniş çalışma alanı", "Kablo yönetimi", "Özel ölçü üretim"]
    },
    {
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800",
      title: "Dolap Sistemleri",
      description: "İhtiyaçlarınıza uygun dolap ve raf sistemleri.",
      features: ["Geniş saklama alanı", "Modüler tasarım", "Çekmece sistemleri", "Kilitli bölmeler"]
    },
    {
      image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=800",
      title: "Toplantı Masaları",
      description: "Profesyonel toplantı masaları ve sandalyeleri.",
      features: ["Farklı kapasiteler", "Modern tasarım", "Kablo çıkışları", "Toplantı odası çözümleri"]
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
      title: "Resepsiyon Masaları",
      description: "Şık ve fonksiyonel resepsiyon masaları.",
      features: ["Modern tasarım", "Dayanıklı malzeme", "Farklı boyutlar", "Özelleştirilebilir"]
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800",
      title: "Çalışma İstasyonları",
      description: "Açık ofis konseptine uygun çalışma istasyonları.",
      features: ["Modüler sistem", "Kablo yönetimi", "Gizlilik panelleri", "Ergonomik tasarım"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ürünlerimiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofis mobilyalarında geniş ürün yelpazesi ile hizmetinizdeyiz
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+905303095799" className="block mt-6">
                    <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground">
                      Fiyat Al
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Neden BGR MOBİLYA?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Kaliteli Ürünler</h3>
              <p className="text-muted-foreground">Uzun ömürlü ve dayanıklı malzemeler</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Uygun Fiyat</h3>
              <p className="text-muted-foreground">Rekabetçi fiyatlarla en iyi hizmet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Hızlı Teslimat</h3>
              <p className="text-muted-foreground">Türkiye geneline hızlı kargo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Profesyonel Montaj</h3>
              <p className="text-muted-foreground">Uzman ekip tarafından kurulum</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ürünlerimiz Hakkında Bilgi Alın
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun ürünleri önermek için hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905303095799">
              <Button variant="hero" size="lg">
                <Phone className="mr-2" size={20} />
                0 (530) 309 57 99
              </Button>
            </a>
            <Link to="/iletisim">
              <Button variant="outline" size="lg">
                İletişim Formu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Urunler;
