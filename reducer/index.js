import { RETRIEVE_DECKS, RETRIEVE_DECK, ADD_DECK, ADD_CARD } from "../actions";

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
			return {
				decks: Object.assign(state.decks || {}, action.deck)
			}

		case ADD_CARD:
			return {
				cards: action.cards
			}

    default:
      return state;
  }
}

export default decks;