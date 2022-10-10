import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Quiz = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    return (
        <div>
            <h1>Inside Quiz</h1>
            <p className='m-4'>Name of the Quiz: {quiz.data.name}</p>
            {quiz.data.questions.map(question => <p>{question.question}</p> 
            )}
        </div>
    );
};

export default Quiz;