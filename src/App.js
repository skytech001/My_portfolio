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

const App = () => {
  const { themeState } = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
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
      {/* <FloatingNav /> */}
    </main>
  );
};

export default App;
