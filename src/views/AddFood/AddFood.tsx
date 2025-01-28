import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Alert, ScrollView } from "react-native";
import Header from "../../components/Header";
import { Button, Icon, Input } from "@rneui/themed";
import AddFoodModal from "../../components/AddFoodModal";
import useFoodStorage from "../../hooks/useFoodStorage";
import { Meal } from "../../types";
import MealItem from "../../components/MealItem";

const AddFood = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [foods, setFoods] = useState<Meal[]>([]);
  const { onGetFood } = useFoodStorage();

  const loadFoods = async () => {
    try {
      const foodsReponse = await onGetFood();
      setFoods(foodsReponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFoods().catch(null);
  }, []);

  const handleModalClose = async (shouldUpdate?: boolean) => {
    if (shouldUpdate) {
      Alert.alert("Food added successfully");
      loadFoods();
    }
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addFoodContainer}>
        <View style={styles.legendContainer}>
          <Text style={styles.addFoodLegend}>Add Food</Text>
        </View>
        <View style={styles.addFoodButtonContainer}>
          <Button
            icon={<Icon name="add-circle-outline" color={"#fff"} />}
            radius={"lg"}
            color={"#4ecb71"}
            onPress={() => setVisible(true)}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Input placeholder="Apples, pie, soda..." />
        </View>
        <Button
          title="Search"
          color={"#ade8af"}
          titleStyle={styles.searchButtonTitle}
          radius={"lg"}
        />
      </View>
      <ScrollView style={styles.content}>
        {foods?.map((meal) => (
          <MealItem key={`my-meal-item-${meal.name}`} {...meal} />
        ))}
      </ScrollView>
      <AddFoodModal visible={visible} onClose={handleModalClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
  },
  addFoodContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  legendContainer: {
    flex: 1,
  },
  addFoodButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  addFoodLegend: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
    marginLeft: -12,
  },
  searchButtonTitle: {
    color: "#000",
    fontSize: 14,
  },
  content: {},
});

export default AddFood;
