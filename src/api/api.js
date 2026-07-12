import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

/// GET All
export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

/// GET One
export const getOneProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

/// POST/Create

/// PUT/Edit/Update

/// DELETE
