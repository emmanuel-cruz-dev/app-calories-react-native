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
  container: {},
  leftContainer: {},
  rightContainer: {},
  name: {},
  subtitle: {},
  profileImage: {},
});

export default Header;
