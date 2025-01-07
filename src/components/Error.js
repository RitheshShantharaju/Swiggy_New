import React from "react";
import {useRouteError} from "react-router-dom";
import ErrorImage from "../images/ErrorImage.jpg";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="w-2/4 m-auto mt-4">
      <img src={ErrorImage} />
      {/* <h3>
        {err.status}:{err.statusText}
      </h3> */}
    </div>
  );
};

export default Error;
