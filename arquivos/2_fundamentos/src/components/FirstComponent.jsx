import MyComponent from "./MyComponent";

// arquivos de estilo
const FirstComponent = () => {
  /*
    multiple lines
    */
  return (
    <div>
      {/*Algum comentario*/}
      <h1>Meu primeiro component</h1>
      <p className="teste"> Meu texto </p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
