import React from "react";
import Heading from "./layout/Heading";
import PokemonList from "./pokemon/PokemonList";

function Home() {
  return (
    <>
      <Heading>Home</Heading>
      <p>Welcome to the Base 1 Pokedex!</p>
      <div className="card-container">
        <PokemonList />
      </div>
    </>
  );
}

export default Home;
