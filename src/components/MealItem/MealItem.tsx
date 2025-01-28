import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Meal } from "../../types";

const MealItem: FC<Meal> = ({ calories, name, portion }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}></View>
      <View style={styles.rightContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  leftContainer: {},
  rightContainer: {},
});

export default MealItem;
