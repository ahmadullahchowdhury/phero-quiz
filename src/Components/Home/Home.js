import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizes';

const Home = () => {
    const quizzes = useLoaderData()
    const quizzesData = quizzes.data
    return (
        <div>
            <h1>All quizzes</h1>
            <div className='' >
            {
                quizzesData.map(data => 
                    <Quizzes 
                    key={data.id}
                    data= {data} ></Quizzes>
                )
            }
            </div>
        </div>
    );
};

export default Home;