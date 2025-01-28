import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

const AddFoodModal = () => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.container}>
        <Text>Add food</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddFoodModal;
