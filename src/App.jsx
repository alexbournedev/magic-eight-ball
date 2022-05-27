import "./App.css";
import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const fetchAnswer = async (question) => {
  let params = encodeURIComponent(question);
  let uri = "https://8ball.delegator.com/magic/JSON/" + params;
  const response = await fetch(uri);
  const json = await response.json();
  return json.magic.answer;
};

function App() {
  const controls = useAnimation();
  const answerRef = useRef(-1);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = async (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    controls.start({ x: [0, 75, -75, 50, -25, 0] });
    setQuestion("");
    answerRef.value = await fetchAnswer(question);
  };

  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>

      <div>
        <form onSubmit={getAnswer}>
          <div className="form-group">
            <input
              id="questionInput"
              className="form-control"
              type="text"
              placeholder="Type your question, then click the Magic 8 Ball"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <motion.button
            animate={controls}
            onAnimationComplete={() => setAnswer(answerRef.value)}
            type="submit"
            id="submit"
          >
            <img id="eightball" src="8ball-lrg.png" alt="Magic 8 Ball" />
          </motion.button>
        </form>
        <h2 className="eight-ball-reply">{answer}</h2>
      </div>
    </div>
  );
}

export default App;
