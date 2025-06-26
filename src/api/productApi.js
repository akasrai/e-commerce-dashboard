import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = async (page = 0) => {
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}/products?limit=5&skip=${page}&sortBy=title&order=asc`,
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
    url: `${BASE_URL}/products/add`,
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
    url: `${BASE_URL}/products/${productId}`,
  });

  return response.data;
};

export const fetchUsers = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}/users`,
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
      url: `${BASE_URL}/users/${userId}`,
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
