import { SET_MODAL, SET_MODALS } from "../actions/uiActions";
import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';

const initialState = {
  modal: null
};

const uiReducer = (state = initialState, action) => {
	Object.freeze(state);
	let nextState = Object.assign({}, state);

	switch (action.type) {
		case SET_MODAL:
			nextState.modal = action.modal
			return nextState;

    case RECEIVE_CURRENT_USER:
      return {}

		default:
			return state;
	}
};

export default uiReducer;
