import React from "react";
import { useThemeContext } from "./context/theme-context";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Faqs from "./sections/faqs/Faqs";
import FloatingNav from "./sections/floatingNav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import NavBar from "./sections/navbar/NavBar";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";
import Theme from "./theme/Theme";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const mainRef = useRef();
  const { themeState } = useThemeContext();

  useEffect(() => {
    let Yposition = window.pageYOffset;
    //this gets y position and setshowfloating nav.
    const onScroll = () => {
      if (Yposition !== window.pageYOffset) {
        setShowFloatingNav(true);
        Yposition = window.pageYOffset;
      } else {
        setShowFloatingNav(false);
      }
    };
    setInterval(onScroll, 4000); //checks yposition every 4 sec by running onscroll

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
