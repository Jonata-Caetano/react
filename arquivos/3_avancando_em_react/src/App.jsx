import { useState } from "react";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecutionFunction from "./components/ExecutionFunction";

function App() {
  const name = "Jonata";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 344 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

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
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false} />
      {/*Reusing the component*/}
      <CarDetails brand="Ford" km={1000} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={0} color="Branco" newCar={false} />
      {/*Loop em array de objeto*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/*Fragment*/}
      <Fragment propFragment="teste" />
      {/*Children*/}
      <Container>
        <p>E este é o conteudo</p>
      </Container>
      <Container myValeu="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/*Executar função*/}
      <ExecutionFunction myFunction={showMessage} />
    </div>
  );
}

export default App;
