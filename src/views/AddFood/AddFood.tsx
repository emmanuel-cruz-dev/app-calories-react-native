import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import { Button, Icon } from "@rneui/base";

const AddFood = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addFoodContainer}>
        <View style={styles.legendContainer}>
          <Text>Add food</Text>
        </View>
        <View style={styles.addFoodButtonContainer}>
          <Button
            icon={<Icon name="add-circle-outline" color={"#fff"} />}
            radius={"lg"}
            color={"#4ecb71"}
          ></Button>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
});

export default AddFood;
