import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

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
      freeRights !== null
        ? parseInt(freeRights as any, 10)
        : Platform.OS === 'ios'
        ? 2
        : 10;

    return parsedRights !== null
      ? parsedRights
      : Platform.OS === 'ios'
      ? 2
      : 10;
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
