import { getDecks, getDeck, addCardToDeck, saveDeckTitle } from "../utils/api";

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
      });
    }, deck);
  };
};

export const ADD_DECK = "ADD_DECK";
export const addDeck = title => {
  return dispatch => {
    saveDeckTitle(title, function(deck) {
      dispatch({
        type: ADD_DECK,
        deck: deck
      });
    });
  };
};

export const ADD_CARD = "ADD_CARD";
export const addCard = (title, card) => {
  return dispatch => {
    addCardToDeck(card);
    dispatch({
      type: ADD_CARD,
      card
    });
  };
};
