import React, { Component } from "react";

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      count: 0,
      bpm: 120,
      beatsPerMeasure: 4
    };
  }

  // changes the BPM

  handleBPMchange = event => {
    const bpm = event.target.value;
    this.setState({ bpm });
  };

  render() {
    const { bpm, playing } = this.state;
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
