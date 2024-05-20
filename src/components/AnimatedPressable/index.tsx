import {useRef} from 'react';
import {Pressable, Animated, StyleSheet} from 'react-native';
import {animateHide, animateVisible, vibrate} from '../../utils';

const AnimatedPressable = ({children, onPress, style, styleContainer}: any) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pressInAnimation = () => {
    animateHide(scale, 0.9);
  };

  const pressOutAnimation = () => {
    animateVisible(scale);
  };

  const animatedStyle = {
    transform: [{scale}],
  };

  return (
    <Pressable
      onPressIn={() => {
        pressInAnimation();
      }}
      onPress={() => {
        vibrate();
        onPress();
      }}
      style={[styles.container, styleContainer]}
      onPressOut={pressOutAnimation}>
      <Animated.View style={[styles.container, animatedStyle, style]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AnimatedPressable;
