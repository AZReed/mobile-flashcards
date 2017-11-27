import { RETRIEVE_DECKS, RETRIEVE_DECK, ADD_DECK } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
		case RETRIEVE_DECKS:
			return {
				...state,
				decks: action.decks
			}

		case RETRIEVE_DECK:
			return {
				...state,
				deck: action.deck
			}

		case ADD_DECK:
			console.log('reducer', action)
			return {
				...state,
				newDeck: action.deck
			}

    default:
      return state;
  }
}

export default decks;