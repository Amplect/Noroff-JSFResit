import React from "react";
import Heading from "./layout/Heading";
import PokemonList from "./pokemon/PokemonList";
import Search from "./search/Search.component";

function Home() {
  return (
    <>
      <Heading>Pokemon</Heading>
      <Search />
      <div className="card-container">
        <PokemonList />
      </div>
    </>
  );
}

export default Home;
