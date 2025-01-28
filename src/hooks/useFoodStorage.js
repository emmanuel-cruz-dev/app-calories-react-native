import AsyncStorage from "@react-native-async-storage/async-storage";

const useFoodStorage = () => {
  const handleSaveFood = (food) => {
    AsyncStorage.setItem("food", JSON.stringify(food));
  };

  const handleGetFood = () => {
    AsyncStorage.getItem("food").then((value) => {
      console.log(value);
    });
  };

  return {
    onSaveFood: handleSaveFood,
    onGetFood: handleGetFood,
  };
};

// Guardar información de los alimentos
// Método para obtener info de los alimentos

export default useFoodStorage;
