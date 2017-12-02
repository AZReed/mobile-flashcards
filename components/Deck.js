import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { retrieveDeck } from "../actions";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

class Deck extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Deck',
    headerLeft: (
      <View style={styles.center}>
        <Ionicons name='ios-arrow-back' style={{marginLeft:10, color: '#3d94d9'}} size={32}/>
        <Button
          title='Decks'
          onPress={() => navigation.navigate("Decks")}
        />
      </View>
    )
  })

  componentDidMount() {
    //console.log('DECK did mount',this.props.navigation.state.params)  
    //console.log(this.props.navigation.state.key)
    const deck = this.props.navigation.state.params;
    this.props.retrieveDeck(deck.title)
  }

  componentDidUpdate(){
    //console.log('DECK did UPDATE', this.props.deck)
  }

  addCard = () => {
    //const deck = this.props.navigation.state.params;
    let deck = this.props.deck
    this.props.navigation.navigate("AddCard", deck);
  };
  
  startQuiz = () => {
    this.props.navigation.navigate("Quiz", this.props.deck);
  };

  render() {
    //const deck = this.props.navigation.state.params;
    const deck = this.props.deck;
    return (
      <View style={styles.deck}>
        <Text>
          {deck.title || ''} {deck.questions && deck.questions.length}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <View
            style={{
              marginTop: 100,
              width: 200,
              height: 50,
              backgroundColor: "powderblue"
            }}
          >
            <Button onPress={() => this.addCard()} title="Add Card" />
          </View>
          <View
            style={{
              marginTop: 150,
              width: 200,
              height: 50,
              backgroundColor: "powderblue"
            }}
          >
            <Button onPress={() => this.startQuiz()} title="Start Quiz" />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(decks){
  //console.log('Map DECK',decks.deck)
  return {
    deck: decks.deck || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveDeck: title => dispatch(retrieveDeck(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
//export default Deck;

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: "center",
    width: 100,
    height: 100,
    alignItems: "center",
    marginTop: 100
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
