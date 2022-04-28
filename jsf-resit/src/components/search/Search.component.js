import { Component } from "react";
import { url } from "../constants/api";
import axios from "axios";
import Suggestions from "./Suggestions";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  getPokemon = () => {
    axios.get(`${url}`).then(({ data }) => {
      this.setState({
        results: data,
      });
      console.log(this.state.results);
    });
  };

  handleInputChange = () => {
    this.setState({ query: this.search.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getPokemon();
        }
      } else if (!this.state.query) {
      }
    });
  };

  render() {
    return (
      <form>
        <input
          className="home__search"
          placeholder="Search Pokemon"
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />

        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
