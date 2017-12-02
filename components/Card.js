import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Card extends Component {

  render() {
    return (
			<View>
				{this.props.showAnswerState === false ?
						(
						<View>
							<Text>
								{this.props.data.question}
							</Text>
							<View>
								<Button
									title='Show Answer'
									onPress={() => this.props.showAnswer()}
									/>
							</View>
						</View>
						)
						: (
						<View>
							<Text>
								{this.props.data.answer}
							</Text>
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
						)
				}
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
});
