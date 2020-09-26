import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 }
	}

	add() {
		// 以下的 setState 会被合并
		this.setState({ number: this.state.number + 1 });
		console.log(this.state);//0
		this.setState({ number: this.state.number + 1 });
		console.log(this.state);//0
		setTimeout(() => {
			// 以下的 setState 不会被合并
			this.setState({ number: this.state.number + 1 });
			console.log(this.state);//2
			this.setState({ number: this.state.number + 1 });
			console.log(this.state);//3
		});
	}
	render() {
		return <button onClick={this.add.bind(this)}>
			{this.props.name}:{this.state.number}
		</button>;
	}
}

ReactDOM.render(
	<Counter name={'Rogan'} />,
	document.getElementById('root')
);