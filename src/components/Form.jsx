import React, { useState } from "react";
import Answers from "./Answers";

export const handleSubmit = (e) => {
  e.preventDefault();
  let input = document.getElementById("questionInput");

  if (input !== "") {
    return <Answers />;
  } else {
    return <Form />;
  }
};

const Form = () => {
  const [question, setQuestion] = useState("");

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            id="questionInput"
            className="form-control"
            type="text"
            placeholder="Type your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></input>
          <button
            id="submit"
            className="btn btn-primary form-control"
            onClick={() => handleSubmit}
          >
            Ask
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
