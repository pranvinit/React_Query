import axios from "axios";

// creating an instance of axios (with base URL)
const api = axios.create({
  baseURL: "https://ecommerce-api-site.herokuapp.com/api/v1",
});

export const getProducts = async () => {
  const response = await api.get("/products");
  console.log(response.data);
  return response.data;
};

export const postProduct = async (data) => {
  const response = await api.post("/products", data);
  return response.data;
};

export const updateProduct = async ({ _id: id, ...product }) => {
  const response = await api.patch(`/products/${id}`, product);
  return response.data;
};
