import React, { Component } from 'react';
import Number from './number';
import Counter from './counter';
import SetNum from './set-number'

export default class App extends Component {
	render() {
		return (
			<div>
				<Number />
				<Counter sign='add' />
				<Counter sign='minus' />
				<SetNum />
			</div>
		);
	}
}