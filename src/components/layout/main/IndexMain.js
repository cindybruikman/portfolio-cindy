"use client";
import Hero from "@/components/sections/heros/Hero";
import Portfolio1 from "@/components/sections/portfolio/Portfolio1.js";
import About1 from "@/components/sections/about/About1.js";
import Contact2 from "@/components/sections/contact/Contact2";

const IndexMain = () => {
  return (
    <main>
      <Hero />
      <About1 />
      <Portfolio1 />
      <Contact2 />
    </main>
  );
};

export default IndexMain;
