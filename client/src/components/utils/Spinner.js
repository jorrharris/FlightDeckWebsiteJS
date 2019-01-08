import React from "react";
import spinner from "../../img/loading.gif";

export default function Spinner() {
  return (
    <div className="mx-auto">
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}
