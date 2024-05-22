import {Pressable} from 'react-native';
import {COMMON_ANIMATION_DURATION} from '../constants';
import {theme} from '../constants/theme';
import type {NativeStackNavigationOptions as NativeStackNavigationOptionsType} from '@react-navigation/native-stack';
import styles from './style';
import {ArrowLeft, BackFill} from '../components/Icons';
import {vibrate} from '../utils';
import {NavigationType} from '../types';

type OptionsPropsType = {
  navigation: any;
};

const onPressBackButton = (navigation: NavigationType) => {
  vibrate();
  navigation.goBack();
};

// const onPressSettingsButton = (navigation: any) => {
//   navigation.navigate('Settings');
// };

// const onPressBackButton = (navigation: any) => {
//   navigation.goBack();
// };

export const RootTabsStackOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

export const RootTabsScreenOptions = (): any => ({
  headerShown: false,
  animation: 'shift',
  transitionSpec: {
    animation: 'timing',
    config: {
      duration: COMMON_ANIMATION_DURATION,
    },
  },
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
      <ArrowLeft style={styles.backButtonIcon} width={12} height={20} />
    </Pressable>
  ),
});

export const SettingsPageOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  headerShown: true,
  title: 'Settings',
  headerStyle: {
    backgroundColor: theme.colors.main.black,
    borderBottomColor: theme.colors.main.black,
  },
  headerTitleStyle: {
    color: theme.colors.main.white, // Change the color
    fontFamily: 'SFProRounded-Regular', // Change the font family,
    fontSize: 22,
  },
  headerLeft: () => (
    <Pressable
      style={styles.backButton}
      onPress={() => onPressBackButton(navigation)}>
      <BackFill width={15} height={15} color={theme.colors.main.white} />
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
