import React from "react";
import Heading from "./layout/Heading";
import GrassList from "./pokemon/GrassList";

function Grass() {
  return (
    <>
      <Heading>Grass types</Heading>
      <div className="card-container">
        <GrassList />
      </div>
    </>
  );
}

export default Grass;
