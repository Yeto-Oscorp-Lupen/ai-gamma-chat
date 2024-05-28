import {FunctionComponent} from 'react';
import {Platform, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {SkeletonPressableAndroid, SkeletonPressable} from './SkeletonPressable';
import style from './style';

export type Props = {
  navigation?: NavigationProp<any, any>;
  item: any;
  isSelected: any;
  subIndex: number;
  handlePurchaseTypeButton: any;
  isLoading?: boolean;
};

const PurchaseButton: FunctionComponent<Props> = ({
  item,
  isSelected,
  subIndex,
  handlePurchaseTypeButton,
  isLoading,
}: any) => {
  const getSubText = (productId: string): string => {
    if (
      productId === 'com.aichat.monthly' ||
      productId === 'com.yeto.monthly'
    ) {
      return 'Monthly';
    }
    if (productId === 'com.aichat.yearly' || productId === 'com.yeto.yearly') {
      return 'Annual';
    }
    if (
      productId === 'com.aichat.lifetime' ||
      productId === 'com.yeto.lifetime'
    ) {
      return 'Lifetime';
    }

    return 'Weekly';
  };

  const getInfo = (productId: string): string => {
    if (
      productId === 'com.aichat.monthly' ||
      productId === 'com.yeto.monthly'
    ) {
      return 'Monthly';
    }
    if (productId === 'com.aichat.yearly' || productId === 'com.yeto.yearly') {
      return 'Annually';
    }

    return 'Weekly';
  };

  if (Platform.OS === 'android') {
    return (
      <SkeletonPressableAndroid
        onPress={() => handlePurchaseTypeButton(subIndex)}
        isLoading={isLoading}>
        <View
          style={[
            style.purchaseButton,
            isSelected && style.purchaseSelectedButton,
          ]}>
          <View style={style.leftContainer}>
            <View style={style.priceView}>
              <Text style={style.purchaseButtonPriceText}>
                {
                  item?.subscriptionOfferDetails?.[0]?.pricingPhases
                    ?.pricingPhaseList?.[0]?.formattedPrice
                }
              </Text>
              <Text style={style.purchaseButtonDurationText}>
                {getSubText(item.productId)}
              </Text>
            </View>
            <View>
              <Text style={style.infoText}>
                Billed {getInfo(item.productId)}
              </Text>
            </View>
          </View>
          <View style={style.rightContainer}>
            {/* {isSelected && (
            <Image
              style={style.iconCheck}
              source={require('../../assets/purchase/check.png')}
            />
          )} */}
            {(item.productId === 'com.aichat.yearly' ||
              item.productId === 'com.yeto.yearly') && (
              <View style={style.popularTextContainer}>
                <Text style={style.popularText}>Best Offer</Text>
              </View>
            )}
          </View>
        </View>
      </SkeletonPressableAndroid>
    );
  }

  return (
    <SkeletonPressable
      onPress={() => handlePurchaseTypeButton(subIndex)}
      isLoading={isLoading}>
      <View
        style={[
          style.purchaseButton,
          isSelected && style.purchaseSelectedButton,
        ]}>
        <View style={style.leftContainer}>
          <View style={style.priceView}>
            <Text style={style.purchaseButtonPriceText}>
              {item.localizedPrice}
            </Text>
            <Text style={style.purchaseButtonDurationText}>
              {getSubText(item.productId)}
            </Text>
          </View>
          <View>
            <Text style={style.infoText}>Billed {getInfo(item.productId)}</Text>
          </View>
        </View>
        <View style={style.rightContainer}>
          {/* {isSelected && (
            <Image
              style={style.iconCheck}
              source={require('../../assets/purchase/check.png')}
            />
          )} */}
          {(item.productId === 'com.aichat.yearly' ||
            item.productId === 'com.yeto.yearly') && (
            <View style={style.popularTextContainer}>
              <Text style={style.popularText}>Best Offer</Text>
            </View>
          )}
        </View>
      </View>
    </SkeletonPressable>
  );
};

export default PurchaseButton;
