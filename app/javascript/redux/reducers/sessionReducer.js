import {
	RECEIVE_USER
} from "../actions/sessionActions";

const initialState = Object.freeze({
	id: null,
});

const sessionReducer = (state = initialState, action) => {
	Object.freeze(state);
  let nextState = Object.assign({}, state);

	switch (action.type) {
		case RECEIVE_USER:
			return Object.assign(nextState, action.payload);

		default:
			return state;
	}
};

export default sessionReducer;
