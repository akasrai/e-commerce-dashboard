import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "https://dummyjson.com/products?sortBy=title&order=asc",
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.message || "Failed to fetch products",
    };
  }
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

export const fetchProductById = async (productId) => {
  const response = await axios({
    method: "get",
    url: `https://dummyjson.com/products/${productId}`,
  });

  return response.data;
};

export const fetchUsers = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "https://dummyjson.com/users",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.message || "Failed to fetch users",
    };
  }
};

export const fetchUserById = async (userId) => {
  try {
    const response = await axios({
      method: "get",
      url: `https://dummyjson.com/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.message || "Failed to fetch user",
    };
  }
};
