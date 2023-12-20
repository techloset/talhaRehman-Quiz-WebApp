import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResultTable from "../../components/ResultTable";
import { resetAllAction } from "../../redux/question_reducer";
import { resetResultAction } from "../../redux/result_reducer";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../../helper/helper";
import { useDispatch, useSelector } from "react-redux";

const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);
  useEffect(() => {
    console.log(flag);
  });

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);
  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="border-[4px] border-[#0DFF92] p-5 w-[40%] flex justify-center">
          <h1 className="text-2xl text-white">Quiz Web App</h1>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-8 text-xl ">
        <div className="flex justify-between  mx-5 gap-5 text-white">
          <span>Username</span>
          <span className="font-semibold">Talha</span>
        </div>
        <div className="flex justify-between mt-2 mx-5 gap-5 text-white">
          <span>Total Quiz Point</span>
          <span>{totalPoints || 0}</span>
        </div>
        <div className="flex justify-between mt-2 mx-5 gap-3 text-white">
          <span>Total Question</span>
          <span>{queue.length || 0}</span>
        </div>
        <div className="flex justify-between mt-2 mx-5 gap-3 text-white">
          <span>Total Attempts</span>
          <span>{attempts || 0}</span>
        </div>
        <div className="flex justify-between mt-2 mx-5 gap-3 text-white">
          <span>Total Earn Points :</span>
          <span>{earnPoints || 0}</span>
        </div>
        <div className="flex justify-between mt-2 mx-5 gap-3 text-white">
          <span>Quiz Result</span>
          <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className="font-bold">{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>
      <div className="bg-[#faff5a] flex mt-5 w-[20%] mx-auto rounded-xl">
        <Link
          className="text-black font-bold block w-full text-center text-2xl  mx-auto py-2"
          to={"/"}
          onClick={onRestart}
        >
          {" "}
          Restart
        </Link>
      </div>
      <ResultTable />
    </>
  );
};

export default Result;
