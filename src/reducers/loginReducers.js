import { AUTH_CHECK, FETCH_EMPLOYEES } from '../actions/types';

const initialState = {
	authCheck: {},
	employeers: []
}
export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH_CHECK:
			return {
				...state,
				login: action.payload
			}
		case FETCH_EMPLOYEES:
			return {
				...state,
				login: action.payload
			}
		default:
			return state;
	}
}
