// Importação de estilos e dependências essenciais
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importação das páginas e componentes
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import { SearchForm } from "./components/SearchForm";

// Componente principal `App` com a configuração do roteamento
function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Configuração do roteamento */}
      <BrowserRouter>
        {/* Barra de navegação fixa */}
        <Navbar />
        {/* Formulário de busca para navegação */}
        <SearchForm />
        {/* Rotas principais */}
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Home />} />
          {/* Página 'Sobre' */}
          <Route path="about" element={<About />} />
          {/* Rota aninhada: informações do produto */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* Rota dinâmica para exibição do produto */}
          <Route path="/products/:id" element={<Product />} />
          {/* Página de resultados de busca */}
          <Route path="/search" element={<Search />} />
          {/* Redirecionamento de `/company` para `/about` */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* Rota de página não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
