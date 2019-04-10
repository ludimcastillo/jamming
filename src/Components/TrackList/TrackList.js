import React, { Component } from 'react';
import './TrackList.css';

import Track from '../Track/Track'

class TrackList extends Component {
  render() {
    if(this.props.tracks) {
      return (
        <div className="TrackList">    
          {
            this.props.tracks.map(track => {
              return <Track onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} track={track} key={track.id} />
            })
          }
        </div>
      );
    } else {
      return (
        <div className="TrackList">
          <h1>Whoa, no tracks!</h1>
        </div>
      );
    }
  }
}

export default TrackList;