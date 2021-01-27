import React from "react";
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'PlaylistName1', artist: 'PlaylistArtist1', album: 'PlaylistAlbum1', id: 4},
        {name: 'PlaylistName2', artist: 'PlaylistArtist2', album: 'PlaylistAlbum2', id: 5},
        {name: 'PlaylistName3', artist: 'PlaylistArtist3', album: 'PlaylistAlbum3', id: 6}
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removetrack = this.removetrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // add a new track to the playlist compomnent/playlistTrack from searchresult
  addTrack(track) {
    // the parameter "track" is the new one to be added
    let tracks = this.state.playlistTracks;
    // we want to check if the clicked 'track'/track.id is the same as the one already in the playlisttracks
    // if true return nothing // we are to loop through to see if each one would return true
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      // note we don't want it to to save twice 
      return; // return nothing
    }// as else would go 
    // if the looping/find() returns false then push() the current clicked track to the playlistTracks( using the setState())
    tracks.push(track);// it adds the new track to the end of the playlistTrack but unshift adds to the beginning
    this.setState({playlistTracks: tracks})
  }

  // filtering away all the items not needed
  removetrack(track) {
    let tracks = this.state.playlistTracks;

    // firstly, filter out and store all the track(current) that doesn't match the clicked track
    // secondly, remove the one that match (track.id) we clicked 
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    // always remember to set the new state
    this.setState({playlistTracks: tracks}); // accept the newly filter tracks
  }

  // update playlist name
  updatePlaylistName(name) {
      this.setState({playlistName: name});
  }
  // generate URI for the tracks to be saved in Spotify user accts
  savePlaylist() {
    // pass the uris of playlist to a new array
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    
    //alert('this method is linked to the playlist button correctly');
  }

  // create the a search method in the app for search term
  search(term) {
    console.log(term);
  }


  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} /> 
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removetrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
