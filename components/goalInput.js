import React, {useState} from "react";
import {Text, View, Button, TextInput, StyleSheet, Modal} from "react-native";

export default function GoalInput(props) {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.container}>
				<TextInput
					placeholder='Write your goal'
					style={styles.inputContainer}
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='CANCEL' color='red' onPress={props.cancel} />
					</View>
					<View style={styles.button}>
						<Button
							title='ADD'
							style={styles.addButton}
							value={enteredGoal}
							onPress={addGoalHandler}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		width: "80%",
		marginBottom: 5,
	},
	button: {
		width: "40%",
	},

	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "60%",
	},
});
