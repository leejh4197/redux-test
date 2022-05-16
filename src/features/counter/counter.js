import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const counter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const count = useSelector((state) => state.counter.value);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const incrementOnclick = () => {
    dispatch(increment());
  };
  const decrementOnclick = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={incrementOnclick}>
          increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={decrementOnclick}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default counter;
