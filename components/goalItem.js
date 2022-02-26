import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

export default function GoalItem(props) {
	return (
		<TouchableOpacity onLongPress={props.onDelete} activeOpacity={0.8}>
			<View style={styles.goalsList}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	goalsList: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
	},
});
