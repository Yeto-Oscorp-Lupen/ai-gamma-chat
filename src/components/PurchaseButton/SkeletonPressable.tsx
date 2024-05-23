import {Pressable} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  PURCHASE_BUTTON_BACKGROUND_COLOR,
  PURCHASE_BUTTON_BORDER_RADIUS,
  PURCHASE_BUTTON_BORDER_WIDTH,
  PURCHASE_BUTTON_HEIGHT,
  PURCHASE_BUTTON_WIDTH,
} from './style';
import styles from './style';
import {BlurView} from '@react-native-community/blur';
import {theme} from '../../constants/theme';

const SkeletonPressable = ({children, isLoading, onPress, style}: any) => {
  return isLoading ? (
    <BlurView blurType="light" blurAmount={5} style={styles.purchaseButton}>
      <SkeletonPlaceholder
        borderRadius={PURCHASE_BUTTON_BORDER_RADIUS}
        backgroundColor={PURCHASE_BUTTON_BACKGROUND_COLOR}
        direction="right"
        speed={1000}
        highlightColor={theme.colors.main.white}>
        <SkeletonPlaceholder.Item
          width={PURCHASE_BUTTON_WIDTH}
          height={PURCHASE_BUTTON_HEIGHT}
          borderWidth={PURCHASE_BUTTON_BORDER_WIDTH}
          justifyContent="center">
          <SkeletonPlaceholder.Item width={140} height={24} marginLeft={16} />
          <SkeletonPlaceholder.Item
            width={50}
            height={10}
            marginLeft={16}
            marginTop={5}
          />
          <SkeletonPlaceholder.Item
            position="absolute"
            bottom={16}
            right={12}
            width={50}
            height={12}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </BlurView>
  ) : (
    <Pressable onPress={onPress} style={style}>
      {children}
    </Pressable>
  );
};

export default SkeletonPressable;
