import {Image, Text, View} from 'react-native';
import AnimatedPressable from '../../../../components/AnimatedPressable';
import {ArrowRightSafe} from '../../../../components/Icons';
import styles from './styles';
import AnimatedView from '../../../../components/AnimatedView';
import {AnimatedValueType} from '../../../../types';

type GammaButtonPropsType = {
  animatedValue: AnimatedValueType;
  navigation: any;
};

const GammaButton = ({animatedValue, navigation}: GammaButtonPropsType) => (
  <AnimatedView animatedValue={animatedValue}>
    <AnimatedPressable
      style={styles.gammaButton}
      onPress={() => navigation.navigate('PurchasePage')}>
      <Image
        resizeMode="contain"
        source={require('../../../../assets/chats/gamma.png')}
        style={styles.gammaButtonImage}
      />
      <View style={styles.gammaButtonInfoContainer}>
        <Text style={styles.gammaButtonTitle}>Try Gamma AI Premium</Text>
        <Text style={styles.gammaButtonDescription}>
          Tap to claim your offer now!
        </Text>
      </View>
      <ArrowRightSafe width={20} height={20} style={styles.gammaButtonArrow} />
    </AnimatedPressable>
  </AnimatedView>
);

export default GammaButton;
