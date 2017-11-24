import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

class Deck extends Component {
  componentDidMount() {
    console.log("mount DECK", this.props.navigation.state.params);
  }

  addCard = () => {
    console.log("add Card");
  };

  render() {
    const deck = this.props.navigation.state.params;
    console.log("deck", deck);
    return (
      <View style={styles.deck}>
        <Text>{deck.title} {deck.questions.length}</Text>
        <TouchableOpacity onPress={() => this.addCard()}>
          <Button>Add Card</Button>
        </TouchableOpacity>
      </View>
    );
  }
}

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
