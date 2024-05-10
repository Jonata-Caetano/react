import "./Home.css";

import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // 2 - criar provider
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div className="about-container">
    <h1 className="about-title" style={{ color: color }}>About</h1>
    <p className="counter-value">Valor contador: {counter}</p>
      <ChangeCounter />
      <div className="button-group">
        <button
          className="button button-red"
          onClick={() => setTitleColor("RED")}
        >
          Vermelho
        </button>
        <button
          className="button button-blue"
          onClick={() => setTitleColor("BLUE")}
        >
          Azul
        </button>
      </div>
    </div>
  );
};

export default Home;
