import { Heart, Leaf, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Subrat Pal", initials: "SP" },
  { name: "Krishika", initials: "K" },
  { name: "Shadiya Khan", initials: "SK" },
  { name: "Prachi", initials: "P" },
  { name: "Saloni", initials: "S" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-about-title">
            About EcoClink
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A student-led initiative giving waste new purpose — from keychains and bags to creative accessories

          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold" data-testid="text-who-we-are">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission  is to  transform leftover fabrics into useful, eco-friendly creations - from
              keychains and bags to many more sustainable products. Each design helps cut down textile
              waste and shows that creativity and environmental care can go hand in hand.   
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold" data-testid="text-our-mission">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              We aim to make eco-friendly products that help reduce textile waste. Every piece of
              leftover fabric we transform into a keychain is one less piece contributing to
              landfills. Through our work, we're proving that sustainability and style can go hand
              in hand.
            </p>
          </Card>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-center" data-testid="text-meet-team">
            Meet Our Team
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3"
                data-testid={`card-team-member-${index}`}
              >
                <Avatar className="w-20 h-20 border-2 border-primary">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <p className="text-center font-medium text-sm" data-testid={`text-member-name-${index}`}>
                  {member.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground italic">
            And more amazing team members joining us soon!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Handcrafted with Care</h4>
            <p className="text-sm text-muted-foreground">
              Every keychain is carefully made by hand with attention to detail
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-lg">100% Sustainable</h4>
            <p className="text-sm text-muted-foreground">
              Using only recycled and leftover fabric materials
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Student Entrepreneurship</h4>
            <p className="text-sm text-muted-foreground">
              Learning business skills while making a difference
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
