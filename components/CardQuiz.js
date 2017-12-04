import React, { Component } from "react";
//import { View, Text, StyleSheet, Button } from "react-native";
import { StyleSheet } from "react-native";
import { H1, H3, Card, CardItem, Body, Content, Container, Text, Button } from "native-base";

class CardQuiz extends Component {

	card = (value) =>
		<Card>
			<CardItem style={styles.cardPosition}>
				<Body>
					<H3>
						{this.props.remaining}
					</H3>
					<H1>
						{value.charAt(0).toUpperCase() + value.slice(1)}: {this.props.data[value]}
					</H1>
				</Body>
			</CardItem>
		</Card>

  render() {
    return (
			<Container>
				{this.props.showAnswerState === false ?
						(
						<Content>
							{this.card('question')}
							<Container style={{flex: 1, alignSelf: 'center'}}>
								<Button onPress={() => this.props.showAnswer()}>
									<Text>Show Answer</Text>
								</Button>
							</Container>
						</Content>
						)
						: (
						<Content>
							{this.card('answer')}
							<Container style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
								<Button success onPress={() => this.props.guess(true)}>
									<Text>Correct</Text>
								</Button>
								<Button danger onPress={() => this.props.guess(false)}>
									<Text>Incorrect</Text>
								</Button>
							</Container>
						</Content>
						)
				}
			</Container>
		);
  }
}

export default CardQuiz;

const styles = StyleSheet.create({
  cardPosition: {
		flex: 1,
		alignItems: 'center'
	}
});
