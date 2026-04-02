import { useEffect } from "react";
import { HeroSection } from "./home/HeroSection";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
    </div>
  );
};
