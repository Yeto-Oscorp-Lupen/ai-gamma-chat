import AsyncStorage from '@react-native-async-storage/async-storage';

export const getIsFirstLaunchFromStorage = async () => {
  try {
    return await AsyncStorage.getItem('@isFirstLaunch');
  } catch (e) {
    console.warn(e);
  }
};

export const setIsFirstLaunchToStorage = (isFirstLaunch: string) => {
  try {
    AsyncStorage.setItem('@isFirstLaunch', isFirstLaunch);
  } catch (e) {
    console.warn(e);
  }
};

export const getFreeRightsFromStorage = async () => {
  try {
    const freeRights = await AsyncStorage.getItem('@freeRights');
    const parsedRights =
      freeRights !== null ? parseInt(freeRights as any, 10) : 3;

    return parsedRights !== null ? parsedRights : 3;
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
