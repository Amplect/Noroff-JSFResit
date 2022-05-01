import { Component } from "react";
import { url } from "../constants/api";
import axios from "axios";
import Suggestions from "./Suggestions";

// I found it very hard to create the typeahead search bar, unfortunately.
// I tried multiple solutions, from several sources, but it never seemed
// to work like I wanted it to.
// I also couldn't find anything in any of the lessons in JS Frameworks
// about how to make a typeahead search bar, which only fueled my confusion.

// The error I get now, at the end, is
// "undefined is not an object (evaluating 'props.results.map')"
// so I think I might be unable to find the correct property from the API.

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.
  state = {
    query: "",
    results: [],
  };
  // }

  getPokemon = () => {
    axios.get(`${url}`).then(({ cards }) => {
      this.setState({
        results: cards,
      });
      console.log("Results: " + this.state.results);
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getPokemon();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <form>
        <>
          <input
            className="home__search"
            placeholder="Search Pokemon"
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />

          <Suggestions results={this.state.results} />
        </>
      </form>
    );
  }

  // handleInputChange = (e) => {
  //   const { items } = this.props;
  //   let results = this.getPokemon();
  //   const value = e.target.value;
  //   if (value.length > 0) {
  //     const regex = new RegExp(`^${value}`, `i`);
  //     results = items.sort().filter((v) => regex.test(v));
  //   }

  //   this.setState(() => ({
  //     results,
  //     text: value,
  //   }));
  // };

  // resultsSelected = (value) => {
  //   this.setState(() => ({
  //     text: value,
  //     results: [],
  //   }));
  // };

  // renderResults = () => {
  //   const { results } = this.state;
  //   console.log("Results: ", results);
  //   if (results.length === 0) {
  //     return null;
  //   }

  //   return (
  //     <ul>
  //       {results.map((pokemon) => (
  //         <li key={pokemon.name} onclick={(e) => this.resultsSelected(pokemon)}>
  //           {pokemon.name}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  // render() {
  //   const { text } = this.state;
  //   return (
  //     <form>
  //       <input
  //         onChange={this.handleInputChange}
  //         placeholder="Search Pokémon"
  //         value={text}
  //         type="text"
  //       />
  //       {this.renderResults()}
  //     </form>
  //   );
  // }
}

export default Search;
