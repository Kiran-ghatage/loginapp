import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import EmployeesListComponent from './components//EmployeesListComponent';

const Routes = (
	<Switch>
		<Route exact path="/" component={LoginComponent} />
		<Route path="/employees" component={EmployeesListComponent} />
	</Switch>
);
export default Routes;
