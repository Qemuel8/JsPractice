import React, { Component } from 'react'
import getAudio from '../audio/audio'
import './drum-machine.css'
import audio1 from "../audio/Cev_H2.mp3"
import audio2 from "../audio/Dsc_Oh.mp3"
import audio3 from "../audio/Heater-1.mp3"
import audio4 from "../audio/Heater-2.mp3"
import audio5 from "../audio/Heater-3.mp3"
import audio6 from "../audio/Heater-4_1.mp3"
import audio7 from "../audio/Heater-6.mp3"
import audio8 from "../audio/Kick_n_Hat.mp3"
import audio9 from "../audio/RP4_KICK_1.mp3"




class DrumMachine extends Component {
  constructor(props){
    super(props)
    this.state = {
      audios:{
audio1 : new Audio(audio1),
audio2 : new Audio(audio2),
audio3 : new Audio(audio3),
audio4 : new Audio(audio4),
audio5 : new Audio(audio5),
audio6 : new Audio(audio6),
audio7 : new Audio(audio7),
audio8 : new Audio(audio8),
audio9 : new Audio(audio9),
}
      } 
  }




  togglePlay = (currentAudio) => {
      currentAudio.play();
  }
 
  render() { 
    return (
      <div id="container">
<div id='drum-machine'> 
  <p id="drum-name">Drum Machine</p>


      <button className="drum-pad" id='Q' ><audio className='clip' id='Q' onClick={() => this.togglePlay(this.state.audios.audio1)} src={this.state.audios.audio1} >Q</audio></button>
      <button className="drum-pad" id='W' onClick={() => this.togglePlay(this.state.audios.audio2)} >W</button>
      <button className="drum-pad" id='E' onClick={() => this.togglePlay(this.state.audios.audio3)} >E</button>
      <button className="drum-pad" id='A' onClick={() => this.togglePlay(this.state.audios.audio4)} >A</button>
      <button className="drum-pad" id='S' onClick={() => this.togglePlay(this.state.audios.audio5)} >S</button>
      <button className="drum-pad" id='D' onClick={() => this.togglePlay(this.state.audios.audio6)} >D</button>
      <button className="drum-pad" id='Z' onClick={() => this.togglePlay(this.state.audios.audio7)} >Z</button>
      <button className="drum-pad" id='X' onClick={() => this.togglePlay(this.state.audios.audio8)} >X</button>
      <button className="drum-pad" id='C' onClick={() => this.togglePlay(this.state.audios.audio9)} >C</button>

      <div id='display'>
      </div>
      </div>
      </div>
      
    );
  }
}
 
export default DrumMachine;