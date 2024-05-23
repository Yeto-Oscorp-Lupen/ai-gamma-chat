import {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import SkeletonPressable from './SkeletonPressable';
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
    if (productId === 'com.deepart.monthly') {
      return 'Monthly';
    }
    if (productId === 'com.deepart.yearly') {
      return 'Annual';
    }
    if (productId === 'com.deepart.lifetime') {
      return 'Lifetime';
    }

    return 'Weekly';
  };

  const getInfo = (productId: string): string => {
    if (productId === 'com.deepart.monthly') {
      return 'Monthly';
    }
    if (productId === 'com.deepart.yearly') {
      return 'Annually';
    }

    return 'Weekly';
  };

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
          {item.productId === 'com.deepart.yearly' && (
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
