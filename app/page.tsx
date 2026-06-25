import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SnakeGame from "@/components/sections/SnakeGame";
import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SnakeGame />
      <SocialProof />
      <Features />
      <Services />
      <HowWeWork />
      <Pricing />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
