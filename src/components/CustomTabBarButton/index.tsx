/* eslint-disable react-native/no-inline-styles */
import {useRef} from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';
import AnimatedLottieView from 'lottie-react-native';

const TabBarButton = ({
  route,
  isFocused,
  options,
  onPress,
  index,
  label,
  style,
  imageStyle,
}: any) => {
  const lottieRef = useRef<AnimatedLottieView | null>(null);
  const images = {
    active: [
      require('../../assets/tabbar/art-active.json'),
      require('../../assets/tabbar/video-active.json'),
    ],
    inactive: [
      require('../../assets/tabbar/art-inactive.json'),
      require('../../assets/tabbar/video-inactive.json'),
    ],
  };

  const iconSize = label === 'AIArt' ? 27 : 30;

  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={'transparent'}
      key={route.name || index}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      onPress={() => {
        onPress();
        lottieRef.current?.play();
      }}
      style={style}>
      <View style={[styles.unfocusedTextView, imageStyle]}>
        {/* <Image
          style={{
            width: 22,
            height: 22,
          }}
          source={isFocused ? images.active[index] : images.inactive[index]}
        /> */}
        <View
          style={{
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {isFocused === true ? (
            <AnimatedLottieView
              ref={lottieRef}
              source={images.active[index]}
              loop={false}
              autoPlay={true}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ) : (
            <AnimatedLottieView
              ref={lottieRef}
              source={images.inactive[index]}
              loop={false}
              autoPlay={true}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          )}
        </View>
        <Text
          style={[
            styles.text,
            {
              color: isFocused
                ? theme.colors.main.white
                : theme.colors.main.black,
            },
          ]}>
          {label === 'ChatPage'
            ? 'Chats'
            : label === 'TasksPage'
            ? 'Tasks for AI'
            : ''}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
  focusedTextView: {
    alignItems: 'center',
  },
  unfocusedTextView: {
    borderBottomColor: 'transparent',
    alignItems: 'center',
  },
});

export default TabBarButton;
