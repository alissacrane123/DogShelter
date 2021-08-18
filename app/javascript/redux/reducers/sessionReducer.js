import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";

const initialState = Object.freeze({
	id: null,
});

const sessionReducer = (state = initialState, action) => {
	Object.freeze(state);
  let nextState = Object.assign({}, state);

	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			nextState = Object.assign(nextState, action.payload);
      if (action.payload.username) {
        nextState.isShelter = true;
      }
      return nextState;

    // case RECEIVE_SHELTER:
    //   nextState = Object.assign(nextState, action.payload);
    //   nextState.isShelter = true;
    //   return nextState;

		default:
			return state;
	}
};

export default sessionReducer;
