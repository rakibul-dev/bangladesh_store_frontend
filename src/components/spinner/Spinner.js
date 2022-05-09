import React from "react";
import { Watch } from "react-loader-spinner";
import "./Spinnser.css";
const Spinner = () => {
  return (
    <>
      <container className="spinner">
        <Watch color="#FE7F9C" ariaLabel="loading" />
      </container>
    </>
  );
};

export default Spinner;
