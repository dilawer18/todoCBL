import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeLang = async (value) => {
  try {
    await AsyncStorage.setItem('language', value);
  } catch (error) {
    console.log(error, 'error')
  }
  }

  export const getLang = async () => {
    try {
     let value =  await AsyncStorage.getItem('language');
      return value;
    } catch (error) {
      console.log(error, 'error')
    }
  }