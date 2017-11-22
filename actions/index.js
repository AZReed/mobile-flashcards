import { getDecks } from "../utils/api";

export const RETRIEVE_DECKS = "RETRIEVE_DECKS";
export function retrieveDecks() {
    let decks = getDecks();
    return {
        type: RETRIEVE_DECKS,
        decks
    }
}