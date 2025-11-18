import { Heart, Leaf } from "lucide-react";
import logo from "@assets/ReFibre.png";

interface FooterProps {
  visitorCount?: number;
}

export default function Footer({ visitorCount = 0 }: FooterProps) {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="EcoClink Logo" className="h-12" data-testid="img-footer-logo" />
            <p className="text-sm text-muted-foreground">
              Transforming fabric scraps into handmade treasures
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-home"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-about"
              >
                About Us
              </button>
              <button
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-products"
              >
                Products
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Values</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="w-4 h-4 text-primary" />
                <span>100% Sustainable</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-primary" />
                <span>Handmade with Care</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="w-4 h-4 text-primary" />
                <span>Student Entrepreneurship</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 space-y-4">
          <p className="text-center text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 EcoClink – Student Entrepreneurship Project
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Dr. B.R. Ambedkar School of Excellence, Sec-17, Rohini
          </p>
          {visitorCount > 0 && (
            <p className="text-center text-xs text-muted-foreground" data-testid="text-visitor-count">
              Visitors: {visitorCount.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
