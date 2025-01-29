import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const TodayCalories = () => {
  return (
    <View style={styles.container}>
      <View>
        <CircularProgress value={20} valueSuffix="%" />
      </View>
      <View>
        <Text>Calories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TodayCalories;
