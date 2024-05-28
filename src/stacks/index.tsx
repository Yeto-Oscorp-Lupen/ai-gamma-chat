/* eslint-disable react/no-unstable-nested-components */
import {useCallback, useEffect, useState} from 'react';
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
import ChatsPage from '../pages/Chats';
import TasksPage from '../pages/Tasks';
import PurchasePage from '../pages/Purchase';
import SettingsPage from '../pages/Settings';
import TasksChatPage from '../pages/TasksChat';
import ChatsChatPage from '../pages/ChatsChat';
import {
  getIsFirstLaunchFromStorage,
  setIsFirstLaunchToStorage,
} from '../utils/storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackWrapper = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<any>(undefined);

  useEffect(() => {
    returnIsFirstLaunch();
  }, []);

  const returnIsFirstLaunch = async () => {
    const isFirstLaunchInner = await getIsFirstLaunchFromStorage();
    if (isFirstLaunchInner) {
      setIsFirstLaunch('false');
    } else {
      setIsFirstLaunch('true');
      setIsFirstLaunchToStorage('true');
    }
  };

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const RootTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={RootTabsScreenOptions as any}
        tabBar={(props: any) => <CustomTabBar {...props} />}>
        <Tab.Screen name="ChatsPage" component={ChatsPage} />
        <Tab.Screen name="TasksPage" component={TasksPage} />
      </Tab.Navigator>
    );
  };

  if (!isFirstLaunch) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={StackNavigatorScreenOptions as any}
      initialRouteName={isFirstLaunch === 'true' ? 'WelcomePage' : 'RootTabs'}>
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
        options={ChatGptPagesOptions as any}
        name="ChatsChatPage"
        component={ChatsChatPage}
      />
      <Stack.Screen
        options={ChatGptPagesOptions as any}
        name="TasksChatPage"
        component={TasksChatPage}
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
