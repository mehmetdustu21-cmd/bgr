import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Iletisim = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            İletişim
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sorularınız için bize ulaşın. Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground text-2xl">İletişim Formu</CardTitle>
                <p className="text-muted-foreground">
                  Formu doldurun, size en kısa sürede dönelim
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Adınız Soyadınız
                    </label>
                    <Input placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-posta Adresiniz
                    </label>
                    <Input type="email" placeholder="ornek@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefon Numaranız
                    </label>
                    <Input type="tel" placeholder="05XX XXX XX XX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mesajınız
                    </label>
                    <Textarea placeholder="Lütfen ihtiyaçlarınızı detaylı olarak belirtin..." rows={5} />
                  </div>
                  <Button variant="hero" className="w-full" size="lg">
                    Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border hover:border-accent transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Telefon</h3>
                      <a href="tel:+905303095799" className="text-muted-foreground hover:text-accent transition-colors block mb-1">
                        0 (530) 309 57 99
                      </a>
                      <p className="text-sm text-muted-foreground">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">E-posta</h3>
                      <a href="mailto:info@bgrmobiya.com" className="text-muted-foreground hover:text-accent transition-colors block mb-1">
                        info@bgrmobiya.com
                      </a>
                      <a href="mailto:destek@bgrmobiya.com" className="text-muted-foreground hover:text-accent transition-colors block">
                        destek@bgrmobiya.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Adres</h3>
                      <p className="text-muted-foreground">
                        Seyitnizam Mah. Seyitnizam Cad.<br />
                        No: 53-59 D Zeytinburnu<br />
                        İstanbul, Türkiye
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Çalışma Saatleri</h3>
                      <p className="text-muted-foreground mb-1">Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p className="text-muted-foreground mb-1">Cumartesi: 09:00 - 14:00</p>
                      <p className="text-muted-foreground">Pazar: Kapalı</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hemen Arayın, Hızlı Teklif Alın
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ofis mobilyası ihtiyaçlarınız için bizi arayın, size özel fiyat teklifi sunalım
          </p>
          <a href="tel:+905303095799">
            <Button variant="hero" size="lg" className="text-lg px-12">
              <Phone className="mr-2" size={24} />
              0 (530) 309 57 99
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Iletisim;
