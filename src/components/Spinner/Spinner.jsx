import React from "react";
import spinner from "./spinner.jpg";

const Spinner = () => {
  return (
    <div>
      {" "}
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "400px", margin: "auto", display: "blcok" }}
      />
    </div>
  );
};

export default Spinner;
