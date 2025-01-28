import AsyncStorage from "@react-native-async-storage/async-storage";

const MY_FOOD_KEY = "@MyFood:Key";

const useFoodStorage = () => {
  const handleSaveFood = async () => {
    const currentSavedFood = await AsyncStorage.getItem(MY_FOOD_KEY);

    if (currentSavedFood !== null) {
      const currentSavedFoodParsed = JSON.parse(currentSavedFood);
    }
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
