import React from "react";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Faq from "./sections/faqs/Faq";
import FloatingNav from "./sections/floatingNav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import NavBar from "./sections/navbar/NavBar";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";

const app = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
};

export default app;
