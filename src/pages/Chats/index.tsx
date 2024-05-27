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

const ChatsPage = ({navigation}: any) => {
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
        <GammaButton
          navigation={navigation}
          animatedValue={commonAnimatedValue}
        />
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
