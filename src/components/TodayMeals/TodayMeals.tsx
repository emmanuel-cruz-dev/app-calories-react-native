import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Meal } from "../../types";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

import MealItem from "../MealItem";

type TodayMealsProps = {
  foods: Meal[];
};

const TodayMeals: FC<TodayMealsProps> = ({ foods }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comidas</Text>
      <ScrollView style={styles.content}>
        {foods?.map((meal: Meal, index) => (
          <MealItem key={`today-meal-item-${meal.name}-${index}`} {...meal} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  title: {
    fontSize: 16,
  },
  content: {
    marginVertical: 16,
  },
});

export default TodayMeals;
