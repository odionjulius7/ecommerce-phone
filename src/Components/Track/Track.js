// Note this is for Jammming App


// import React from "react";
// import "./Track.css";

// class Track extends React.Component {
//     constructor(props) {
//         super(props);
//         /* Bind this.addTrack() to the current value of this in the constructor method. */
//         this.addTrack = this.addTrack.bind(this);
//         this.removeTrack = this.removeTrack.bind(this);
//     }

//     renderAction() {
//         if (this.props.isRemoval) {
//             return <button className="Track-action" onClick={this.removeTrack}>-</button>
//         } else {
//             return <button className="Track-action" onClick={this.addTrack}>+</button>
//         }
//     }

//     // the button we click(property) is the new track
//     addTrack() {
//         this.props.onAdd(this.props.track);
//         // it will accept this.props.track, which is the track to be added, from the searchresult
//         // that was passed from trackList to the track 
//     }

//     removeTrack() {
//         this.props.onRemove(this.props.track);
//         // it will accept this.props.track, which is the track to be remove, from the playlist
//     }

//     render() {
//         return (
//             <div className="Track">
//                 <div className="Track-information">
//                     <h3>{this.props.track.name}</h3>
//                     <p>{this.props.track.artist} | {this.props.track.album}</p>
//                 </div>
//                 {this.renderAction()}
//             </div>
//         );
//     }
// }
 
// export default Track;