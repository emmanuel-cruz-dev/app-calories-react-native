import { Button, Icon, Input } from "@rneui/themed";
import React, { FC, useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

type AddFoodModalProps = {
  onClose: () => void;
  visible: boolean;
};

type FormItemProps = {
  paragraph: string;
  value: string;
  setter: (text: string) => void;
};

const FormItem: FC<FormItemProps> = ({ paragraph, value, setter }) => {
  return (
    <View style={styles.formItem}>
      <View style={styles.inputContainer}>
        <Input value={value} onChangeText={(text: string) => setter(text)} />
      </View>
      <View style={styles.legendContainer}>
        <Text style={styles.legend}>{paragraph}</Text>
      </View>
    </View>
  );
};

const AddFoodModal: FC<AddFoodModalProps> = ({ onClose, visible }) => {
  const [calories, setCalories] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [portion, setPortion] = useState<string>("");

  const staticInfo = [
    { id: 1, text: "CAL", value: calories, setter: setCalories },
    { id: 2, text: "Name", value: name, setter: setName },
    { id: 3, text: "Portion", value: portion, setter: setPortion },
  ];

  useEffect(() => {
    setCalories("");
    setName("");
    setPortion("");
  }, [visible]);

  const handleAddPress = () => {
    console.log("Add food pressed");
    onClose();
  };

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
            <FormItem
              paragraph={item.text}
              value={item.value}
              key={item.id}
              setter={item.setter}
            />
          ))}
          <View style={styles.buttonContainer}>
            <Button
              title="Add"
              icon={<Icon name="add" size={24} color={"#fff"} />}
              color={"#4ecb71"}
              radius={"lg"}
              onPress={handleAddPress}
              disabled={!calories.trim() || !name.trim() || !portion.trim()}
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
