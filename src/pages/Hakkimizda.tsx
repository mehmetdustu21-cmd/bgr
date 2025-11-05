import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Hakkimizda = () => {
  const values = [
    {
      icon: Award,
      title: "Kalite",
      description: "Her ürünümüzde yüksek kalite standartlarını koruyoruz"
    },
    {
      icon: Users,
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin memnuniyeti bizim için en önemli değer"
    },
    {
      icon: Target,
      title: "Güvenilirlik",
      description: "Sözümüzü tutarak uzun vadeli ilişkiler kuruyoruz"
    }
  ];

  const features = [
    "15 yıllık sektör tecrübesi",
    "Yüksek kalite standartları",
    "Müşteri memnuniyeti odaklı hizmet",
    "Uygun fiyat garantisi",
    "Profesyonel montaj hizmeti",
    "Geniş ürün yelpazesi",
    "Hızlı teslimat",
    "Uzman danışmanlık"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BGR MOBİLYA olarak ofis mobilyaları sektöründe güvenilir ve kaliteli hizmet sunuyoruz
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                BGR MOBİLYA Kimdir?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                BGR MOBİLYA olarak, ofis mobilyaları sektöründe öncü firmalardan biriyiz. 
                Kaliteli ürünler, uygun fiyatlar ve müşteri memnuniyeti odaklı hizmet 
                anlayışımızla sektörde fark yaratıyoruz.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Modern ve ergonomik tasarımlarımızla, ofis alanlarınızı daha verimli ve 
                konforlu çalışma ortamlarına dönüştürüyoruz. Her proje için özel çözümler 
                sunarak, işletmenizin ihtiyaçlarına en uygun mobilya sistemlerini sağlıyoruz.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                15 yılı aşkın tecrübemiz ve uzman kadromuzla, küçük işletmelerden büyük 
                kurumlara kadar geniş bir müşteri portföyüne hizmet veriyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-accent/10 rounded-2xl p-8 border-2 border-accent/20">
                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-6 shadow-md">
                    <h3 className="text-4xl font-bold text-accent mb-2">500+</h3>
                    <p className="text-muted-foreground">Mutlu Müşteri</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-md">
                    <h3 className="text-4xl font-bold text-accent mb-2">1000+</h3>
                    <p className="text-muted-foreground">Tamamlanan Proje</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-md">
                    <h3 className="text-4xl font-bold text-accent mb-2">15</h3>
                    <p className="text-muted-foreground">Yıllık Tecrübe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ofis mobilyası ihtiyaçlarınız için bizimle iletişime geçin
          </p>
          <a href="tel:+905303095799">
            <Button variant="hero" size="lg">
              <Phone className="mr-2" size={20} />
              Hemen Arayın
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hakkimizda;
