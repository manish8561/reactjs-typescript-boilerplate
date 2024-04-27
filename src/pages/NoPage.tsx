import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <h1>404</h1>
      <Button className="primary btn-sm" onClick={handleBack}>
        Back
      </Button>
    </React.Fragment>
  );
};

export default NoPage;
