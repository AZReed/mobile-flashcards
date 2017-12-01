import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "./Card";

class Quiz extends Component {
  state = {
    quizIndex: 0,
  };

  componentWillMount() {
    const deck = this.props.navigation.state.params;
    this.setState({ questions: deck.questions });
  }

  guess(bool) {
    console.log('state', this.state)
    let index = this.state.quizIndex + 1;
    const deck = this.props.navigation.state.params;

    if (this.state.quizIndex <= deck.questions.length ) {
      this.setState({ quizIndex: index });
    }

  }

  foobar(param) {
    console.log('foobar', param)
  }

  startAgain() {
    this.setState({ quizIndex: 0})
  }

  render() {
    const deck = this.props.navigation.state.params;
    //console.log('QUIZ RENDER', this.state.questions)
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <View>
          {this.state.quizIndex < deck.questions.length ?
            (
              <View
                style={styles.card}
              >
                <Text>{this.state.quizIndex + 1}/{deck.questions.length}</Text>
                <Card
                  data={deck.questions[this.state.quizIndex]}
                  guess={this.guess}
                />
              </View>
            )
            : <Button
                title='Start Over'
                onPress={this.guess}
              />
          }
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
  }
});
