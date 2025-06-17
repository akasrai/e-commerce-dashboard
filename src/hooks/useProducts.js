import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";

const useProducts = (page) => {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const { data, error } = await fetchProducts(page);

    setLoading(false);

    if (error) {
      setError(error);

      return;
    }

    setProducts(data?.products || []);
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  return {
    error,
    loading,
    products,
  };
};

export default useProducts;
