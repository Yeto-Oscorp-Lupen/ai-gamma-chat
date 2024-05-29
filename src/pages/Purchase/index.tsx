import {FunctionComponent, useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Linking,
  Platform,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  PurchaseError,
  getSubscriptions,
  initConnection,
  requestSubscription,
} from 'react-native-iap';
import {useDispatch} from 'react-redux';

import CommonButton from '../../components/Button';
import PurchaseButton from '../../components/PurchaseButton';
import {setIsSubs} from '../../store/features/appSlice';
import {getPurchases} from '../../utils';
import styles from './styles';
import {ArrowRight} from '../../components/Icons';
import {IS_IPHONE_MINI} from '../../constants';

const PurchasePage: FunctionComponent = ({navigation}: any) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(true);
  const [subscriptions, setSubscriptions] = useState<any>([]);
  const [selectedPurchaseIndex, setSelectedPurchaseIndex] = useState<number>(0);
  const itemSubs = Platform.select({
    ios: ['com.aichat.monthly', 'com.aichat.weekly', 'com.aichat.yearly'],
    android: ['com.yeto.monthly', 'com.yeto.weekly', 'com.yeto.yearly'],
  } as any);

  const order = {
    yearly: 1,
    monthly: 2,
    weekly: 3,
  };

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        setLoading(true);
        await initConnection()
          .then(async () => {
            setTimeout(async () => {
              const subs: any = await getSubscriptions({
                skus: itemSubs as string[],
              });
              subs.sort((a: any, b: any) => {
                const aOrder =
                  order[a.productId.split('.').pop() as keyof typeof order];
                const bOrder =
                  order[b.productId.split('.').pop() as keyof typeof order];
                return aOrder - bOrder;
              });

              setSubscriptions(subs);
              setLoading(false);
            }, 3000);
          })
          .catch(er => console.warn(er));
      } catch (e) {
        console.log(e);
      }
    };
    bootstrapAsync();
  }, []);

  const beSubs = async (sku: any) => {
    if (!sku.length) {
      return false;
    }
    setLoading(true);
    await requestSubscription({sku})
      .then(async () => {
        Alert.alert('Purchase Success', 'Thank you for your purchase!');
        dispatch(setIsSubs(true));
        navigation.reset({
          routes: [{name: 'RootTabs'}],
        });
        setLoading(false);
      })
      .catch(error => {
        if (error instanceof PurchaseError) {
          Alert.alert('Purchase Failed', `${error.toString()}`);
        }
        setLoading(false);
      });
  };

  const handlePurchaseButton = () => {
    beSubs(subscriptions[selectedPurchaseIndex]?.productId || '');
  };

  const handlePurchaseTypeButton = (subIndex: number) => {
    setSelectedPurchaseIndex(subIndex);
  };

  const handleTermsOfUseButton = () => {
    Linking.openURL(
      'https://doc-hosting.flycricket.io/ai-chat-terms-of-use/ba024ce6-157b-4695-a524-11b21f7f382e/terms',
    );
  };

  const handlePrivacyPolicyButton = () => {
    Linking.openURL(
      'https://doc-hosting.flycricket.io/ai-chat-privacy-policy/816e085f-19fa-47be-ad04-5e463d4c4730/privacy',
    );
  };

  const handleRestoreButton = async () => {
    const isSub = await getPurchases();
    dispatch(setIsSubs(isSub));
  };

  return (
    <ImageBackground
      source={
        IS_IPHONE_MINI()
          ? require('../../assets/purchase/purchase-info-mini.png')
          : require('../../assets/purchase/purchase-info.png')
      }
      style={styles.mainBackground}>
      <View style={styles.imagesContainer}>
        {(subscriptions.length ? subscriptions : itemSubs).map(
          (item: any, index: number) => (
            <PurchaseButton
              key={index}
              subIndex={index}
              handlePurchaseTypeButton={handlePurchaseTypeButton}
              item={item}
              isSelected={selectedPurchaseIndex === index}
              isLoading={loading}
            />
          ),
        )}
      </View>
      <CommonButton
        text="Continue"
        onPress={handlePurchaseButton}
        styles={styles.button}
        icon={<ArrowRight width={20} height={20} color={'#fff'} />}
      />

      <View style={styles.footer}>
        <View style={styles.footerSubButtonsContainer}>
          <TouchableHighlight onPress={handleTermsOfUseButton}>
            <Text style={styles.footerText}>Terms of Use</Text>
          </TouchableHighlight>
          <Text style={styles.footerText}>|</Text>
          <TouchableHighlight onPress={handlePrivacyPolicyButton}>
            <Text style={styles.footerText}>Privacy Policy</Text>
          </TouchableHighlight>
          <Text style={styles.footerText}>|</Text>
          <TouchableHighlight onPress={handleRestoreButton}>
            <Text style={styles.footerText}>Restore</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PurchasePage;
