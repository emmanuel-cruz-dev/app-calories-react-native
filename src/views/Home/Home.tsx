import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

import Header from "../../components/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Meal, RootStackParamList } from "../../types/index";
import { StackNavigationProp } from "@react-navigation/stack";
import useFoodStorage from "../../hooks/useFoodStorage";
import TodayCalories, {
  TodayCaloriesProps,
} from "../../components/TodayCalories";
import TodayMeals from "../../components/TodayMeals";

const totalCaloriesPerDay = 2000;

const Home = () => {
  const [todayFood, setTodayFood] = useState<Meal[]>([]);
  const [todayStatistics, setTodayStatistics] = useState<TodayCaloriesProps>();
  const { onGetTodayFood } = useFoodStorage();
  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  const calculateTodayStatistics = async (meals: Meal[]) => {
    try {
      const caloriesConsumed = meals.reduce(
        (acum, curr) => acum + Number(curr.calories),
        0
      );
      const remainingCalories = totalCaloriesPerDay - caloriesConsumed;
      const percentage = (caloriesConsumed / totalCaloriesPerDay) * 100;

      setTodayStatistics({
        consumed: caloriesConsumed,
        remaining: remainingCalories,
        percentage,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const loadTodayFood = useCallback(async () => {
    try {
      const todayFoodResponse = (await onGetTodayFood()) as Meal[];

      calculateTodayStatistics(todayFoodResponse);
      setTodayFood(todayFoodResponse);
    } catch (error) {
      setTodayFood([]);
      console.error(error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTodayFood().catch(null);
    }, [loadTodayFood])
  );

  const handleAddCaloriesPress = () => {
    navigate("AddFood");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.caloriesContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.caloriesLegend}>Calories</Text>
        </View>
        <View style={styles.rightContainer}>
          <Button
            radius={"lg"}
            icon={<Icon name="add-circle-outline" color={"#fff"} />}
            color={"#4ecb71"}
            onPress={handleAddCaloriesPress}
          />
        </View>
      </View>
      <TodayCalories {...todayStatistics} />
      <TodayMeals foods={todayFood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
  },
  caloriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  caloriesLegend: {
    fontSize: 20,
  },
});

export default Home;
