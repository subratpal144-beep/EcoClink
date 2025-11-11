import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import product1 from "@assets/generated_images/Vintage_Paisley_Tote_Bag.jpg";
import product2 from "@assets/generated_images/Elegant_Floral_Fabric_Purse.jpg";
import product3 from "@assets/generated_images/Bohemian_earthy_fabric_keychain_b3c12157.png";

const products = [
  {
    name: "Eco Nature Tote Bag",
    description: "Stylish reusable tote bag crafted from quality recycled fabric featuring nature-inspired prints.",
    price: "₹120 - ₹150",
    image: product1,
  },
  {
    name: "Fabric Patch Purse",
    description: "Handmade purse from leftover textiles, blending color and sustainability in one eco piece.",
    price: "₹90 - ₹110",
    image: product2,
  },
  {
    name: "Bohemian Earth Keychain",
    description: "Rustic charm with mixed textile patterns and embroidered leaf detail in earthy tones.",
    price: "₹50 - ₹60",
    image: product3,
  },
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
