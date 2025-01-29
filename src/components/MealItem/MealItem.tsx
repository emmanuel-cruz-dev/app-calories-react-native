import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Meal } from "../../types";
import { Button, Icon } from "@rneui/themed";

const MealItem: FC<Meal> = ({ calories, name, portion }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.portion}>{portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          icon={<Icon name="add-circle-outline" size={24} />}
          type="clear"
          style={styles.iconButton}
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
