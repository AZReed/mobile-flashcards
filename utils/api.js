import { AsyncStorage } from "react-native";

const DECKS_KEY = "MobileFlashcards:decks";

export const getDecks = callback =>
  AsyncStorage.getItem(DECKS_KEY).then(data => callback(JSON.parse(data)));

export const getDeck = (title, callback) =>
  AsyncStorage.getItem(DECKS_KEY).then(data => {
    let decks = JSON.parse(data);
    callback(decks[title]);
  });

export const saveDeckTitle = (title, callback) => {
  let deck = { [title]: { title: title, questions: [] } };
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(deck)).then(() => {
    return callback(deck);
  });
};

export const addCardToDeck = (title, card, callback) => {
  let questions = { question: card.question, answer: card.answer };

  getDeck(title, function(deck) {
    deck.questions.push(questions);
    let new_deck = { [title]: deck };
    AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(new_deck)).then(() =>
      callback(new_deck)
    );
  });
};
