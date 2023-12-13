import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import Question from '../../components/Question'
import { useSelector, useDispatch } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../../hooks/FetchQuestion'

const Quiz = () => {

     const state = useSelector(state => state)
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(queue.length)
    })
    //  const state = useSelector(state => state)

    useEffect(() => {
        // console.log(state)
    })

    function onNext() {
        console.log("Next key pressed")

        if (trace < queue.length) {
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());
        }
    };
    function onPrev() {
        console.log("Prev key pressed")
        if (trace > 0) {
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    };
    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                <div className=' border-[4px] border-[#0DFF92] p-5 w-[40%] flex justify-center'>
                    <h1 className='text-2xl text-white'>Quiz Web App</h1>
                </div>
                <Question />
                <div className='flex justify-between w-[70%] mt-8 '>
                    <button className='text-white bg-yellow-400 p-2 w-20 rounded-lg' onClick={onPrev}>Prev</button>
                    <button className='text-white bg-green-600 p-2 w-20 rounded-lg' onClick={onNext}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Quiz