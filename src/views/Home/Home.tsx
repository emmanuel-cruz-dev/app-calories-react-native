import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

import Header from "../../components/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View style={styles.leftContainer}>
          <Text>Calories</Text>
        </View>
        <View style={styles.rightContainer}>
          <Button>Add Food</Button>
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
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
});

export default Home;
