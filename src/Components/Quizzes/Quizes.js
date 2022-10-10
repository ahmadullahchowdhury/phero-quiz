import React from 'react';

const Quizzes = (props) => {
    console.log(props.data)
    return (
        <div className='w-1/2 m-auto bg-red-200   '>
           <h1 className='p-2 m-2 text-3xl'>{props.data.name}</h1>
           <img className='m-auto w-1/4' src={props.data.logo} alt={'logo'} ></img>
           <p className='m-2'>No of Quiz: {props.data.total}</p>
           <button className=' m-2 p-2 border-2 border-pink-400 rounded-lg '>Start Practice</button>
        </div>
    );
};

export default Quizzes;