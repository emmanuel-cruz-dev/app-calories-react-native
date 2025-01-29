import React, { FC } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { Meal } from "../../types";
import { Button, Icon } from "@rneui/themed";
import useFoodStorage from "../../hooks/useFoodStorage";

type MealItemProps = Meal & {
  isAbleToAdd?: boolean;
  onCompletedAddRemove?: () => void;
  itemPosition?: number;
};

const MealItem: FC<MealItemProps> = ({
  calories,
  name,
  portion,
  isAbleToAdd,
  itemPosition,
  onCompletedAddRemove,
}) => {
  const { onSaveTodayFood, onDeleteTodayFood } = useFoodStorage();

  const handleIconPress = async () => {
    try {
      if (isAbleToAdd) {
        await onSaveTodayFood({ name, calories, portion });
        Alert.alert("Food added per day successfully");
      } else {
        await onDeleteTodayFood(itemPosition ?? -1);
        Alert.alert("Food removed per day successfully");
      }

      onCompletedAddRemove?.();
    } catch (error) {
      console.error(error);
      Alert.alert("Error adding food per day");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.portion}>{portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          icon={
            <Icon
              name={isAbleToAdd ? "add-circle-outline" : "close"}
              size={24}
            />
          }
          type="clear"
          style={styles.iconButton}
          onPress={handleIconPress}
        />
        <Text style={styles.calories}>{calories} cal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ade8af",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
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
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  portion: {
    fontSize: 14,
    color: "#808080",
    fontWeight: "500",
  },
  calories: {
    fontSize: 18,
  },
  iconButton: {
    marginBottom: -8,
  },
});

export default MealItem;
