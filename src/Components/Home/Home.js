import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizes';
import './Home.css'


const Home = () => {
    const quizzes = useLoaderData()
    const quizzesData = quizzes.data
    return (
        <div>
            <div className="">
            <h1 className='text-3xl mt-5 font-semi-bold '>All quizzes</h1>
            <h1 className='mt-5'>Welcome to Phero Quiz. Here you can test your Programming Skill by participating in Quiz.</h1>
            <h1 className='mt-5'>You will get the feedback immediately if you click a Quiz optin</h1>

            <img className='mx-auto md:w-1/3' src='banner.jpg' alt=''/>
            </div>
            <div className=' w-10/12 border-2 m-auto md:grid grid-cols-4 gap-2' >
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