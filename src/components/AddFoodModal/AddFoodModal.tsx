import { Button, Icon, Input } from "@rneui/themed";
import React, { FC, useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

type AddFoodModalProps = {
  onClose: () => void;
  visible: boolean;
};

type FormItemProps = {
  text: string;
  value: string;
};

const FormItem: FC<FormItemProps> = ({ text, value }) => {
  return (
    <View style={styles.formItem}>
      <View style={styles.inputContainer}>
        <Input value={value} />
      </View>
      <View style={styles.legendContainer}>
        <Text style={styles.legend}>{text}</Text>
      </View>
    </View>
  );
};

const AddFoodModal: FC<AddFoodModalProps> = ({ onClose, visible }) => {
  const [calories, setCalories] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [portion, setPortion] = useState<string>("");

  const staticInfo = [
    { id: 1, text: "CAL", value: calories },
    { id: 2, text: "Name", value: name },
    { id: 3, text: "Portion", value: portion },
  ];

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType={"slide"}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.closeContainer}>
            <Button
              icon={<Icon name="close" size={24} />}
              onPress={onClose}
              type="clear"
            />
          </View>

          {staticInfo.map((item) => (
            <FormItem text={item.text} value={item.value} key={item.id} />
          ))}
          <View style={styles.buttonContainer}>
            <Button
              title="Add"
              icon={<Icon name="add" size={24} color={"#fff"} />}
              color={"#4ecb71"}
              radius={"lg"}
            />
          </View>
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
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    alignItems: "flex-end",
  },
  formItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
  },
  legend: {
    fontWeight: "500",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default AddFoodModal;
