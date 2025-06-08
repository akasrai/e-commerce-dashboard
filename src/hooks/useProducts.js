import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";

const useProducts = () => {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const { data, error } = await fetchProducts();

    setLoading(false);

    if (error) {
      setError(error);

      return;
    }

    setProducts(data?.products || []);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    error,
    loading,
    products,
  };
};

export default useProducts;
