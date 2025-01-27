import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View style={styles.leftContainer}></View>
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
});

export default Home;
