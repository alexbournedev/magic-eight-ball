import React, { useState } from "react";
import Answers from "./Answers";

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

let randomAnswer = answers[Math.floor(Math.random() * answers.length)];

const Form = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

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
            onClick={() => setAnswer(randomAnswer)}
          >
            Ask
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
