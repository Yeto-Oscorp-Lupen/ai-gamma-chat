import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useRef} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import {animateHide, animateVisible} from '../../utils';
import GammaButton from './components/GammaButton';
import GetHelpBox from './components/GetHelpBox';
import QuickAnswersBox from './components/QuickAnswersBox';
import styles from './styles';
import StickyImageMessage from '../../components/StickyImageMessage';
import {AnimatedValueType} from '../../types';

const ChatsPage = () => {
  const commonAnimatedValue = useRef<AnimatedValueType>(
    new Animated.Value(0),
  ).current;

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
        <GammaButton animatedValue={commonAnimatedValue} />
        <GetHelpBox animatedValue={commonAnimatedValue} />
        <QuickAnswersBox animatedValue={commonAnimatedValue} />
      </ScrollView>
      <StickyImageMessage />
    </View>
  );
};

export default ChatsPage;
