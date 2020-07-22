import React from 'react';
import './App.css';

const soundKeys = [
	{
		keyiD: 'Q',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
		desc: 'Closed HH',
	},
	{
		keyiD: 'W',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
		desc: 'Clap',
	},
	{
		keyiD: 'E',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
		desc: 'Long, Open HH',
	},
	{
		keyiD: 'A',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
		desc: 'Side-Stick',
	},
	{
		keyiD: 'S',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
		desc: 'Snare',
	},
	{
		keyiD: 'D',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
		desc: 'Short, Open HH',
	},
	{
		keyiD: 'Z',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
		desc: "Kick 'n' Hat",
	},
	{
		keyiD: 'X',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
		desc: 'Reg Kick',
	},
	{
		keyiD: 'C',
		soundBit: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
		desc: 'Punchy Kick',
	},
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keySet: soundKeys,
		};
	}

	render() {
		return (
			<div id="drum-machine">
				<div id="display"></div>
				<div id="pad-container">
					{this.state.keySet.map((drumPad, i) => {
						return (
							<DrumPad keyiD={drumPad.keyiD} soundBit={drumPad.soundBit} desc={drumPad.desc} />
						);
					})}
				</div>
			</div>
		);
	}
}

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
	}

	playSound() {}

	handleKeyPress(event) {
		if (event.keyCode === this.props.keyCode) {
			this.playSound();
		}
	}

	render() {
		return (
			<div className="drum-pad" onClick={this.playSound} id={this.props.desc}>
				<audio src={this.props.soundBit}></audio>
				{this.props.keyiD}
			</div>
		);
	}
}

export default App;

/* Drum Sounds
Long Open HH - https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3
Closed HH - https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3
Bass Drum - https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3
Snare - https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3
Side-Stick - https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3
Hard Kick - https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3
Clap - https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3
Kick n Hat - https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3
Soft Open HH - https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3
*/
