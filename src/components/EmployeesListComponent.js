import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TableComponent from '../components/commonComponents/TableComponent';
import { fetchEmployees } from '../actions/loginActions';

class EmployeesListComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			employees: []
		}
		this.fetchEmployees = this.fetchEmployees.bind(this);
	}
	componentDidMount() {
		this.fetchEmployees();
	}
	fetchEmployees() {
		this.props.fetchEmployees((response) => {
			console.log('response', response);
			this.setState({
				employees: response.user
			})
		});
	}
	render() {
		return (
			<div>
				<TableComponent
					values={this.state.employees}
					tableHeader={['Id', 'Name', 'Age', 'Gender', 'Email', 'PhoneNo']}
				/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchEmployees
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(EmployeesListComponent);