import { AsyncStorage } from "react-native";

const DECKS_KEY = "MobileFlashcards:decks";

export const getDecks = callback =>
  AsyncStorage.getItem(DECKS_KEY).then(data => callback(JSON.parse(data)));

export const getDeck = (callback, title) =>
  AsyncStorage.getItem(DECKS_KEY).then(data => {
    let decks = JSON.parse(data);
    return callback(decks[title]);
  });

export const saveDeckTitle = (callback, title) => {
  console.log("api", title);
  let deck = { [title]: { title: title, questions: [] } };
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(deck)).then(data =>
    callback(data)
  );
};

export const addCardToDeck = (card, title) => {};

/* getDeck
addCardToDeck */
