import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("Paulo");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h1>If ternário</h1>
      {name === "Joao" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Joao")}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;
