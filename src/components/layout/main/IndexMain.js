"use client";
import About1 from "@/components/sections/about/About1";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Contact2 from "@/components/sections/contact/Contact2";
import Hero from "@/components/sections/heros/Hero";
import Portfolio1 from "@/components/sections/portfolio/Portfolio1";
import Resume1 from "@/components/sections/resume/Resume1";
import Skills1 from "@/components/sections/skills/Skills1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";

const IndexMain = () => {
  return (
    <main>
      <Hero />
      <About1 />
      <Portfolio1 />
      <Resume1 />
      <Skills1 />
      <Testimonials1 />
      <Blogs1 />
      <Contact2 />
    </main>
  );
};

export default IndexMain;
