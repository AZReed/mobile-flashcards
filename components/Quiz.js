import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "./Card";

class Quiz extends Component {
  state = {
    quizIndex: 0,
    answersGuess: [],
    showAnswer: false
  };

  componentWillMount() {
    const deck = this.props.navigation.state.params;
    this.setState({ questions: deck.questions });
  }

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
    let correct = this.state.answersGuess.filter((bool) => bool === true).length;
    let result = (correct * 100 ) / this.state.answersGuess.length;
    return <Text>{result} %</Text>
  }

  render() {
    const deck = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <View>
          {this.state.quizIndex < deck.questions.length ? (
            <View style={styles.card}>
              <Text>
                {this.state.quizIndex + 1}/{deck.questions.length}
              </Text>
              <Card
                guess={bool => this.guess(bool)}
                data={deck.questions[this.state.quizIndex]}
                showAnswer={() => this.showAnswer()}
                showAnswerState={this.state.showAnswer}
              />
            </View>
          ) : (
            <View>
              <View>
                {this.result()}
              </View>
              <View style={styles.buttons}>
                <View>
                  <Button title="Go to Decks" onPress={() => this.goBack()} />
                </View>
                <View>
                  <Button title="Start Over" onPress={() => this.startAgain()} />
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: 100
  },
  addButton: {
    alignItems: "center",
    marginTop: 400
  },
  card: {
    width: 200,
    height: 400,
    flex: 1,
    justifyContent: "space-between",
    marginTop: 100
  },
  buttons: {
    width: 100,
    height: 200,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100
  },
  correctButton: {
    width: 100,
    height: 50
  },
  incorrectButton: {
    width: 100,
    height: 50
  }
});
