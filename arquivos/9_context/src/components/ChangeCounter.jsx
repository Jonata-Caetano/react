// Importa os estilos CSS específicos para o componente ChangeCounter
import "./ChangeCounter.css"
// Importa o hook useContext do React para acessar o contexto
import { useContext } from "react";

// Importa o contexto específico de contador
import { CounterContext } from "../context/CounterContext";
// Importa o hook customizado useCounterContext que abstrai a lógica de acesso ao contexto do contador
import { useCounterContext } from "../hooks/useCounterContext";

// Define o componente funcional ChangeCounter
const ChangeCounter = () => {
  // Utiliza o hook customizado useCounterContext para obter o estado e a função de atualização do contador
  // Este hook substitui a necessidade de usar useContext diretamente, simplificando o acesso e a manutenção
  const { counter, setCounter } = useCounterContext();

  // Renderiza o componente com um botão que, ao ser clicado, incrementa o valor do contador
  return (
    <div className="counter-button-container">
      <button className="counter-button" onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
    </div>
  );
};

// Exporta o componente ChangeCounter para ser usado em outros lugares da aplicação
export default ChangeCounter;
