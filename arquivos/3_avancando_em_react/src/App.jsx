import { useState } from "react";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Jonata";
  const [userName] = useState("Maria");
  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem no diretório public */}
      <div>
        <img
          src="/img.jpg"
          alt="Paisagem"
          style={{ maxWidth: "20%", height: "auto%" }}
        />
      </div>

      {/* Imagem no diretório de assets */}
      <div>
        <img
          src={City}
          alt="Cidade"
          style={{ maxWidth: "20%", height: "auto" }}
        />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name={userName} />
      <ShowUserName name={name} />
      {/*destructuring*/}
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false}/>
      {/*Reusing the component*/}
      <CarDetails brand="Ford" km={1000} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={0} color="Branco" newCar={false}/>
    </div>
  );
}

export default App;
