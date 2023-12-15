import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from '../../components/ResultTable'
import { useDispatch } from 'react-redux'
import { resetAllAction } from '../../redux/question_reducer'
import { resetResultAction } from '../../redux/result_reducer'

const Result = () => {

  const dispatch = useDispatch();
  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };
  return (
    <>
      <div className='flex justify-center'>

        <div className='border-[4px] border-[#0DFF92] p-5 w-[40%] flex justify-center'>
          <h1 className='text-2xl text-white'>Quiz Web App</h1>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-8'>
        <div className='flex justify-between mx-5 gap-3 text-white'>
           <span>Username</span>
           <span className='font-semibold'>Talha</span>
        </div>
        <div className='flex justify-between mx-5 gap-3 text-white'>
           <span>Total Quiz Point</span>
           <span>50</span>
        </div>
        <div className='flex justify-between mx-5 gap-3 text-white'>
           <span>Total Question</span>
           <span>05</span>
        </div>
        <div className='flex justify-between mx-5 gap-3 text-white'>
           <span>Total Attempts</span>
           <span>03</span>
        </div>
        <div className='flex justify-between mx-5 gap-3 text-white'>
           <span>Total Earn Points :</span>
           <span>30</span>
        </div>
        <div className='flex justify-between mx-5 gap-3 text-white'>
           <span>Quiz Result</span>
           <span>Pass</span>
        </div>
      </div>
      <div className='bg-[#faff5a] flex justify-center mt-5 w-[20%] mx-auto py-2 rounded-xl'>
        <Link className='text-black font-bold text-2xl ' to={'/'} onClick={onRestart}> Restart</Link>
      </div>
      <ResultTable/>
    </>
  )
}

export default Result