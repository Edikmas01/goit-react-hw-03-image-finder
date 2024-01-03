import { Component } from "react";
import './Searchbar.css';
import { logDOM } from "@testing-library/react";

export class Searchbar extends Component{
    render() {
        const { onSubmit } = this.props;
        return (
          <header className="Searchbar">
            <form
              className="SearchForm"
              onSubmit={e => {
                e.preventDefault();
                onSubmit(e.target.lastChild.value);
              }}
            >
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label"></span>
              </button>

              <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </form>
          </header>
        );
    }
}