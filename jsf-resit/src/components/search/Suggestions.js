import { Link } from "react-router-dom";

const Suggestions = (props) => {
  const options = props.results.map((r) => (
    <Link to={`/details/${r.id}`} key={r.id}>
      {r.name}
    </Link>
  ));
  return <ul className="home__search--suggestions">{options}</ul>;
};

export default Suggestions;
