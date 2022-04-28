import React from "react";
import Heading from "./layout/Heading";
import PokemonList from "./pokemon/PokemonList";
import Search from "./search/Search.component";

function Home() {
  return (
    <>
      <Heading>Home</Heading>
      <p>Welcome to the Base 1 Pokedex!</p>
      <Search />
      <div className="card-container">
        <PokemonList />
      </div>
    </>
  );
}

export default Home;
