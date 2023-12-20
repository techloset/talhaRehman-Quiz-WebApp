import React, { useEffect, useState } from 'react'
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../hooks/setResult';


const Question = ({onChecked}) => {

    const [checked, setChecked] = useState(undefined);
    const [isLoading, apiData, serverError , ] = useFetchQuestion();
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch();
    const {trace} = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result);
       
    useEffect(()=>{
     dispatch(updateResult({trace, checked}))
    }, [checked])


    function onSelectRadio(i) {
        setChecked(i)
        onChecked(i);
        dispatch(updateResult({ trace, checked}))
    };


    return (
        <>
            <div className='flex flex-col w-[79%] '>
                <h2 className='text-white text-2xl mx-auto mt-10'>{`Question ${questions?.id}`}</h2>
                <div className='mx-16'>
                    <h2 className='text-white text-2xl mt-7'>{questions?.question}</h2>
                    <ul className='mt-5' key={questions?.id}>
                        {
                            questions?.options.map((q, i) => (
                                <li className='' key={i}>
                                    <input
                                        type='radio'
                                        value={true}
                                        name='options'
                                        className=''
                                        id={`q${i}-question`}
                                        onChange={()=> onSelectRadio(i)} />
                                    <label htmlFor={`q${i}-question`} className='text-white '>{q}</label>
                                    <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                                    
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