import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // Obtendo o parâmetro de rota
  const { id } = useParams();
  // Construindo a URL com o `id` correto
  const url = `http://localhost:3000/products/${id}`;
  // Buscando os dados usando o hook personalizado
  const { data: product, loading, error } = useFetch(url);

  console.log("produto: " + product); // Verifique o produto retornado no console

  return (
    <div>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$: {product.price}</p>
          {/* Rota aninhada */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  );
};

export default Product;
