import "./App.css";
import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Answers from "./components/Answers";

function App() {
  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>
      <Answers />
      <img id="eightball" src="8ball-lrg.png" alt="Magic 8 Ball" />
      <Form setQuestion={Form.question} setAnswer={Form.answer} />
    </div>
  );
}

export default App;
