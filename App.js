import React, {useState} from "react";
import {StyleSheet, View, FlatList, Button} from "react-native";
import GoalInput from "./components/goalInput";
import GoalItem from "./components/goalItem";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isMode, setIsMode] = useState(false);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals([
			...courseGoals,
			{id: Math.random().toString(), value: goalTitle},
		]);
		setIsMode(false);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((courseGoals) => {
			return courseGoals.filter((goal) => goal.id !== goalId);
		});
	};

	const cancelGoal = () => {
		setIsMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title='add new goal' onPress={() => setIsMode(!isMode)} />
			<GoalInput
				visible={isMode}
				onAddGoal={addGoalHandler}
				cancel={cancelGoal}
			/>
			<FlatList
				data={courseGoals}
				keyExtractor={(item) => item.id}
				renderItem={(itemData) => (
					<GoalItem
						title={itemData.item.value}
						onDelete={removeGoalHandler.bind(this, itemData.item.id)}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {padding: 50},
});
