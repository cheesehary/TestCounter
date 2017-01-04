import React, { Component } from 'react';
import { connect } from 'react-redux';

class Number extends Component {
	render() {
		return (
			<div>{this.props.num}</div>
		);
	}
}

function mapStateToProps (state) {
	return {num: state.num};
}

export default connect(mapStateToProps)(Number);