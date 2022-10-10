import React from 'react';


const QuizQA = (props) => {
    
    function handleClick(event){
        if(event.target.innerText === props.quesAns.correctAnswer ){

            alert('Yesss, you are right')
        }else{
            alert('wrong answer')
        }
    }
    return (
        <div>
            <h1>{props.quesAns.question}</h1>
            {

            props.quesAns.options.map((option, idx) => <button onClick={  handleClick} className='m-2 p-2 border-2 border-pink-400 rounded-lg' key={idx} >{option}</button>)
            }
            {/* <p>{props.quesAns.options}</p> */}
            {/* <input type='radio'> {props.quesAns.options}</input> */}
        </div>
    );
};

export default QuizQA;