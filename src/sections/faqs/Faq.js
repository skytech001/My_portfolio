import React, { useState } from "react";
import Card from "../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Faq = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Card className="faq" onClick={() => setShowAnswer((prev) => !prev)}>
      <div>
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div>{showAnswer && <p className="faq__answer">{faq.answer}</p>}</div>
    </Card>
  );
};

export default Faq;
