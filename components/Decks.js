import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, AsyncStorage } from "react-native";
import {
  Container,
  Badge,
  Card,
  Content,
  CardItem,
  View,
  Body,
  Text
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { retrieveDecks } from "../actions";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

class Decks extends Component {
  componentDidMount() {
    this.props.retrieveDecks();
    //AsyncStorage.clear(()=>console.log('done'))
  }

  goToDeck = title => {
    this.props.navigation.navigate("Deck", this.props.decks[title]);
  };

  addDeck = () => {
    this.props.navigation.navigate("AddDeck");
  };

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.decks}>
          {this.props.decks &&
            Object.keys(this.props.decks).map((deck, num) => (
              <View key={decks[deck]["title"]} style={styles.item}>
                <TouchableOpacity
                  onPress={() => this.goToDeck(decks[deck]["title"])}
                >
                  <Text>
                    {decks[deck]["title"]} ({decks[deck]["questions"].length}{" "}
                    cards)
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
        <View style={styles.addButton}>
          <TouchableOpacity onPress={() => this.addDeck()}>
            <Text>Add Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ decks }) {
  console.log('DECKS',decks)
  return {
    decks: Object.assign({}, decks)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveDecks: () => dispatch(retrieveDecks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);

const styles = StyleSheet.create({
  decks: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: 100
  },
  item: {
    height: 25
  },
  addButton: {
    alignItems: "center",
    marginTop: 400
  }
});
