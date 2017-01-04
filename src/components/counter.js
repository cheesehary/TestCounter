import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import calc from '../actions/calc';

class Counter extends Component {
	constructor(props) {
		super();
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick () {
		if(this.props.sign == 'add')
			this.props.calc(this.props.setNum);
		else if(this.props.sign == 'minus')
			this.props.calc(-this.props.setNum);
	}

	render () {
		return (
			<button onClick={this.onButtonClick} />
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({calc}, dispatch);
}

function mapStateToProps(state) {
	return {setNum: state.setNum};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);