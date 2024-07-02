import {useEffect, useRef, useState} from 'react';
import {Animated, View, StyleSheet, Easing} from 'react-native';
import Video from 'react-native-video';
import {WIDTH} from '../../constants';

const borderWidth = 3;
const borderRadius = 10;
const width = WIDTH - 64;
const height = 228;

const AnimatedBorderView = () => {
  const [key, setKey] = useState(0); // Video ve animasyonu yeniden başlatmak için bir anahtar
  const topAnim = useRef(new Animated.Value(0)).current;
  const rightAnim = useRef(new Animated.Value(0)).current;
  const bottomAnim = useRef(new Animated.Value(0)).current;
  const leftAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const duration = 15000; // Her kenarın süresi (15 saniye)

    // Animasyon sırasını tanımlıyoruz
    const startAnimation = () => {
      topAnim.setValue(0);
      rightAnim.setValue(0);
      bottomAnim.setValue(0);
      leftAnim.setValue(0);

      Animated.sequence([
        Animated.timing(topAnim, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightAnim, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(bottomAnim, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(leftAnim, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start();
    };

    startAnimation();
  }, [key, topAnim, rightAnim, bottomAnim, leftAnim]);

  const createAnimatedBorderStyle = (
    anim: Animated.Value,
    position: {
      top?: number;
      left?: number;
      height: number | Animated.AnimatedInterpolation<string | number>;
      width: number | Animated.AnimatedInterpolation<string | number>;
      borderTopLeftRadius?: number;
      borderTopRightRadius?: number;
      right?: number;
      borderBottomRightRadius?: number;
      bottom?: number;
      borderBottomLeftRadius?: number;
    },
  ) => ({
    position: 'absolute',
    backgroundColor: anim.interpolate({
      inputRange: [0, 1],
      outputRange: ['#FFA500', '#FFA500'], // Beyazdan Turuncuya
    }),
    ...position,
  });

  const topBorderStyle = createAnimatedBorderStyle(topAnim, {
    top: 0,
    left: 0,
    height: borderWidth,
    width: topAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, width],
    }),
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  });

  const rightBorderStyle = createAnimatedBorderStyle(rightAnim, {
    top: 0,
    right: 0,
    width: borderWidth,
    height: rightAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height],
    }),
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  });

  const bottomBorderStyle = createAnimatedBorderStyle(bottomAnim, {
    bottom: 0,
    right: 0, // Sağdan sola dolacak
    height: borderWidth,
    width: bottomAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, width],
    }),
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  });

  const leftBorderStyle = createAnimatedBorderStyle(leftAnim, {
    bottom: 0, // Aşağıdan yukarı dolacak
    left: 0,
    width: borderWidth,
    height: leftAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height],
    }),
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  });

  return (
    <View style={styles.container}>
      <View style={[styles.box, {width, height}]}>
        <Video
          key={key}
          source={require('../../assets/purchaseVideo.mp4')}
          style={{
            width: width - 2 * borderWidth,
            height: height - 2 * borderWidth,
          }}
          resizeMode="cover"
          onEnd={() => setKey(prevKey => prevKey + 1)}
        />
        <View style={styles.defaultBorder} />
        <Animated.View style={topBorderStyle as any} />
        <Animated.View style={rightBorderStyle as any} />
        <Animated.View style={bottomBorderStyle as any} />
        <Animated.View style={leftBorderStyle as any} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  box: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
  defaultBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    borderWidth,
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
  },
});

export default AnimatedBorderView;
