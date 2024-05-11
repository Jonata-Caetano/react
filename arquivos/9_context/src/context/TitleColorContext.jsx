// Importa createContext para a criação de um contexto, useReducer para gerenciar o estado complexo e useState não necessário
import { createContext, useReducer } from "react";

// Cria um contexto para gerenciar a cor dos títulos dentro da aplicação
export const TitleColorContext = createContext();

// Define um reducer para gerenciar o estado da cor do título
export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":  // Caso a ação seja "RED", atualiza a cor do estado para vermelho
      return { ...state, color: "red" };
    case "BLUE":  // Caso a ação seja "BLUE", atualiza a cor do estado para azul
      return { ...state, color: "blue" };
    default:  // Caso não seja nenhuma das ações acima, retorna o estado atual sem alterações
      return state;
  }
};

// Define um componente provedor para o contexto de cor do título
export const TitleColorContextProvider = ({ children }) => {
  // Inicializa o estado do contexto usando useReducer com o reducer definido e o estado inicial
  const [state, dispatch] = useReducer(titleColorReducer, {
    color: "purple",  // Estado inicial com a cor definida como roxo
  });

  // Log do estado atual para fins de depuração
  console.log("Title Color Context:", state);

  // Retorna o provedor do contexto, passando o estado e a função dispatch para permitir atualizações
  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}  {/*Renderiza os componentes filhos, permitindo-lhes acesso ao contexto*/}
    </TitleColorContext.Provider>
  );
};
