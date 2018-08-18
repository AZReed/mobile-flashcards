import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, View, CardItem, Body, Content, Container, Text, Button } from "native-base";
import CardQuiz from "./CardQuiz";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class Quiz extends Component {
  state = {
    quizIndex: 0,
    answersGuess: [],
    showAnswer: false
  };

/*
  componentDidMount() {
    clearLocalNotification()
      .then(() => console.log("notifications cleared"))
  }
*/
  showAnswer() {
    this.setState({ showAnswer: true });
  }

  guess(bool) {
    let index = this.state.quizIndex + 1;
    const deck = this.props.navigation.state.params;

    let answersGuess = this.state.answersGuess;
    answersGuess.push(bool);

    if (this.state.quizIndex <= deck.questions.length) {
      this.setState({ quizIndex: index, showAnswer: false });
    }
  }

  goBack(param) {
    this.props.navigation.navigate("Decks");
  }

  startAgain() {
    this.setState({ 
      quizIndex: 0,
      answersGuess: [],
      showAnswerState: false
    });
  }

  result(){
    clearLocalNotification()
      .then(setLocalNotification)

    let correct = this.state.answersGuess.filter((bool) => bool === true).length;
    let result = (correct * 100 ) / this.state.answersGuess.length;
    result = Math.round(result * 100) / 100
    return result;
  }
 
  remaining(deck){
    return `${this.state.quizIndex + 1} / ${deck.questions.length}`
  }

  render() {
    const deck = this.props.navigation.state.params;
    return (
      <Container>
        <Content>
          <Text style={{alignSelf: 'center', fontWeight:'bold',fontSize: 60}}>{deck.title}</Text>
            {this.state.quizIndex < deck.questions.length ? (
                <CardQuiz
                  guess={bool => this.guess(bool)}
                  data={deck.questions[this.state.quizIndex]}
                  showAnswer={() => this.showAnswer()}
                  showAnswerState={this.state.showAnswer}
                  remaining={this.remaining(deck)}
                />
          ) : (
            <View>
              <Card>
                <CardItem>
                  <Body style={styles.result}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold'}}>
                      {this.result()}%
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <View style={styles.buttons}>
                <Button
                  full
                  style={{flex: 1}}
                  onPress={() => this.goBack()}>
                    <Text>Go to Decks</Text>
                </Button>
                <Button
                  full
                  success
                  style={{flex: 1}}
                  onPress={() => this.startAgain()}>
                    <Text>Start Over</Text>
                </Button>
              </View>
            </View>
          )}
          </Content>
      </Container>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 20
  },
  result: {
    flex: 1,
    alignItems: 'center'
  }
})
