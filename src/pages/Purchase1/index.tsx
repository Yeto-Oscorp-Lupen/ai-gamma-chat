import {FunctionComponent, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
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

const desc = [
  {
    title: 'Answers From GPT-4o',
    description: 'More accurate & detailed answers',
    image: require('../../assets/purchase/desc-1.png'),
  },
  {
    title: 'Higher word limit',
    description: 'Type longer messages',
    image: require('../../assets/purchase/desc-2.png'),
  },
  {
    title: 'No Limits',
    description: 'Have unlimited dialogues',
    image: require('../../assets/purchase/desc-3.png'),
  },
  {
    title: 'No Ads',
    description: 'Enjoy Chat & Ask AI without any ads',
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
    <ScrollView style={styles.mainBackground}>
      <View style={styles.imagesContainer}>
        <AnimatedBorderView />

        <FlatList
          data={desc}
          keyExtractor={(item: any) => item.title}
          renderItem={({item}) => (
            <DescItem
              title={item.title}
              image={item.image}
              description={item.description}
            />
          )}
        />

        <View style={styles.reviewView}>
          <Text style={styles.reviewTitle}>Ratings and Reviews</Text>
          <Image
            style={styles.reviewImage}
            source={require('../../assets/purchase/ratingView.png')}
          />
        </View>

        <FlatList
          data={reviews}
          keyExtractor={(_: any, index: number) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ReviewItem image={item.image} />}
        />

        <Image
          style={styles.review2Image}
          resizeMode="contain"
          source={require('../../assets/purchase/review2.png')}
        />

        <View style={styles.seperator} />

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
          text="Continue"
          onPress={handlePurchaseButton}
          styles={styles.button}
          icon={<ArrowRight width={20} height={20} color={'#fff'} />}
        />
      </View>

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

      <View style={styles.seperator} />
    </ScrollView>
  );
};

const DescItem = ({title, description, image}: any) => {
  return (
    <View style={[styles.container, {width: WIDTH - 64}]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const ReviewItem = ({image}: any) => {
  return (
    <View style={styles.reviewCard}>
      <Image
        resizeMode="contain"
        style={styles.reviewCardImage}
        source={image}
      />
    </View>
  );
};

export default PurchasePage1;
