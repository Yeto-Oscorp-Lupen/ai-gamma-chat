import {FunctionComponent, useEffect, useState} from 'react';
import {
  Alert,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  PurchaseError,
  getProducts,
  initConnection,
  requestSubscription,
} from 'react-native-iap';
import {useDispatch} from 'react-redux';

import CommonButton from '../../components/Button';
import PurchaseButton from '../../components/PurchaseButton';
import {setIsSubs} from '../../store/features/appSlice';
import {getPurchases} from '../../utils';
import styles from './styles';
import {ArrowRight, Wizard} from '../../components/Icons';
import InfoItem from './components/InfoItem';
import useTranslation from '../../hooks/useTranslation';

const INFORMATIONS = [
  {
    title: 'EXCLUSIVE_TO_PLUS',
    description: 'PLUS_USERS_ACCESS',
    image: require('../../assets/purchase/desc-1.png'),
  },
  {
    title: 'BUILT_FOR_QUALITY',
    description: 'GAMMA_AI_EXCELS',
    image: require('../../assets/purchase/desc-2.png'),
  },
  {
    title: 'LIMITED_USE',
    description: 'USAGE_CAPS_RESET',
    image: require('../../assets/purchase/desc-3.png'),
  },
];

const PurchasePage2: FunctionComponent = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {t} = useTranslation('common', 'PURCHASE_PAGES');

  const [loading, setLoading] = useState<boolean>(true);
  const [subscriptions, setSubscriptions] = useState<any>([]);
  const [selectedPurchaseIndex, setSelectedPurchaseIndex] = useState<number>(0);
  const itemSubs = Platform.select({
    ios: ['com.aichat.weekly', 'com.aichat.yearly'], // 'com.aichat.monthly',
    android: ['com.yeto.monthly', 'com.yeto.weekly', 'com.yeto.yearly'],
  } as any);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        setLoading(true);
        await initConnection()
          .then(async () => {
            setTimeout(async () => {
              const subs: any = await getProducts({
                skus: itemSubs as string[],
              });
              // subs.sort((a: any, b: any) => {
              //   const aOrder =
              //     order[a.productId.split('.').pop() as keyof typeof order];
              //   const bOrder =
              //     order[b.productId.split('.').pop() as keyof typeof order];
              //   return aOrder - bOrder;
              // });
              console.log(subs);

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

    return () => {
      setTimeout(() => {
        navigation.navigate('PurchasePage1');
      }, 3000);
    };
  }, []);

  const beSubs = async (sku: any) => {
    if (!sku.length) {
      return false;
    }
    setLoading(true);
    await requestSubscription({sku})
      .then(async () => {
        Alert.alert(t('PURCHASE_SUCCESS'), t('THANK_YOU_PURCHASE'));
        dispatch(setIsSubs(true));
        navigation.reset({
          routes: [{name: 'RootTabs'}],
        });
        setLoading(false);
      })
      .catch(error => {
        if (error instanceof PurchaseError) {
          Alert.alert(t('PURCHASE_FAILED'), `${error.toString()}`);
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
    <ScrollView style={styles.container}>
      <View style={styles.wizardIconContainer}>
        <Wizard height={60} width={66} style={styles.wizardIcon} />
      </View>
      <Text style={styles.title}>Gamma AI</Text>

      <View style={styles.infosContainer}>
        {INFORMATIONS.map((item, index) => (
          <InfoItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </View>

      <View style={styles.purchaseButtonsContainer}>
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
        text={t('CONTINUE')}
        onPress={handlePurchaseButton}
        styles={styles.continueButton}
        icon={<ArrowRight width={20} height={20} color={'#fff'} />}
      />

      <View style={styles.footer}>
        <View style={styles.footerSubButtonsContainer}>
          <TouchableHighlight onPress={handleTermsOfUseButton}>
            <Text style={styles.footerText}>{t('TERMS_OF_USE')}</Text>
          </TouchableHighlight>
          <Text style={styles.footerText}>|</Text>
          <TouchableHighlight onPress={handlePrivacyPolicyButton}>
            <Text style={styles.footerText}>{t('PRIVACY_POLICY')}</Text>
          </TouchableHighlight>
          <Text style={styles.footerText}>|</Text>
          <TouchableHighlight onPress={handleRestoreButton}>
            <Text style={styles.footerText}>{t('RESTORE')}</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.separator} />
    </ScrollView>
  );
};

export default PurchasePage2;
