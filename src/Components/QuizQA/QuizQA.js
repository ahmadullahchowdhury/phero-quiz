import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQA = (props) => {
  const [open, setOpen] = useState();
  function handleClick(event) {
    if (event.target.innerText === props.quesAns.correctAnswer) {
      
      setOpen(true);
      toast.success("Yes, you're right", { autoClose: 1000 })
    } else {
      toast.error("Oops, you're wrong", { autoClose: 1000 })
      setOpen(false);
    }
}
const correctAns = () => {
    toast.info(props.quesAns.correctAnswer, { autoClose: 1000 })
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
        
      ))
      }
      <ToastContainer autoClose={1000}  />
      {/* <p>{props.quesAns.options}</p> */}
      {/* <input type='radio'> {props.quesAns.options}</input> */}
    </div>
  );
};

export default QuizQA;
