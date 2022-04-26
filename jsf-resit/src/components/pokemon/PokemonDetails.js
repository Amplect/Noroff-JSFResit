import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { detailsUrl } from "../constants/api";
import Heading from "../layout/Heading";

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
            console.log(json.card);
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
        <img src={pokemon.imageUrl} />
      </div>
      <div className="container__details--information">
        <Heading>{pokemon.name}</Heading>
        <p className="details__button">Read more</p>
      </div>
    </div>
  );
}

export default PokemonDetails;
