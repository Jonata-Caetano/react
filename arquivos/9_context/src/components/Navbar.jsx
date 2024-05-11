// Importa o componente NavLink do pacote react-router-dom para gerenciar a navegação entre rotas
import { NavLink } from "react-router-dom";

// Importa os estilos CSS para o componente Navbar
import "./Navbar.css";

// Define o componente funcional Navbar
const Navbar = () => {
  return (
    // Cria um elemento <nav> para encapsular os links de navegação
    <nav>
      {/* Cria um link de navegação para a página inicial */}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}  // Define a classe do link baseada no estado de ativação
        to="/"  // Define a rota de destino do link como a página inicial
      >
        Home  // Texto visível do link
      </NavLink>
      {/* Cria um link de navegação para a página de produtos */}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}  // Define a classe do link baseada no estado de ativação
        to="/products"  // Define a rota de destino do link como a página de produtos
      >
        Produtos  // Texto visível do link
      </NavLink>
      {/* Cria um link de navegação para a página sobre */}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}  // Define a classe do link baseada no estado de ativação
        to="/about"  // Define a rota de destino do link como a página sobre
      >
        Sobre  // Texto visível do link
      </NavLink>
    </nav>
  );
};

// Exporta o componente Navbar para ser usado em outros lugares da aplicação
export default Navbar;
