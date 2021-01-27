import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.Search = this.Search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    Search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    render() {
        return (
        <div className="SearchBar">
           <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
           <button className="SearchButton">SEARCH</button>
        </div>
        );
    }
}

export default SearchBar;