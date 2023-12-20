import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { setUserId } from '../../redux/result_reducer'
import { useDispatch } from 'react-redux'

const Home = () => {
    
    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-7 mt-20'>
                <div className=' border-[4px] border-[#0DFF92] p-5 w-[40%] flex justify-center'>
                    <h1 className='text-2xl text-white'>Quiz Web App</h1>
                </div>
                <div>
                    <ol className='text-lg text-[#cecece] list-decimal'>
                        <li>You will be asked 10 questions one after another.</li>
                        <li>10 points is awarded for the correct answer.</li>
                        <li>Each question has three options. You can choose only one options.</li>
                        <li>You can review and change answers before the quiz finish.</li>
                        <li>The result will be declared at the end of the quiz.</li>
                    </ol>
                </div>
                <div>
                    <form id="form">
                        <input ref={inputRef} className="p-3 w-96 " type="text" placeholder='Username*' />
                    </form>
                </div>
                <div>
                    <div className='start bg-[#faff5a] py-2 rounded-lg'>
                        <Link className='btn text-[#202020] p-6 ' to={'quiz'} onClick={startQuiz} >Start Quiz</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home