import { getDecks } from "../utils/api";

export const RETRIEVE_DECKS = "RETRIEVE_DECKS";
export const retrieveDecks = () => {

  return dispatch => {
    getDecks(function(data){
      dispatch({
        type: RETRIEVE_DECKS,
        decks: data
      })
    })
  }
  
/*   getDecks(function(data) {
    return dispatch => {
      dispatch({
        type: RETRIEVE_DECKS,
        decks: getDecks()
      });
    };
  }); */
  //let foobar = JSON.parse(decks);

  //console.log("decks action", foobar['React']);

  /*   return {
    type: RETRIEVE_DECKS,
    decks: 'foobar'
  } */
  /*   return dispatch => {
    dispatch({
      type: RETRIEVE_DECKS,
      decks: getDecks()
    }); */
};
