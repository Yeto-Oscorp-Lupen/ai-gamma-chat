import {Animated, Image, SafeAreaView, View} from 'react-native';
import {useCallback, useRef, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import * as StoreReview from 'react-native-store-review';
import style from './styles';
import AnimatedView from '../../components/AnimatedView';
import Button from '../../components/Button';
import {animateHide, animateVisible, animateVibrate} from '../../utils';
import {ArrowRight} from '../../components/Icons';

const comments = [
  require('../../assets/intro/2_1.png'),
  require('../../assets/intro/2_2.png'),
  require('../../assets/intro/2_3.png'),
  require('../../assets/intro/2_1.png'),
  require('../../assets/intro/2_2.png'),
  require('../../assets/intro/2_3.png'),
];

const PAGE_CONTENTS = [
  {
    content: (scrollY: any) => (
      <Animated.ScrollView
        style={style.scrollView}
        contentOffset={{x: 0, y: scrollY}}>
        {comments.map((image, index) => (
          <Image key={index} source={image} style={style.comment} />
        ))}
      </Animated.ScrollView>
    ),
    infoText: '🤩 JOIN MILLIONS OF HAPPY USERS',
  },
  {
    content: () => (
      <Image
        source={require('../../assets/intro/3.png')}
        style={style.thirdImage}
      />
    ),
    infoText: '🫠 ASK AI ASSISTANT ABOUT ANYTHING',
  },
];

const IntroPage = ({navigation}: any) => {
  const pageAnimatedValue = useRef(new Animated.Value(0)).current;
  const actionAnimatedValue = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      animateVisible(pageAnimatedValue);
      animateVisible(actionAnimatedValue);

      const startScrolling = () => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(scrollY, {
              toValue: 1000, // Adjust this value based on your content height
              duration: 20000, // 20 seconds for the entire scroll
              useNativeDriver: true,
            }),
            Animated.timing(scrollY, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ]),
        ).start();
      };

      startScrolling();

      return () => {
        animateHide(pageAnimatedValue);
        animateHide(actionAnimatedValue);
        scrollY.stopAnimation();
      };
    }, [pageAnimatedValue, actionAnimatedValue, scrollY]),
  );

  const [pageIndex, setPageIndex] = useState(0);
  const handleContinueButton = () => {
    animateVibrate(actionAnimatedValue);
    if (pageIndex === PAGE_CONTENTS.length - 1) {
      navigation.navigate('RootTabs');
      StoreReview.requestReview();
    } else {
      setPageIndex(pageIndex + 1);
    }
  };

  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <AnimatedView
        animatedValue={actionAnimatedValue}
        style={style.backgroundImageContainer}>
        {PAGE_CONTENTS[pageIndex].content(scrollY)}
      </AnimatedView>

      <View style={style.footer}>
        <AnimatedView animatedValue={pageAnimatedValue}>
          <Animated.Text style={style.infoText}>
            {PAGE_CONTENTS[pageIndex].infoText}
          </Animated.Text>
        </AnimatedView>

        <AnimatedView animatedValue={pageAnimatedValue}>
          <Button
            text="CONTINUE"
            styles={style.continueButton}
            onPress={handleContinueButton}
            icon={<ArrowRight width={20} height={20} color={'#fff'} />}
          />
        </AnimatedView>

        <AnimatedView animatedValue={pageAnimatedValue}>
          <View style={style.indexViewContainer}>
            <View style={style.indexViewInnerContainer}>
              {PAGE_CONTENTS.map((item, index) => (
                <AnimatedView animatedValue={actionAnimatedValue} key={index}>
                  <View
                    style={[
                      style.indexView,
                      index === pageIndex && style.selectedIndexView,
                    ]}
                  />
                </AnimatedView>
              ))}
            </View>
          </View>
        </AnimatedView>
      </View>
    </SafeAreaView>
  );
};

export default IntroPage;
