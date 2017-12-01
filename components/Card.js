import React, { Component } from "react";
import { View, Text } from "react-native";

class Card extends Component {
  render() {
    return (
			<View>
				<Text>
					{this.props.data.question} - {this.props.data.answer}
				</Text>
			</View>
		);
  }
}

export default Card;
