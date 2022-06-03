import axios from "axios";
const token = "fetch auth token here";

const client = axios.create({ baseURL: "http://localhost:3000" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;

  const onSuccess = (response) => response;
  const onError = (error) => error; // custom error handling

  return client(options).then(onSuccess).catch(onError);
};
