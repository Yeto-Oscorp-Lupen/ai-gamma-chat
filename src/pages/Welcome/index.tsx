import {Animated, Image, SafeAreaView, View} from 'react-native';
import {useCallback, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import style from './styles';
import AnimatedView from '../../components/AnimatedView';
import Button from '../../components/Button';
import {animateHide, animateVisible, animateVibrate} from '../../utils';
import {ArrowRight} from '../../components/Icons';

const WelcomePage = ({navigation}: any) => {
  const pageAnimatedValue = useRef(new Animated.Value(0)).current;
  const actionAnimatedValue = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      animateVisible(pageAnimatedValue); // Make component visible when focused
      animateVisible(actionAnimatedValue);

      return () => {
        animateHide(pageAnimatedValue);
        animateHide(actionAnimatedValue);
      };
    }, [pageAnimatedValue, actionAnimatedValue]),
  );

  const handleContinueButton = () => {
    animateVibrate(actionAnimatedValue);
    navigation.navigate('IntroPage');
  };

  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <AnimatedView
        animatedValue={actionAnimatedValue}
        style={style.backgroundImageContainer}>
        <Image
          source={require('../../assets/intro/1.png')}
          style={style.backgroundImage}
        />
        <Image
          source={require('../../assets/intro/1_1.png')}
          style={style.subImage}
        />
      </AnimatedView>

      <View style={style.footer}>
        <AnimatedView animatedValue={pageAnimatedValue}>
          <Button
            text="CONTINUE"
            styles={style.continueButton}
            onPress={handleContinueButton}
            icon={<ArrowRight width={20} height={20} color={'#fff'} />}
          />
        </AnimatedView>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
