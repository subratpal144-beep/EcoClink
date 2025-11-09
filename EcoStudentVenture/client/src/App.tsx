import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Fetch current visitor count
  const { data: visitorData } = useQuery<{ count: number }>({
    queryKey: ["/api/visitors"],
  });

  // Increment visitor count on mount
  const incrementMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/visitors/increment", {
        method: "POST",
      });
      return response.json();
    },
    onSuccess: (data) => {
      setVisitorCount(data.count);
      queryClient.invalidateQueries({ queryKey: ["/api/visitors"] });
    },
  });

  useEffect(() => {
    // Check if visitor has already been counted in this session
    const hasVisited = sessionStorage.getItem("ecoclink_visited");
    if (!hasVisited) {
      incrementMutation.mutate();
      sessionStorage.setItem("ecoclink_visited", "true");
    } else if (visitorData) {
      setVisitorCount(visitorData.count);
    }
  }, [visitorData]);

  const handleLearnMore = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero onLearnMore={handleLearnMore} />
      <About />
      <Products />
      <Contact />
      <Footer visitorCount={visitorCount} />
      <Toaster />
    </div>
  );
}

export default App;
