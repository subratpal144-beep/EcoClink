import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/ChatGPT Image Nov 8, 2025, 03_13_37 PM_1762595033423.png";

interface HeroProps {
  onLearnMore: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="EcoClink Logo"
              className="h-32 md:h-40 lg:h-48 drop-shadow-lg"
              data-testid="img-hero-logo"
            />
          </div>

          <div className="space-y-4">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
              data-testid="text-hero-title"
            >
              EcoClink – From Waste to Wow!
            </h1>
            <p
              className="text-xl md:text-2xl text-primary font-medium"
              data-testid="text-hero-subtitle"
            >
              Crafting eco-friendly creation — from keychains and bags to many more thoughtful items.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-hero-description">
              At Ecolink, we breathe new life into leftover fabrics by transforming them into creative,
              sustainable products. From handmade keychains and purses to future lifestyle accessories,
              every piece reflects our belief that innovation and care can turn everyday waste into
              something truly meaningful.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={onLearnMore}
              className="rounded-full px-8 py-6 text-lg"
              data-testid="button-learn-more"
            >
              <Leaf className="w-5 h-5 mr-2" />
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("products");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full px-8 py-6 text-lg"
              data-testid="button-view-products"
            >
              View Products
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary" data-testid="text-stat-eco">100%</div>
              <p className="text-sm text-muted-foreground">Eco-Friendly Materials</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary" data-testid="text-stat-handmade">
                Handmade
              </div>
              <p className="text-sm text-muted-foreground">With Love & Care</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary" data-testid="text-stat-student">
                Student-Led
              </div>
              <p className="text-sm text-muted-foreground">Entrepreneurship Project</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Leaf className="w-6 h-6 text-primary opacity-50" />
      </div>
    </section>
  );
}
