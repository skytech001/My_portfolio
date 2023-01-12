import React, { useEffect } from "react";
import data from "./data";
import Faq from "./Faq";
import "./Faqs.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Faqs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions i usually get. Click to toggle the answer, and
        if you have additional questions, leave me a message in the contact
        section below
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {data.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
