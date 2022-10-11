import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQA from '../QuizQA/QuizQA';


const Quiz = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    return (
        <div className=' '>
            <p className='m-4 p-4 text-4xl'>Name of the Quiz: {quiz.data.name}</p>
            {quiz.data.questions.map(question => <QuizQA 
            key={question.id}
            quesAns = {question}
            ></QuizQA>
            )}
        </div>
    );
};

export default Quiz;