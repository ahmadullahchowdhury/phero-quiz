import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Quizzes = (props) => {
  console.log(props.data);
  return (
    <div className=" mx-auto bg-red-200  p-3 my-3 ">  
      <h1 className="p-2 m-2 text-3xl">{props.data.name}</h1>
      <img className="m-auto w-1/4" src={props.data.logo} alt={"logo"}></img>
      <p className="m-2">No of Quiz: {props.data.total}</p>
      <div>
        <Link className=" " to={`/${props.data.id}`}>
          <div className="w-2/3  flex justify-center mx-auto my-3 p-2  border-2 border-pink-400 rounded-lg">
            <button className="px-2 ">Start Practice</button>
            <ArrowRightCircleIcon className="h-6 w-6  text-blue-500" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Quizzes;
