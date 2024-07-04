import {FunctionComponent, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
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

const INFORMATIONS = [
  {
    title: 'Exclusive to Plus',
    description:
      'Plus users get access to Gamma AI and the latest beta features.',
    image: require('../../assets/purchase/desc-1.png'),
  },
  {
    title: 'Built for Quality',
    description:
      'Gamma AI excels at a diverse range of personal and work tasks.',
    image: require('../../assets/purchase/desc-2.png'),
  },
  {
    title: 'Limited Use',
    description: 'Usage caps for Gamma AI are reset regularly.',
    image: require('../../assets/purchase/desc-3.png'),
  },
];

const PurchasePage2: FunctionComponent = ({navigation}: any) => {
  const dispatch = useDispatch();
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
    <ScrollView style={styles.container}>
      <View style={styles.wizardIconContainer}>
        <Wizard height={60} width={66} style={styles.wizardIcon} />
      </View>
      <Text style={styles.title}>Gamma AI</Text>

      <FlatList
        data={INFORMATIONS}
        keyExtractor={(item: any) => item.title}
        contentContainerStyle={styles.infosContentContainer}
        style={styles.infosContainer}
        renderItem={({item}) => (
          <InfoItem
            title={item.title}
            image={item.image}
            description={item.description}
          />
        )}
      />

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
        text="Continue"
        onPress={handlePurchaseButton}
        styles={styles.continueButton}
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
      <View style={styles.separator} />
    </ScrollView>
  );
};

export default PurchasePage2;
