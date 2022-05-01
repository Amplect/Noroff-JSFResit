import { Link } from "react-router-dom";

const Suggestions = (props) => {
  const options = props.results.map((r) => (
    <Link to={`/details/${r.cards.id}`} key={r.cards.id}>
      {r.cards.name}
    </Link>
  ));
  return <ul className="home__search--suggestions">{options}</ul>;
};

export default Suggestions;
