import {Animated, Easing} from 'react-native';
import {ALERT_TYPE, Dialog, Toast} from 'react-native-alert-notification';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {getAvailablePurchases, initConnection} from 'react-native-iap';
import {COMMON_ANIMATION_DURATION} from '../constants';

export const getPurchases = async (isInStartPage = false) => {
  try {
    await initConnection();
    const purchases = await getAvailablePurchases();
    if (purchases.length > 0) {
      if (!isInStartPage) {
        successfulAlert('Your purchases were updated.');
      }
      return true;
    } else {
      if (!isInStartPage) {
        warningAlert("Your purchases don't exist.");
      }
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export const vibrate = () => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  ReactNativeHapticFeedback.trigger('impactLight', options);
};

export const animateHide = (animatedValue: any, value?: number) => {
  Animated.timing(animatedValue, {
    toValue: value || 0,
    useNativeDriver: true,
    duration: COMMON_ANIMATION_DURATION,
  }).start();
};

export const animateVisible = (animatedValue: any, value?: number) => {
  Animated.timing(animatedValue, {
    toValue: value || 1,
    useNativeDriver: true,
    duration: COMMON_ANIMATION_DURATION,
  }).start();
};

export const animateVibrate = (animatedValue: any) => {
  Animated.timing(animatedValue, {
    toValue: 0.98,
    useNativeDriver: true,
    duration: 200,
  }).start(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 200,
    }).start();
  });
};

export const animateEaseJump = (animatedValue: any) => {
  // Start the jump from the initial position
  Animated.timing(animatedValue, {
    toValue: 0.95, // Adjust the value for the height of the jump
    duration: 100, // Duration of the jump up
    useNativeDriver: true,
    easing: Easing.out(Easing.cubic), // This easing function creates a smooth start and a quick acceleration
  }).start(() => {
    // Return to the original position
    Animated.timing(animatedValue, {
      toValue: 1, // Assuming 1 is the original position
      duration: 200, // Duration of the jump down, can be the same or different from the jump up
      useNativeDriver: true,
      easing: Easing.in(Easing.cubic), // Easing for coming back down
    }).start();
  });
};

export const returnRandomItemFromArray = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const errorToast = (error: any, navigation: any) => {
  Toast.show({
    type: ALERT_TYPE.DANGER,
    title: 'Error',
    textBody: error,
    autoClose: 1000,
  });
  navigation.goBack();
  return;
};

export const successfulAlert = (message: string) => {
  Dialog.show({
    type: ALERT_TYPE.SUCCESS,
    title: 'Success',
    textBody: message,
    autoClose: 1000,
  });
};

export const warningAlert = (message: string) => {
  Dialog.show({
    type: ALERT_TYPE.WARNING,
    title: 'Warning',
    textBody: message,
    autoClose: 1000,
  });
};
