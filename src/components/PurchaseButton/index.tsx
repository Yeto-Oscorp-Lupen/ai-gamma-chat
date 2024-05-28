import {FunctionComponent} from 'react';
import {Platform, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {SkeletonPressableAndroid, SkeletonPressable} from './SkeletonPressable';
import style from './style';

export type Props = {
  navigation?: NavigationProp<any, any>;
  item: any;
  isSelected: boolean;
  subIndex: number;
  handlePurchaseTypeButton: (index: number) => void;
  isLoading?: boolean;
};

const PurchaseButton: FunctionComponent<Props> = ({
  item,
  isSelected,
  subIndex,
  handlePurchaseTypeButton,
  isLoading,
}) => {
  const SUB_TEXTS: {[key: string]: string} = {
    'com.aichat.monthly': 'Monthly',
    'com.yeto.monthly': 'Monthly',
    'com.aichat.yearly': 'Annual',
    'com.yeto.yearly': 'Annual',
  };

  const INFO_TEXTS: {[key: string]: string} = {
    'com.aichat.monthly': 'Monthly',
    'com.yeto.monthly': 'Monthly',
    'com.aichat.yearly': 'Annually',
    'com.yeto.yearly': 'Annually',
  };

  const getSubText = (productId: string): string => {
    return SUB_TEXTS[productId] || 'Weekly';
  };

  const getInfo = (productId: string): string => {
    return INFO_TEXTS[productId] || 'Weekly';
  };

  const showPerWeekPrice = (productId: string) => {
    if (productId === 'com.aichat.yearly') {
      return;
    }
    if (productId === 'com.yeto.yearly') {
      const {priceAmountMicros, priceCurrencyCode} =
        item?.subscriptionOfferDetails?.[0]?.pricingPhases?.pricingPhaseList[0];
      const normalPrice = priceAmountMicros / 1000000;

      return (normalPrice / 52).toFixed(2) + ' ' + priceCurrencyCode;
    }
    if (productId === 'com.aichat.monthly') {
      return;
    }
    if (productId === 'com.yeto.monthly') {
      const {priceAmountMicros, priceCurrencyCode} =
        item?.subscriptionOfferDetails?.[0]?.pricingPhases?.pricingPhaseList[0];
      const normalPrice = priceAmountMicros / 1000000;

      return (normalPrice / 12).toFixed(2) + ' ' + priceCurrencyCode;
    }
    return item.localizedPrice;
  };

  const renderButtonContent = () => (
    <View
      style={[
        style.purchaseButton,
        isSelected && style.purchaseSelectedButton,
      ]}>
      <View style={style.leftContainer}>
        <View style={style.priceView}>
          <Text
            style={
              Platform.OS === 'android'
                ? style.purchaseButtonPriceTextAndroid
                : style.purchaseButtonPriceText
            }>
            {Platform.OS === 'android'
              ? item?.subscriptionOfferDetails?.[0]?.pricingPhases
                  ?.pricingPhaseList?.[0]?.formattedPrice
              : item.localizedPrice}
          </Text>
          <Text
            style={
              Platform.OS === 'android'
                ? style.purchaseButtonDurationTextAndroid
                : style.purchaseButtonDurationText
            }>
            {getSubText(item.productId)}
          </Text>
        </View>
        <View>
          <Text style={style.infoText}>Billed {getInfo(item.productId)}</Text>
        </View>
      </View>
      <View style={style.rightContainer}>
        <View style={style.perWeekTextContainer}>
          <Text style={style.perWeekText}>
            {showPerWeekPrice(item.productId)}
          </Text>
          <Text style={style.perWeekText}>per week</Text>
        </View>
      </View>
    </View>
  );

  return Platform.OS === 'android' ? (
    <SkeletonPressableAndroid
      onPress={() => handlePurchaseTypeButton(subIndex)}
      isLoading={isLoading}>
      {renderButtonContent()}
    </SkeletonPressableAndroid>
  ) : (
    <SkeletonPressable
      onPress={() => handlePurchaseTypeButton(subIndex)}
      isLoading={isLoading}>
      {renderButtonContent()}
    </SkeletonPressable>
  );
};

export default PurchaseButton;
