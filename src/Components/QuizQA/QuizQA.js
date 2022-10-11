import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizQA = (props) => {
  const [open, setOpen] = useState();
  function handleClick(event) {
    if (event.target.innerText === props.quesAns.correctAnswer) {
      alert("Yesss, you are right");
      setOpen(true);
    } else {
      alert("wrong answer");
      setOpen(false);
    }
}
const correctAns = () => {
   alert(props.quesAns.correctAnswer)
}
  return (
    <div className=" w-4/5 m-auto  border-2 rounded-md bg-teal-700 p-3 ">
      <div className="flex  content-center">
        <h1 className="m-3 p-2 w-11/12 text-bold text-white md:text-3xl">{props.quesAns.question}</h1>
        <EyeIcon onClick={correctAns} className="h-5 w-5 m-2" />
      </div>
      {props.quesAns.options.map((option, idx) => (
        <button
          onClick={handleClick}
          className={`m-1 px-3 py-1 text-white border-2 border-blue-gray-900 rounded-lg ${
            open ? "bg-emerald-600" : "bg-cool-gray-400"
          }`}
          key={idx}
        >
          {option}
        </button>
      ))}
      {/* <p>{props.quesAns.options}</p> */}
      {/* <input type='radio'> {props.quesAns.options}</input> */}
    </div>
  );
};

export default QuizQA;
