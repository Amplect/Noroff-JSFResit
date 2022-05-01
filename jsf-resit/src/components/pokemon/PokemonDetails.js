import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { detailsUrl } from "../constants/api";
import Heading from "../layout/Heading";
import { ReadMore } from "./ReadMore";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate("/");
  }

  const url = detailsUrl + "/" + id;

  useEffect(
    function () {
      async function fetchDetails() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setPokemon(json.card);
          } else {
            setError("An error occurred fetching the details...");
          }
        } catch (error) {
          setError(error.toString());
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      fetchDetails();
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred fetching the details...</div>;
  }

  return (
    <div className="container__details">
      <div className="container__details--image">
        <img src={pokemon.imageUrl} alt={pokemon.name} />
      </div>
      <div className="container__details--information">
        <Heading>{pokemon.name}</Heading>
        <ReadMore>
          <div className="details__information">
            <p className="details__information--subject">Artist:</p>
            <p className="details__information--detail">{pokemon.artist}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Attacks:</p>
            <p className="details__information--detail">
              Attack name: {pokemon.attacks[0].name}
            </p>
            <p className="details__information--detail">
              Cost: {pokemon.attacks[0].cost[0]}
            </p>
            <p className="details__information--detail">
              Text: {pokemon.attacks[0].text}
            </p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">
              Converted Retreat Cost:
            </p>
            <p className="details__information--detail">
              {pokemon.convertedRetreatCost}
            </p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">HP:</p>
            <p className="details__information--detail">{pokemon.hp}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">ID:</p>
            <p className="details__information--detail">{pokemon.id}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">
              National Pokedex Number:
            </p>
            <p className="details__information--detail">
              {pokemon.nationalPokedexNumber}
            </p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Number:</p>
            <p className="details__information--detail">{pokemon.number}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Rarity:</p>
            <p className="details__information--detail">{pokemon.rarity}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Retreat cost:</p>
            <p className="details__information--detail">
              {pokemon.retreatCost}
            </p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Series:</p>
            <p className="details__information--detail">{pokemon.series}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Set:</p>
            <p className="details__information--detail">{pokemon.set}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Set code:</p>
            <p className="details__information--detail">{pokemon.setCode}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Subtype:</p>
            <p className="details__information--detail">{pokemon.subtype}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Supertype:</p>
            <p className="details__information--detail">{pokemon.supertype}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Types:</p>
            <p className="details__information--detail">{pokemon.types[0]}</p>
          </div>
          <div className="details__information">
            <p className="details__information--subject">Weaknesses:</p>
            <p className="details__information--detail">
              {pokemon.weaknesses[0].type}, value {pokemon.weaknesses[0].value}
            </p>
          </div>
        </ReadMore>
      </div>
    </div>
  );
}

export default PokemonDetails;
