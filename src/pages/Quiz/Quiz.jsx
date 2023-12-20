import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Question from "../../components/Question";
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../../hooks/FetchQuestion";
import { PushAnswer } from "../../hooks/setResult";
import { Navigate } from "react-router-dom";


const Quiz = () => {
  const state = useSelector((state) => state);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [check, setChecked] = useState(undefined);

  useEffect(() => {});

  useEffect(() => {
    console.log(state);
  });

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  }
  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }
  function onChecked(check) {
    setChecked(check);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className=" border-[4px] border-[#0DFF92] p-5 w-[40%] flex justify-center">
          <h1 className="text-2xl text-white">Quiz Web App</h1>
        </div>
        <Question onChecked={onChecked} />
        <div
          className={`flex  w-[70%] mt-10 ${
            trace > 0 ? "justify-between" : "justify-end"
          }`}
        >
          {trace > 0 ? (
            <button
              className="text-white bg-yellow-400 p-2 w-20 rounded-lg"
              onClick={onPrev}
            >
              Prev
            </button>
          ) : (
            <></>
          )}

          <button
            className="text-white bg-green-600 p-2 w-20 rounded-lg"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
