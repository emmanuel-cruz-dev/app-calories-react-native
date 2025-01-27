import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const staticInfo = {
  name: "Emmanuel Cruz",
  uri: "https://github.com/emmanuel-cruz-dev.png",
};

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>Hello {staticInfo.name}</Text>
        <Text style={styles.subtitle}>Welcome back to your goal</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={{ uri: staticInfo.uri }} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#808080",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
});

export default Header;
