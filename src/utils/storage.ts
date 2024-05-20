import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFreeRightsFromStorage = async () => {
  try {
    const freeRights = await AsyncStorage.getItem('@freeRights');
    const parsedRights =
      freeRights !== null ? parseInt(freeRights as any, 10) : 1;

    return parsedRights !== null ? parsedRights : 1;
  } catch (e) {
    console.warn(e);
  }
};

export const setFreeRightsToStorage = (freeRights: number) => {
  try {
    AsyncStorage.setItem('@freeRights', JSON.stringify(freeRights));
  } catch (e) {
    console.warn(e);
  }
};
