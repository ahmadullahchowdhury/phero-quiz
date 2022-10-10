import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQA from '../QuizQA/QuizQA';


const Quiz = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    return (
        <div>
            <h1>Inside Quiz</h1>
            <p className='m-4'>Name of the Quiz: {quiz.data.name}</p>
            {quiz.data.questions.map(question => <QuizQA 
            key={question.id}
            quesAns = {question}
            ></QuizQA>
            )}
        </div>
    );
};

export default Quiz;