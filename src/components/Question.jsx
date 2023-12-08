import React, { useState } from 'react'

const Question = () => {

    const [checked ,setChecked] = useState(undefined);

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
            </li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Question