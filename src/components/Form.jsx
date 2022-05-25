import React from "react";
import { handleSubmit } from "../App";

const Form = ({ question, setQuestion, setAnswer }) => {
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
            onClick={handleSubmit}
          >
            Ask
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
