import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "./Card";

class Quiz extends Component {

  state = {
    foobar: 'hello',
    quetions: null
  }

  componentWillMount() {
    const deck = this.props.navigation.state.params;
    let questions = this.getQuestions(deck.questions);
    this.setState({ questions })
  }
/* 
  componentDidMount() {
    const deck = this.props.navigation.state.params;
    let questions = this.getQuestions(deck.questions);
    this.setState({ questions })
  } */

  *getQuestions(deck) {
    for (const d of deck) {
      yield { question: d.question, answer: d.answer };
    }
  }

  card(questions) {
    let card = questions.next();
    console.log('done?',card)
    if (card.done === true) {
      return <Text>Fin </Text>

      /* 

      MOSRTAR PREGUNTAS QUE FALTAN
      
      
        En este punto tengo que preguntar si empezar otra vez
        mostrar el puntaje
        ...
      */
      
    }
    return <Card data={card.value} />;
  }

  guess(bool) {
    this.setState({foobar: 'byee'})
  }

  renderMe(st){
    return <Text>{st}</Text>
  }

  render() {  
    const deck = this.props.navigation.state.params;
    /*let questions = this.getQuestions(deck.questions); */
    console.log('QUIZ RENDER', this.state.questions)
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        {/*         <View>
          {deck.questions.map((d, i) => (
            <Text key={i}>
              {d.question}
            </Text>
          ))}
        </View> */}
        <View id='cardView'>

          {this.card(this.state.questions)}
          {/* <Text>{this.renderMe(this.state.foobar)}</Text> */}
        </View>

        <View
          style={styles.buttons}
        >
          <Button
            style={styles.correctButton}
            onPress={() => this.guess(true)}
            title="correct"
            />
          <Button
            style={styles.incorrectButton}
            onPress={() => this.guess(false)}
            title="incorrect"
            />
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
  buttons: {
    width: 100,
    height: 200,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 300
  },
  correctButton: {
    width: 100,
    height: 50,
  },
  incorrectButton: {
    width: 100,
    height: 50,
  }
});
