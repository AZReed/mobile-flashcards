import { AsyncStorage } from "react-native";

const DECKS_KEY = "MobileFlashcards:decks";

export function getDecks() {
	AsyncStorage.getItem(DECKS_KEY)
		.then(data => console.log(data))
}

export function saveDeckTitle(title){
	let foobar = {[title]: {title: title, questions: []}};
	AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(foobar))
}

/* getDeck
addCardToDeck */
