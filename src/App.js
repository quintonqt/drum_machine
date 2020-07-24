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
				<h1>ThunderDrums</h1>
				<div id="control-panel">
					<div id="display"></div>
					<div id="pad-container">
						{this.state.keySet.map((drumPad) => {
							return (
								<DrumPad keyiD={drumPad.keyiD} soundBit={drumPad.soundBit} desc={drumPad.desc} />
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

const enabled = {
	backgroundColor: 'white',
	color: 'black',
};

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padStatus: null,
		};

		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillMount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	padEnable() {
		if (this.state.padStatus === null) {
			this.setState({
				padStatus: enabled,
			});
		} else {
			this.setState({
				padStatus: null,
			});
		}
	}

	playSound(event) {
		const sound = document.getElementById(this.props.keyiD);
		sound.currentTime = 0;
		sound.play();
		this.padEnable();
		setTimeout(() => this.padEnable(), 100);
		document.getElementById('display').textContent = this.props.desc;
	}

	handleKeyPress(e) {
		if (e.key.toUpperCase() === this.props.keyiD) {
			this.playSound();
		}
	}

	render() {
		return (
			<div
				className="drum-pad"
				onClick={this.playSound}
				id={this.props.desc}
				style={this.state.padStatus}
			>
				<audio src={this.props.soundBit} className="clip" id={this.props.keyiD}></audio>
				{this.props.keyiD}
			</div>
		);
	}
}

export default App;
