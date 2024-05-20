import {Animated} from 'react-native';

const AnimatedView = ({children, animatedValue, style}: any) => {
  const animatedStyle = {
    transform: [{scale: animatedValue}],
    opacity: animatedValue,
  };

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
};

export default AnimatedView;
