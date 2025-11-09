import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      onLearnMore={() => console.log("Learn more clicked")}
    />
  );
}
