import { useQuery } from "react-query";
import axios from "axios";

const GET_URL = {
  posts: "https://jsonplaceholder.typicode.com/posts",
  todos: "https://jsonplaceholder.typicode.com/todos",
  comments: "https://jsonplaceholder.typicode.com/comments",
};
const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const useData = (entity, onSuccess, onError, enabled = false) => {
  const { ...attrs } = useQuery(entity, () => fetchData(GET_URL[entity]), {
    cacheTime: 1000 * 60 * 10, // 10 mins
    staleTime: 1000 * 30, // 30 secs
    enabled,
    onSuccess,
    onError,
  });

  return { ...attrs };
};
