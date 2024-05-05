// Importando hooks de navegação e estado
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Formulário de busca com envio para a página de resultados de busca
export const SearchForm = () => {
  // Hook para redirecionar a navegação
  const navigate = useNavigate();
  // Estado para armazenar a consulta de busca
  const [query, setQuery] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redireciona para a página de busca com o parâmetro de consulta
    navigate("/search?q=" + query);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Entrada de texto para a consulta */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Botão de envio */}
      <input type="submit" value="Buscar" />
    </form>
  );
};
