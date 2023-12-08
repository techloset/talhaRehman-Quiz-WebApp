import React from 'react'
import { Link } from "react-router-dom"
import Question from '../../components/Question'

const Quiz = () => {
    function onNext(){
        console.log("Next")
    };
    function onPrev(){
        console.log("Prev")
    };
    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                <div className=' border-[4px] border-[#0DFF92] p-5 w-[40%] flex justify-center'>
                    <h1 className='text-2xl text-white'>Quiz Web App</h1>
                </div>
                <Question/>
                <div className='flex justify-between w-[40%] mt-8 '>
                    <button className='text-white bg-yellow-400 p-2 w-20 rounded-lg' onClick={onPrev}>Prev</button>
                    <button className='text-white bg-green-600 p-2 w-20 rounded-lg'onClick={onNext}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Quiz