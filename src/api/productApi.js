import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios({
    method: "get",
    url: "https://dummyjson.com/products?sortBy=title&order=asc",
  });

  console.log(response.data);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios({
    method: "post",
    url: "https://dummyjson.com/products/add",
    data: product,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
