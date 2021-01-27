import React from 'react';
import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList 
                    tracks={this.props.searchResults}
                    onAdd={this.props.onAdd}
                    /*isRemoval confirms if true/false just for
                    Track to know which to add or remove(confirmational props*/
                    isRemoval={false} />
            </div>
        );
    }
}

export default SearchResults;