import {Image, StyleSheet} from 'react-native';
import {WIDTH} from '../../constants';
import AnimatedPressable from '../AnimatedPressable';

const StickyImageMessage = ({onPress = () => {}}: any) => {
  return (
    <AnimatedPressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/common/stickImageMessage.png')}
      />
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 82,
    width: WIDTH,
    height: 50,
  },
  image: {
    width: WIDTH,
    height: 50,
  },
});

export default StickyImageMessage;
