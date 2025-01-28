import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/index";
import { StackNavigationProp } from "@react-navigation/stack";

const Home = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  const handleAddCaloriesPress = () => {
    console.log("Add calories pressed");
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
            type="solid"
            icon={<Icon name="add-circle-outline" color={"#fff"} />}
            color={"#4ecb71"}
            onPress={handleAddCaloriesPress}
          ></Button>
        </View>
      </View>
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
