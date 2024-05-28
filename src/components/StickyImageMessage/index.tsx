import {Image, StyleSheet, View} from 'react-native';
import {WIDTH} from '../../constants';
import AnimatedPressable from '../AnimatedPressable';
import {theme} from '../../constants/theme';

const StickyImageMessage = ({onPress = () => {}}: any) => {
  return (
    <View style={styles.container}>
      <AnimatedPressable onPress={onPress}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../../assets/common/stickImageMessage.png')}
        />
      </AnimatedPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 82,
    width: WIDTH,
    height: 70,
    backgroundColor: theme.colors.main.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: WIDTH,
    height: 70,
  },
});

export default StickyImageMessage;
