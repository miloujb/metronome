import React, { Component } from "react";

class Metronome extends Component {
  render() {
    let bpm = 120;
    let playing = false;
    return (
      <div className="metronome">
        <div className="slider">
          <div>{bpm} BPM</div>
          <input type="range" min="60" max="240" value={bpm} />
        </div>
        <button>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

export default Metronome;
