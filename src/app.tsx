/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch} from 'react-redux';
import StackWrapper from './stacks';
import {setIsSubs} from './store/features/appSlice';
import {getPurchases} from './utils';

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   init();
  // }, []);

  // const init = async () => {
  //   const sub = await getPurchases(true);
  //   dispatch(setIsSubs(sub));
  //   SplashScreen.hide();
  // };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationContainer>
          <StackWrapper />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
