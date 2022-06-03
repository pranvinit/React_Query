import "./dataDetails.scss";
import { useParams } from "react-router-dom";
import { useDataDetails } from "../../hooks/useDataDetails";

export const DataDetails = () => {
  const { entity, id } = useParams();

  const handleSuccess = (data) => {
    console.log("Yayy! We got the data!", data);
  };

  const handleError = (error) => {
    console.log("Oops! We got an error...", error.message);
  };

  const { isLoading, isError, error, data } = useDataDetails(
    entity,
    id,
    handleSuccess,
    handleError
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <div>{`${entity} ${id} Details`}</div>
      <div className="item">
        {Object.keys(data).map((key) => (
          <span key={key}>
            {key}: {data[key]}
          </span>
        ))}
      </div>
    </>
  );
};
