import {FunctionComponent, useEffect, useState} from 'react';
import {
  Alert,
  Image,
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
import {ArrowRight} from '../../components/Icons';
import AnimatedBorderView from '../../components/AnimatedBorderView';
import {WIDTH} from '../../constants';
import useTranslation from '../../hooks/useTranslation';

const desc = [
  {
    title: 'ANSWERS_FROM_GPT4O',
    description: 'MORE_ACCURATE_DETAILED',
    image: require('../../assets/purchase/desc-1.png'),
  },
  {
    title: 'HIGHER_WORD_LIMIT',
    description: 'TYPE_LONGER_MESSAGES',
    image: require('../../assets/purchase/desc-2.png'),
  },
  {
    title: 'NO_LIMITS',
    description: 'UNLIMITED_DIALOGUES',
    image: require('../../assets/purchase/desc-3.png'),
  },
  {
    title: 'NO_ADS',
    description: 'ENJOY_CHAT_ASK_AI',
    image: require('../../assets/purchase/desc-4.png'),
  },
];

const reviews = [
  {
    image: require('../../assets/intro/2_1.png'),
  },
  {
    image: require('../../assets/intro/2_2.png'),
  },
  {
    image: require('../../assets/intro/2_3.png'),
  },
];

const PurchasePage1: FunctionComponent = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {t} = useTranslation('common', 'PURCHASE_PAGES');

  const [loading, setLoading] = useState<boolean>(true);
  const [subscriptions, setSubscriptions] = useState<any>([]);
  const [selectedPurchaseIndex, setSelectedPurchaseIndex] = useState<number>(0);
  const itemSubs = Platform.select({
    ios: ['com.aichat.lifetime'], // 'com.aichat.monthly',
    android: ['com.yeto.monthly', 'com.yeto.weekly', 'com.yeto.yearly'],
  } as any);

  // const order = {
  //   yearly: 1,
  //   // monthly: 2,
  //   weekly: 3,
  // };

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
    <ScrollView style={styles.mainBackground}>
      <View style={styles.imagesContainer}>
        <AnimatedBorderView />

        <View>
          {desc.map(item => (
            <DescItem
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </View>

        <View style={styles.reviewView}>
          <Text style={styles.reviewTitle}>{t('RATINGS_REVIEWS')}</Text>
          <Image
            style={styles.reviewImage}
            resizeMode="contain"
            source={require('../../assets/purchase/ratingView.png')}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {reviews.map((item, index) => (
            <ReviewItem key={index.toString()} image={item.image} />
          ))}
        </ScrollView>

        <Image
          style={styles.review2Image}
          resizeMode="contain"
          source={require('../../assets/purchase/review2.png')}
        />

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

        <CommonButton
          text={t('CONTINUE')}
          onPress={handlePurchaseButton}
          styles={styles.button}
          icon={<ArrowRight width={20} height={20} color={'#fff'} />}
        />
      </View>

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

const DescItem = ({title, description, image}: any) => {
  const {t} = useTranslation('common', 'PURCHASE_PAGES');

  return (
    <View style={[styles.container, {width: WIDTH - 64}]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t(title)}</Text>
        <Text style={styles.description}>{t(description)}</Text>
      </View>
    </View>
  );
};

const ReviewItem = ({image, key}: any) => {
  return (
    <View key={key} style={styles.reviewCard}>
      <Image
        resizeMode="contain"
        style={styles.reviewCardImage}
        source={image}
      />
    </View>
  );
};

export default PurchasePage1;
