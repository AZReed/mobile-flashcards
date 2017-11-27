import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
//import { retrieveDeck } from "../actions";
//import { connect } from "react-redux";

class Deck extends Component {
  /*   componentDidMount() {
    const deck = this.props.navigation.state.params;
    this.props.retrieveDeck(deck.title)
  } */

  addCard = () => {
    const deck = this.props.navigation.state.params;
    console.log(deck)
    this.props.navigation.navigate("AddCard", deck);
  };

  startQuiz = () => {};

  render() {
    const deck = this.props.navigation.state.params;
    return (
      <View style={styles.deck}>
        <Text>
          {deck.title} {deck.questions.length}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <View
            style={{ marginTop: 100, width: 200, height: 50, backgroundColor: "powderblue" }}
          >
            <Button
              onPress={() => this.addCard()}
              title="Add Card"
            />
          </View>
          <View
            style={{ marginTop: 150, width: 200, height: 50, backgroundColor: "powderblue" }}
          >
            <Button
              onPress={() => this.startQuiz()}
              title="Start Quiz"
            />
          </View>
        </View>
      </View>
    );
  }
}
/* 
function mapDispatchToProps(dispatch) {
  return {
    retrieveDeck: deck => dispatch(retrieveDeck(deck))
  }
} */

//export default connect(null, mapDispatchToProps)(Deck);
export default Deck;

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: "center",
    width: 100,
    height: 100,
    alignItems: "center",
    marginTop: 100
  }
});
