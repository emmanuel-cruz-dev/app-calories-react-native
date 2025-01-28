import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../types/index";

const MY_FOOD_KEY = "@MyFood:Key";

const useFoodStorage = () => {
  const handleSaveFood = async ({ name, calories, portion }: Meal) => {
    try {
      const currentSavedFood = await AsyncStorage.getItem(MY_FOOD_KEY);

      if (currentSavedFood !== null) {
        const currentSavedFoodParsed = JSON.parse(currentSavedFood);
        currentSavedFoodParsed.push({
          name,
          calories,
          portion,
        });
        await AsyncStorage.setItem(
          MY_FOOD_KEY,
          JSON.stringify(currentSavedFoodParsed)
        );
        return Promise.resolve();
      }

      await AsyncStorage.setItem(
        MY_FOOD_KEY,
        JSON.stringify([{ name, calories, portion }])
      );
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
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
