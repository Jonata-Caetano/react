import { useEffect, useState } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod("DELETE");
      setItemId(data);
    }
  };

  // Fetching data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Erro ao carregar os dados!");
        }
        const json = await res.json();
        setData(json);
        setError(null); // Limpa os erros
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  // Handle POST/DELETE requests
  useEffect(() => {
    const httpRequest = async () => {
      if (!config) return;

      setLoading(true);
      let res;
      try {
        if (method === "POST") {
          res = await fetch(url, config);
        } else if (method === "DELETE") {
          const deleteUrl = `${url}/${itemId}`;
          res = await fetch(deleteUrl, config);
        }

        if (!res.ok) {
          throw new Error("Erro ao executar a requisição!");
        }

        const json = await res.json();
        setCallFetch(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error };
};
