import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  // Captura os parâmetros de busca usando `useSearchParams`
  const [searchParams] = useSearchParams();
  // Constrói a URL correta com os parâmetros de busca
  const url = `http://localhost:3000/products?${searchParams.toString()}`;

  // Verificação da URL no console para depuração
  console.log("URL de busca:", url);

  // Busca os dados usando o hook personalizado `useFetch`
  const { data: items, loading, error } = useFetch(url);

  // Verifica se os dados estão carregando
  if (loading) {
    return <p>Carregando...</p>;
  }

  // Exibe uma mensagem de erro, se houver
  if (error) {
    return <p>Ocorreu um erro: {error}</p>;
  }

  // Se não houver itens, retorna mensagem apropriada
  if (!items || items.length === 0) {
    return <p>Nenhum resultado encontrado.</p>;
  }

  // Renderiza os itens de busca
  return (
    <div>
      <h1>Resultados Disponíveis</h1>
      <ul className="products">
        {items.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>R$: {product.price}</p>
            <Link to={`/products/${product.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
