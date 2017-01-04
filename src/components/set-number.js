import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import set from '../actions/set';

class SetNum extends Component {

	constructor(props) {
		super();
		this.state = {num: 1};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({num: +event.target.value});
		this.props.set(+event.target.value);
	}

	render() {
		return <input value={this.state.num} onChange={this.onInputChange} />
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({set}, dispatch);
}

export default connect(null, mapDispatchToProps)(SetNum);