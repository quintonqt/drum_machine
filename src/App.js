import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="drum-machine">
				<div id="display"></div>
				<div id="pad-container"></div>
			</div>
		);
	}
}

export default App;

/* Drum Sounds
Open HH - https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3
Closed HH - https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3
Bass Drum - https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3
Snare - https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3
Side-Stick - https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3
*/
