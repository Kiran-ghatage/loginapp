import { AUTH_CHECK, FETCH_EMPLOYEES } from './types';
import { loginCredentials, employees } from './dataSource';

export const authCheck = (callBack) => dispatch => {
    dispatch({
        type: AUTH_CHECK,
        payload: loginCredentials
    })
    callBack(loginCredentials);
}

export const fetchEmployees = (callBack) => dispatch => {
    dispatch({
        type: FETCH_EMPLOYEES,
        payload: employees
    })
    callBack(employees);
}