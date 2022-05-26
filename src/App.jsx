import "./App.css";
import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Answers from "./components/Answers";

// const answers = [
//   "It is certain",
//   "It is decidedly so",
//   "Without a doubt",
//   "Yes definitely",
//   "You may rely on it",
//   "Reply hazy, try again",
//   "Ask again later",
//   "Better not tell you now",
//   "Cannot predict now",
//   "Concentrate and ask again",
//   "Don't count on it",
//   "My reply is no",
//   "My sources say no",
//   "Outlook not so good",
//   "Very doubtful",
// ];

//should it be a function instead to create the random answer?
// let randomAnswer = answers[Math.floor(Math.random() * answers.length)];

function App() {
  const [answer, setAnswer] = useState("");

  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>
      <Answers />
      <img id="eightball" src="8ball-lrg.png" alt="Magic 8 Ball" />
      <Form setQuestion={Form.question} setAnswer={answer} />
    </div>
  );
}

export default App;
