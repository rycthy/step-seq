import React from 'react';
import synth from '../utils/synth';

const gridState = [];
// const scale = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5', 'A5', 'C6', 'D6', 'E6', 'G6', 'A6', 'C7'];
const scale = ['C3', 'D3', 'E3', 'G3', 'A3', 'C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5', 'A5', 'C6'];
const gridMap = [];
for (let i = 0; i < scale.length; i++) {
  scale.forEach((note) => {
    gridMap.push(note);
  });
}

gridMap.forEach((note, index) => {
  gridState[index] = {
    id: index,
    note,
    enabled: 'false'
  }
});
console.log(gridMap);



class Main extends React.Component {
  componentDidMount() {
    const play = synth.instance;
      gridMap.forEach((note, index) => {
        setTimeout(function () {
          play.triggerAttackRelease(note, '8n');
        }, 50 * index)
      });
  }
  onClick = (e) => {
    const note = e.target.value;
    const play = synth.instance;
    play.triggerAttackRelease(note, '2n');
  }
  render() {
    return (
      <div className="container">
        {
          gridState.map((index) => {
            return <button className={`bloop-${index.enabled}`} key={index.id} value={index.note} onClick={this.onClick}>{index.note}</button>
          })
        }
      </div>
    );
  };
}

export default Main;