import { RETRIEVE_DECKS, RETRIEVE_DECK, ADD_DECK, ADD_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_DECKS:
      return {
        ...state,
        decks: action.decks
      };

    case RETRIEVE_DECK:
      return {
        ...state,
        deck: action.deck
      };

    case ADD_DECK:
      return {
        ...state,
        decks: Object.assign(state.decks || {}, action.deck)
        //deck: action.deck
      };

	case ADD_CARD:
	  state.decks[action.deck.title] = action.deck;
      return {
        ...state,
        deck: action.deck
      };

    default:
      return state;
  }
}

export default decks;
