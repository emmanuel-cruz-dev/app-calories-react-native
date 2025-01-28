import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealItem = () => {
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
