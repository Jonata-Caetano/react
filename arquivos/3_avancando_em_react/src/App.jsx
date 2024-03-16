import { useState } from "react";
import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
  const name = "Jonata";
  const [userName] = useState("Maria")
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
      <ShowUserName name={userName} />
      <ShowUserName name={name} />
    </div>
  );
}

export default App;
