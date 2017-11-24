import { RETRIEVE_DECKS } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
		case RETRIEVE_DECKS:
			console.log('reducer',action)
			return {
				...state,
				decks: action.decks
			}

    default:
      return state;
  }
}

export default decks;