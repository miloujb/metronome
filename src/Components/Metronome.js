import React, { Component } from "react";
import click1 from "./Clicks/click1.wav";
import click2 from "./Clicks/click2.wav";

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      count: 0,
      bpm: 120,
      beatsPerMeasure: 4
    };
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  // changes the amount of beats per minute (BPM)

  handleBPMchange = event => {
    const bpm = event.target.value;
    this.setState({ bpm });
  };

  // starts and stops the metronome playing

  startStop = () => {
    this.click1.play();
  };

  render() {
    const { bpm, playing } = this.state;
    return (
      <div className="metronome">
        <div className="slider">
          <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleBPMchange}
          />
        </div>
        <button onClick={this.startStop}>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

export default Metronome;
