import React, { useEffect, useState } from 'react'
import data from './data';

const Question = () => {

    const [checked ,setChecked] = useState(undefined);

    const question = data[0]
    useEffect(()=>{
        console.log(question);
    })

    function onSelectRadio(){
        setChecked()
        console.log("onSelectRadio")
    };
  return (
   <>
   <div>
    <h2>Question</h2>
    <div>
        <h2>Sample Question 1</h2>
        <ul>
            <li>
                <input
                type='radio'
                value={true}
                name='options'
                id='q1-option'
                onChange={onSelectRadio}/>
                <label htmlFor="q1-option"></label>
                <div className='check'></div>
            </li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Question