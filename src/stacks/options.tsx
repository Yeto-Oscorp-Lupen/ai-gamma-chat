import {Pressable} from 'react-native';
import {COMMON_ANIMATION_DURATION} from '../constants';
import {theme} from '../constants/theme';
import type {NativeStackNavigationOptions as NativeStackNavigationOptionsType} from '@react-navigation/native-stack';
import styles from './style';
import {ArrowLeft, CrossFill, SettingsFill} from '../components/Icons';
import {vibrate} from '../utils';
import {NavigationType} from '../types';

type OptionsPropsType = {
  navigation: any;
};

const onPressBackButton = (navigation: NavigationType) => {
  vibrate();
  navigation.goBack();
};

const onPressSettingsButton = (navigation: any) => {
  vibrate();
  navigation.navigate('SettingsPage');
};

// const onPressBackButton = (navigation: any) => {
//   navigation.goBack();
// };

export const RootTabsStackOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

export const RootTabsScreenOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  headerShown: true,
  animation: 'shift',
  title: 'Gamma AI',
  headerShadowVisible: false,
  headerTitleStyle: {
    color: theme.colors.main.white, // Change the color
    fontFamily: theme.font.bold, // Change the font family,
    fontSize: 16,
  },
  headerStyle: {
    backgroundColor: theme.colors.main.grey,
    borderBottomColor: theme.colors.main.grey,
  },
  transitionSpec: {
    animation: 'timing',
    config: {
      duration: COMMON_ANIMATION_DURATION,
    },
  },
  headerLeft: () => (
    <Pressable
      style={styles.backButton}
      onPress={() => {
        onPressSettingsButton(navigation);
      }}>
      <SettingsFill style={styles.backButtonIcon} width={20} height={20} />
    </Pressable>
  ),
  sceneStyleInterpolator: ({current}: any) => ({
    sceneStyle: {
      opacity: current.progress.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 1, 0],
      }),
    },
  }),
});

export const ResultPagesOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: 'Result',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  headerTitleStyle: {
    color: theme.colors.main.white, // Change the color
    fontFamily: 'SFProRounded-Regular', // Change the font family,
    fontSize: 22,
  },
  headerLeft: () => (
    <Pressable
      style={styles.backButton}
      onPress={() => {
        vibrate();
        navigation.goBack();
      }}>
      <ArrowLeft style={styles.backButtonIcon} width={12} height={20} />
    </Pressable>
  ),
});

export const PurchasePagesOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: '',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  headerLeft: () => (
    <Pressable
      style={styles.backButton}
      onPress={() => {
        vibrate();
        navigation.goBack();
      }}>
      <CrossFill style={styles.backButtonIcon} width={18} height={18} />
    </Pressable>
  ),
});

export const ChatGptPagesOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: 'Gamma AI',
  headerShadowVisible: false,
  headerTitleStyle: {
    color: theme.colors.main.white, // Change the color
    fontFamily: theme.font.bold, // Change the font family,
    fontSize: 16,
  },
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main.grey,
    borderBottomColor: theme.colors.main.grey,
  },
  transitionSpec: {
    animation: 'timing',
    config: {
      duration: COMMON_ANIMATION_DURATION,
    },
  },
  headerLeft: () => (
    <Pressable
      style={styles.backButtonForChat}
      onPress={() => {
        vibrate();
        navigation.goBack();
      }}>
      <ArrowLeft style={styles.backButtonIcon} width={18} height={18} />
    </Pressable>
  ),
  headerRight: () => (
    <Pressable
      style={styles.backButtonForChat}
      onPress={() => {
        onPressSettingsButton(navigation);
      }}>
      <SettingsFill style={styles.backButtonIcon} width={20} height={20} />
    </Pressable>
  ),
});

export const SettingsPageOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  headerShown: true,
  title: 'Settings',
  headerTitleStyle: {
    color: theme.colors.main.white,
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  headerStyle: {
    backgroundColor: theme.colors.main.grey,
    borderBottomColor: theme.colors.main.grey,
  },
  headerLeft: () => (
    <Pressable
      style={styles.backView}
      onPress={() => onPressBackButton(navigation)}>
      <CrossFill style={styles.backButtonIcon} width={16} height={16} />
    </Pressable>
  ),
});

export const StackNavigatorScreenOptions = () => ({
  contentStyle: {backgroundColor: 'transparent'},
  gestureEnabled: true, // Enable gestures (swipe back)
  animation: 'fade',
  animationDuration: COMMON_ANIMATION_DURATION,
});

export const IntroPageStackOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});
