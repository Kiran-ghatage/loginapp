import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginFormComponent from './commonComponents/LoginFormComponent';
import AlertComponent from './commonComponents/AlertComponent';
import { authCheck } from '../actions/loginActions';

class LoginComponent extends Component {
	constructor() {
		super()
		this.state = {
			userName: '',
			password: ''
		}
		this.authCheck = this.authCheck.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	authCheck = () => {
		this.props.authCheck((response) => {
			if (response.userName === this.state.userName
				&& response.password === this.state.password) {
				window.location = '/employees';
			}
			else {
				alert('Not valid user..!')
			}
		})
	}
	handleChange = input => event => {
		this.setState({
			[input]: event.target.value
		});
	}

	render() {
		const { userName, password } = this.state;
		const values = { userName, password };
		return (
			<div>
				<LoginFormComponent
					handleChange={this.handleChange}
					values={values}
					authCheck={this.authCheck}
				/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		authCheck
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginComponent);