import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQA from '../QuizQA/QuizQA';


const Quiz = () => {
    const quiz = useLoaderData()
    return (
        <div className=''>
            <p className='m-4 p-4 md:text-3xl '>Name of the Quiz Test: <strong>{quiz.data.name}</strong> </p>
            {quiz.data.questions.map(question => <QuizQA 
            key={question.id}
            quesAns = {question}
            ></QuizQA>
            )}
        </div>
    );
};

export default Quiz;