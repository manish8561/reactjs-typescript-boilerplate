import Spinner from "react-bootstrap/Spinner";
import { useAppSelector } from "../../hooks";
import { Fragment } from "react/jsx-runtime";

export const Loader = () => {
  const load = useAppSelector((state) => state.loader.value);
  return (
    <Fragment>
      {load && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(255, 100, 100, 0.85)",
            padding: "2px 10px",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Fragment>
  );
};
