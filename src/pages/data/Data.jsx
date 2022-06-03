import "./data.scss";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";

export const Data = () => {
  const { entity } = useParams();

  const handleSuccess = (data) => {
    console.log("Yayy! We got the data!", data);
  };

  const handleError = (error) => {
    console.log("Oops! We got an error...", error.message);
  };

  const { isLoading, isError, error, data, refetch } = useData(
    entity,
    handleSuccess,
    handleError,
    entity === "posts" ? true : false
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <h1>{entity} List</h1>
      <button onClick={refetch}>Fetch {entity}</button>
      <div className={`${entity}`}>
        {data?.map((item) => {
          const keys = Object.keys(item).slice(0, 2);
          return (
            <Link
              key={item[keys[1]]}
              className="entityLink"
              to={`/${entity}/${item.id}`}
            >
              <div className="item">
                {keys.map((key) => (
                  <span key={key}>
                    {key}: {item[key]}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
