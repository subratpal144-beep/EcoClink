import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import product1 from "@assets/generated_images/EcoCloud Lounge Bean Bag.webp";
import product2 from "@assets/generated_images/ReWeave Heritage Tote.png";
import product3 from "@assets/generated_images/UrbanLoop Eco Tote.jpg";
import product4 from "@assets/generated_images/Bohemian_earthy_fabric_keychain_b3c12157.png";
import product5 from "@assets/generated_images/Keychain.jpg";
const products = [
  {
    name: "EcoCloud Lounge Bean Bag",
    description: "A lightweight, ultra-comfortable bean bag hand-crafted from repurposed fabric. Designed for modern homes and made entirely from leftover textile material, EcoCloud brings comfort without harming the planet.",
    price: "₹500",
    image: product1,
  },
  {
    name: "ReWeave Heritage Tote",
    description: "A beautiful hand-woven tote bag made using cut-off cloth scraps braided into a stylish, durable design. Perfect for daily use, books, or quick outings. Every bag has a unique pattern—no two pieces are alike.",
    price: "₹150",
    image: product2,
  },
  {
    name: "UrbanLoop Eco Tote",
    description: "A minimalist black tote made from recycled fabric yarn. Strong, stretchable and stylish—ideal for college, shopping or everyday carry. Crafted entirely from textile waste, turning leftover material into fashion..",
    price: "₹100",
    image: product3,
  },
  {
    name: "Bohemian Earth Keychain",
    description: "Rustic charm with mixed textile patterns and embroidered leaf detail in earthy tones.",
    price: "₹60",
    image: product4,
  }, 
  {
   name: "Bohemian Earth Keychain",
    description: "Rustic charm with mixed textile patterns and embroidered leaf detail in earthy tones.",
    price: "₹40",
    image: product5,
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-products-title">
            Our Products
          </h2>
          <p className="text-lg text-primary font-medium italic" data-testid="text-products-tagline">
            Handcrafted with care from recycled fabric
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Each creation is distinct, designed from repurposed fabric to reduce waste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-product-${index}`}
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-testid={`img-product-${index}`}
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Eco-Friendly
                </Badge>
              </div>
              <div className="p-6 space-y-3">
                <h3
                  className="text-xl font-semibold text-foreground"
                  data-testid={`text-product-name-${index}`}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-product-description-${index}`}>
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span
                    className="text-lg font-bold text-primary"
                    data-testid={`text-product-price-${index}`}
                  >
                    {product.price}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    Handmade
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Each purchase helps reduce textile waste and supports student entrepreneurship
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm">Unique Designs</Badge>
            <Badge variant="outline" className="text-sm">Sustainable Materials</Badge>
            <Badge variant="outline" className="text-sm">Affordable Prices</Badge>
            <Badge variant="outline" className="text-sm">Student Made</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
