import {Image, Text, View} from 'react-native';
import AnimatedPressable from '../../../../components/AnimatedPressable';
import {ArrowRightSafe} from '../../../../components/Icons';
import AnimatedView from '../../../../components/AnimatedView';
import {AnimatedValueType} from '../../../../types';
import useTranslation from '../../../../hooks/useTranslation';
import styles from './styles';

type GammaButtonPropsType = {
  animatedValue: AnimatedValueType;
  navigation: any;
};

const GammaButton = ({animatedValue, navigation}: GammaButtonPropsType) => {
  const {t} = useTranslation('common');

  return (
    <AnimatedView animatedValue={animatedValue}>
      <AnimatedPressable
        style={styles.gammaButton}
        onPress={() => navigation.navigate('PurchasePage2')}>
        <Image
          resizeMode="contain"
          source={require('../../../../assets/chats/gamma.png')}
          style={styles.gammaButtonImage}
        />
        <View style={styles.gammaButtonInfoContainer}>
          <Text style={styles.gammaButtonTitle}>
            {t('TRY_GAMMA_AI_PREMIUM')}
          </Text>
          <Text style={styles.gammaButtonDescription}>
            {t('TAP_TO_CLAIM_YOUR_OFFER_NOW')}
          </Text>
        </View>
        <ArrowRightSafe
          width={20}
          height={20}
          style={styles.gammaButtonArrow}
        />
      </AnimatedPressable>
    </AnimatedView>
  );
};

export default GammaButton;
