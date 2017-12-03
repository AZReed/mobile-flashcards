import React, { Component } from "react";
//import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { StyleSheet,TouchableOpacity } from "react-native";
import { Toast, Card, CardItem, Body, Header, View, Text, Container, Content, Button } from "native-base";
import { retrieveDeck } from "../actions";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

class Deck extends Component {
  state = {
    showToast: false
  }
  
  static navigationOptions = ({navigation}) => ({
    title: 'Deck',
    headerLeft: (
      <Container style={styles.center}>
        <Ionicons name='ios-arrow-back' style={{marginLeft:10, color: '#3d94d9'}} size={32}/>
        <Button transparent onPress={() => navigation.navigate("Decks")}>
          <Text>Decks</Text>
        </Button>
      </Container>
    )
  })

  componentDidMount() {
    const deck = this.props.navigation.state.params;
    this.props.retrieveDeck(deck.title)
  }

  addCard = () => {
    let deck = this.props.deck
    this.props.navigation.navigate("AddCard", deck);
  };

  startQuiz = () => {
    let deck = this.props.deck
    
    if (deck.questions.length === 0) {
      Toast.show({
        text: 'No Cards to Quiz!',
        position: 'bottom',
        buttonText: 'Okay'
      })
      return;
    }
    this.props.navigation.navigate("Quiz", this.props.deck);
  };

  render() {
    const deck = this.props.deck;
    return (
      <Container style={{marginTop: 50}}>
        <Content>
          <Card>
            <CardItem>
              <Body style={{flex:1, alignItems: 'center'}}>
                <Text style={{fontWeight:'bold',fontSize: 60}}>
                  {deck.title || ''}
                </Text>
                <Text style={{fontSize: 20}}>
                  {deck.questions && deck.questions.length} cards
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Container style={styles.buttons}>
            <Button onPress={() => this.addCard()}>
              <Text>Add Card</Text>
            </Button>
            <Button success onPress={() => this.startQuiz()}>
              <Text>Start Quiz</Text>
            </Button>
        </Container>
      </Container>
    );
  }
}

function mapStateToProps(decks){
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

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
