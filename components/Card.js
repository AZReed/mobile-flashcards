import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Card extends Component {
  render() {
    return (
			<View>
				<Text>
					{this.props.showAnswer ?
						this.props.data.question
						: this.props.data.answer
					}
					{this.props.data.question} - {this.props.data.answer}
				</Text>

				<View style={{marginTop: 50}}>
					<Button
						title='Show Answer'
						onPress={() => this.showAnswer()}
						/>
				</View>
				<View style={styles.buttons}>
					<Button
						style={styles.correctButton}
						onPress={() => this.props.guess(true)}
						title="correct"
					/>
					<Button
						style={styles.incorrectButton}
						onPress={() => this.props.guess(false)}
						title="incorrect"
					/>
				</View>

			</View>
		);
  }
}

export default Card;

const styles = StyleSheet.create({
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
  },
  card: {
    width: 200,
    height: 400,
    flex: 1,
    justifyContent: "space-between",
    marginTop: 100
  }
});
