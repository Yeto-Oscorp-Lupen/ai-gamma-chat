/* eslint-disable react/no-unstable-nested-components */
import {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  StackNavigatorScreenOptions,
  IntroPageStackOptions,
  RootTabsScreenOptions,
  RootTabsStackOptions,
  PurchasePagesOptions,
  SettingsPageOptions,
  ChatGptPagesOptions,
} from './options';
import IntroPage from '../pages/Intro';
import WelcomePage from '../pages/Welcome';
import CustomTabBar from '../components/CustomTabBar';
import ChatPage from '../pages/Chat';
import TaskPage from '../pages/Tasks';
import PurchasePage from '../pages/Purchase';
import SettingsPage from '../pages/Settings';
import ChatWithGPTPage from '../pages/ChatWithGPT';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackWrapper = () => {
  // const [isFirstLaunch, setIsFirstLaunch] = useState<any>(undefined);

  // useEffect(() => {
  //   returnIsFirstLaunch();
  // }, []);

  // const returnIsFirstLaunch = async () => {
  //   const isFirstLaunchInner = await getIsFirstLaunchFromStorage();
  //   if (isFirstLaunchInner) {
  //     setIsFirstLaunch('false');
  //   } else {
  //     setIsFirstLaunch('true');
  //     setIsFirstLaunchToStorage('true');
  //   }
  // };

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const RootTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={RootTabsScreenOptions}
        tabBar={(props: any) => <CustomTabBar {...props} />}>
        <Tab.Screen name="ChatPage" component={ChatPage} />
        <Tab.Screen name="TaskPage" component={TaskPage} />
      </Tab.Navigator>
    );
  };

  // if (!isFirstLaunch) {
  //   return null;
  // }

  return (
    <Stack.Navigator
      screenOptions={StackNavigatorScreenOptions as any}
      initialRouteName={'RootTabs'}>
      <Stack.Screen
        options={IntroPageStackOptions}
        name="WelcomePage"
        component={WelcomePage}
      />
      <Stack.Screen
        options={IntroPageStackOptions}
        name="IntroPage"
        component={IntroPage}
      />
      <Stack.Screen
        options={PurchasePagesOptions}
        name="PurchasePage"
        component={PurchasePage}
      />
      <Stack.Screen
        options={RootTabsStackOptions}
        name="RootTabs"
        component={RootTabs}
      />
      <Stack.Screen
        options={ChatGptPagesOptions}
        name="ChatWithGPTPage"
        component={ChatWithGPTPage}
      />
      <Stack.Group screenOptions={{presentation: 'card'}}>
        <Stack.Screen
          name="SettingsPage"
          component={SettingsPage}
          options={SettingsPageOptions as any}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackWrapper;
