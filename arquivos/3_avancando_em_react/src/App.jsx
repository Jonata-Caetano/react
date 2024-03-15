import City from "./assets/city.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
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
    </div>
  );
}

export default App;
