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
    if (this.state.playing) {
      // stop metronome, start again
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
      // starts new timer
      this.setState({ count: 0, bpm });
    } else {
      // set state as is
      this.setState({ bpm });
    }
  };

  // starts and stops the metronome playing

  startStop = () => {
    if (this.state.playing) {
      // stop metronome
      clearInterval(this.timer);
      this.setState({ playing: false });
    } else {
      // start metronome
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState({ count: 0, playing: true });
    }
    this.playClick();
  };

  //plays clicks

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;
    // places emphasis on the first beat
    if (count / beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
    //  keeps track of beat
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
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
