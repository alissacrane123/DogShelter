import { RECEIVE_DOG, RECEIVE_DOGS } from "../actions/dogActions";

const initialState = {}

const dogReducer = (state = initialState, action) => {
	Object.freeze(state);
	let nextState = Object.assign({}, state);

	switch (action.type) {
		case RECEIVE_DOG:
			nextState[action.payload.id] = action.payload;
      return nextState;

    case RECEIVE_DOGS:
      return Object.assign(nextState, action.payload)

		default:
			return state;
	}
};

export default dogReducer;
