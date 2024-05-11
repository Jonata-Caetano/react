// Importa createContext para criar um novo contexto e useState para gerenciar o estado local
import { createContext, useState } from "react";

// 1 - Criar o contexto do contador
// Cria um novo contexto chamado CounterContext que pode ser consumido por outros componentes na árvore
export const CounterContext = createContext();

// 2 - Criar o provedor de contexto
// Define um componente CounterContextProvider que encapsula a lógica de estado para o contador
export const CounterContextProvider = ({ children }) => {
  // Inicializa o estado 'counter' com o valor inicial de 0 e a função 'setCounter' para atualizá-lo
  const [counter, setCounter] = useState(0);

  // Retorna o provedor do contexto CounterContext, passando o estado atual e a função de atualização
  // Todos os componentes filhos (children) terão acesso ao contexto e poderão consumir e alterar o valor do contador
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}  {/* Renderiza os componentes filhos que são passados dentro deste provedor*/}
    </CounterContext.Provider>
  );
};
