// About.js
import "./About.css"; // Certifique-se de que o caminho está correto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useContext(CounterContext);
  const { color } = useTitleColorContext();

  return (
    <div className="about-container">
      <h1 className="about-title" style={{ color: color }}>About</h1>
      <p className="counter-value">Valor contador: {counter}</p>
    </div>
  );
};

export default About;
