import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios({
    method: "get",
    url: "https://dummyjson.com/products",
  });

  return response.data;
};
