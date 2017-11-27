import { getDecks, getDeck } from "../utils/api";

export const RETRIEVE_DECKS = "RETRIEVE_DECKS";
export const retrieveDecks = () => {
  return dispatch => {
    getDecks(function(data) {
      dispatch({
        type: RETRIEVE_DECKS,
        decks: data
      });
    });
  };
};

export const RETRIEVE_DECK = "RETRIEVE_DECK";
export const retrieveDeck = deck => {
  return dispatch => {
    getDeck(function(data) {
      dispatch({
        type: RETRIEVE_DECK,
        deck: data
      })
    }, deck);
  };
};
