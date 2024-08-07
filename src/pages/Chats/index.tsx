import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useRef} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import {animateHide, animateVisible} from '../../utils';
import GammaButton from './components/GammaButton';
import GetHelpBox from './components/GetHelpBox';
import QuickAnswersBox from './components/QuickAnswersBox';
import styles from './styles';
import StickyImageMessage from '../../components/StickyImageMessage';
import {AnimatedValueType} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {getFreeRightsFromStorage} from '../../utils/storage';
import {setFreeRight} from '../../store/features/appSlice';
import * as StoreReview from 'react-native-store-review';

const ChatsPage = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {isSubs} = useSelector((state: any) => state.app);
  const commonAnimatedValue = useRef<AnimatedValueType>(
    new Animated.Value(0),
  ).current;

  useEffect(() => {
    if (isSubs !== null) {
      setTimeout(() => {
        init();
      }, 100);

      StoreReview.requestReview();
    }
  }, [isSubs]);

  useEffect(() => {
    checkUserHasFreeQuestions();
  }, []);

  const init = async () => {
    if (isSubs === false) {
      navigation.navigate('PurchasePage2');
    }
  };

  const checkUserHasFreeQuestions = async () => {
    let freeRightsCount = await getFreeRightsFromStorage();
    console.warn(freeRightsCount);
    dispatch(setFreeRight(freeRightsCount));
  };

  useFocusEffect(
    useCallback(() => {
      animateVisible(commonAnimatedValue);

      return () => animateHide(commonAnimatedValue);
    }, []),
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        {isSubs === false && (
          <GammaButton
            navigation={navigation}
            animatedValue={commonAnimatedValue}
          />
        )}
        <GetHelpBox
          navigation={navigation}
          animatedValue={commonAnimatedValue}
        />
        <QuickAnswersBox
          navigation={navigation}
          animatedValue={commonAnimatedValue}
        />
      </ScrollView>
      <StickyImageMessage
        onPress={() => navigation.navigate('ChatsChatPage')}
      />
    </View>
  );
};

export default ChatsPage;
