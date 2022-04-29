import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../constants/api";
import _ from "lodash";

function GrassList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchPokemon() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          console.log(json.cards);
          let pokemon = json.cards;
          let grassTypes = _.filter(pokemon, { types: ["Grass"] });
          console.log(grassTypes);
          setPokemon(grassTypes);
        } else {
          setError("An error occurred while fetching Pokemon...");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();
  }, []);

  if (loading) {
    return <div>Loading Pokemon...</div>;
  }

  if (error) {
    return <div>ERROR: An error occurred while fetching Pokemon.</div>;
  }

  return (
    <>
      {pokemon.map(function (pokemon) {
        const { id, name, imageUrl } = pokemon;
        const link = "/details/" + pokemon.id;

        // if (pokemon.types === "Grass") {
        return (
          <div key={id} className="card">
            <img src={imageUrl} alt={name} />
            <Link to={link} className="card__link">
              <p className="card__link--text">Go to {name}</p>
            </Link>
          </div>
        );
        // } else {
        //   return <div>No grass type Pokemon available.</div>;
        // }
      })}
    </>
  );
}

export default GrassList;
