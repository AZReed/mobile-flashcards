import React from "react";
import { StyleSheet } from "react-native";
import {
  H1,
  H3,
  Card,
  CardItem,
  Body,
  Content,
  Container,
  Text,
  Button
} from "native-base";

const CardQuiz = (props) => {
  const card = value => (
    <Card>
      <CardItem style={styles.cardPosition}>
        <Body>
          <H3>{props.remaining}</H3>
          <H1>
            {value.charAt(0).toUpperCase() + value.slice(1)}:{" "}
            {props.data[value]}
          </H1>
        </Body>
      </CardItem>
    </Card>
  );

	return (
		<Container>
			{props.showAnswerState === false ? (
				<Content>
					{card("question")}
					<Container style={{ flex: 1, alignSelf: "center" }}>
						<Button onPress={() => props.showAnswer()}>
							<Text>Show Answer</Text>
						</Button>
					</Container>
				</Content>
			) : (
				<Content>
					{card("answer")}
					<Container
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-around"
						}}
					>
						<Button success onPress={() => props.guess(true)}>
							<Text>Correct</Text>
						</Button>
						<Button danger onPress={() => props.guess(false)}>
							<Text>Incorrect</Text>
						</Button>
					</Container>
				</Content>
			)}
		</Container>
	);
}

export default CardQuiz;

const styles = StyleSheet.create({
  cardPosition: {
    flex: 1,
    alignItems: "center"
  }
});
