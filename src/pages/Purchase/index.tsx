import {FunctionComponent, useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Linking,
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

const PurchasePage: FunctionComponent = ({navigation}: any) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(true);
  const [subscriptions, setSubscriptions] = useState<any>();
  const [selectedPurchaseIndex, setSelectedPurchaseIndex] = useState<number>(1);
  const itemSubs = ['com.aichat.yearly', 'com.aichat.monthly'];

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        setLoading(true);
        await initConnection()
          .then(async () => {
            setTimeout(async () => {
              const subs: any = await getSubscriptions({skus: itemSubs});
              subs.sort((a: any, b: any) => {
                return (
                  itemSubs.indexOf(b.productId) - itemSubs.indexOf(a.productId)
                );
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
    await requestSubscription({sku: sku})
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
    beSubs(subscriptions[selectedPurchaseIndex].productId || '');
  };

  const handlePurchaseTypeButton = (subIndex: number) => {
    setSelectedPurchaseIndex(subIndex);
  };

  const handleTermsOfUseButton = () => {
    Linking.openURL(
      'https://doc-hosting.flycricket.io/deepart-terms-of-usage/2c25af74-7d36-4e22-ae87-b5d1c6bd13b9/terms',
    );
  };

  const handlePrivacyPolicyButton = () => {
    Linking.openURL(
      'https://doc-hosting.flycricket.io/deepart-privacy-policy/f6d8c904-b28a-4ae1-9b91-b53dc8451e5e/privacy',
    );
  };

  const handleRestoreButton = async () => {
    const isSub = await getPurchases();
    dispatch(setIsSubs(isSub));
  };

  return (
    <ImageBackground
      source={require('../../assets/purchase/purchase-info.png')}
      style={styles.mainBackground}>
      <View style={styles.imagesContainer}>
        {(subscriptions || itemSubs).map((item: any, index: number) => (
          <PurchaseButton
            key={index}
            subIndex={index}
            handlePurchaseTypeButton={handlePurchaseTypeButton}
            item={item}
            isSelected={selectedPurchaseIndex === index}
            isLoading={loading}
          />
        ))}
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
