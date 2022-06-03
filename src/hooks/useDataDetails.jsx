import { useQuery } from "react-query";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const useDataDetails = (entity, id, onSuccess, onError) => {
  const { isLoading, isFetching, isError, error, data, refetch } = useQuery(
    [entity, id],
    () => fetchData(`${BASE_URL}/${entity}/${id}`),
    {
      cacheTime: 1000 * 60 * 10, // 10 mins
      staleTime: 1000 * 30, // 30 secs
      onSuccess,
      onError,
      // Return transformed data

      //   select: (data) => {
      //     const keys = Object.keys(data);
      //     return (
      //       <div className="item">
      //         {keys.map((key) => (
      //           <span>
      //             {key}: {data[key]}
      //           </span>
      //         ))}
      //       </div>
      //     );
      //   },
    }
  );

  return { isLoading, isFetching, isError, error, data, refetch };
};
