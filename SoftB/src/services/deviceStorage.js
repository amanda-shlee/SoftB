import AsyncStorage from '@react-native-async-storage/async-storage';

export const retrieve = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // read error
    return e;
  }
};
export const store = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    return e;
  }
};

export const remove = async key => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    // read error
    return e;
  }
};

export const clearAll = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    return e;
  }
};
