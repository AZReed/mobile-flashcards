import { AsyncStorage } from "react-native";

const DECKS_KEY = "MobileFlashcards:decks";

export const getDecks = (callback) =>
	AsyncStorage.getItem(DECKS_KEY)
		.then(data => callback(JSON.parse(data)))

export const getDeck = (callback) =>
	AsyncStorage.getItem(DECKS_KEY)
		.then(data => callback())

export function saveDeckTitle(title){
	let foobar = {[title]: {title: title, questions: []}};
	AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(foobar))
}

/* getDeck
addCardToDeck */
