import { Button, Icon } from "@rneui/themed";
import React, { FC } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

type AddFoodModalProps = {
  onClose: () => void;
  visible: boolean;
};

const AddFoodModal: FC<AddFoodModalProps> = ({ onClose, visible }) => {
  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      <View style={styles.container}>
        <View style={styles.content}>
          <Button icon={<Icon name="close" size={24} />} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    width: "75%",
  },
});

export default AddFoodModal;
