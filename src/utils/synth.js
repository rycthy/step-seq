import Tone from 'tone';

class Synth {
  constructor() {
    this.instance = new Tone.PolySynth(16, Tone.Synth).toMaster();
  }
}

const synth = new Synth;

export default synth;