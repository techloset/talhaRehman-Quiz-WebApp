import React, { useEffect, useState } from 'react'
import data from './data';
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { useSelector } from 'react-redux';

const Question = () => {

    const [checked, setChecked] = useState(undefined);
    const [isLoading, apiData, serverError , ] = useFetchQuestion();
    const question = data[0];
    const  questions = useSelector(state => state.questions.queue)

    useEffect(()=>{
       console.log(questions.queue)
    })

    useEffect(() => {
        console.log(isLoading);
        // console.log(apiData);
        // console.log(serverError);
    })

    function onSelectRadio() {
        setChecked()
        console.log("onSelectRadio")
    };

    // if(isLoading) return <h3 className='text-white mt-20 text-3xl mb-20 ' >Loading...</h3>
    // if(serverError) return <h3 className='text-white '>{serverError || "Unknow error"}</h3>
    return (
        <>
            <div className='flex flex-col w-[79%] '>
                <h2 className='text-white text-2xl mx-auto mt-10'>{`Question ${question.id}`}</h2>
                <div className='mx-16'>
                    <h2 className='text-white mt-3'>{question.question}</h2>
                    <ul className='mt-5' key={question.id}>
                        {
                            question.options.map((q, i) => (
                                <li className='flex gap-3 mt-3 items-center' key={i}>
                                    <input
                                        type='radio'
                                        value={true}
                                        name='options'
                                        id={`q${i}-question`}
                                        onChange={onSelectRadio} />
                                    <label htmlFor={`q${i}-question`} className='text-white'>{q}</label>
                                    <div className='check checked'></div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Question