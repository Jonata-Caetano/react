// 3 - alterando valor do contador
import "./ChangeCounter.css"
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  // const { counter, setCounter } = useContext(CounterContext);
  // 4 - refatorando para hook
  const { counter, setCounter } = useCounterContext();

  return (
    <div className="counter-button-container">
    <button className="counter-button" onClick={() => setCounter(counter + 1)}>
      Add value to counter
    </button>
  </div>
);
};

export default ChangeCounter;
