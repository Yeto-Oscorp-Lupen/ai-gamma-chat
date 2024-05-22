import {ReactElement} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import AnimatedPressable from '../AnimatedPressable';
import style from './style';

type ButtonPropsType = {
  text?: string;
  icon?: ReactElement | any;
  styles?: ViewStyle;
  onPress: (e: any) => void;
};

const Button = ({text, icon, onPress, styles}: ButtonPropsType) => {
  return (
    <AnimatedPressable onPress={onPress}>
      <View style={[style.container, styles]}>
        {icon && <View style={style.empty} />}
        {text && <Text style={style.createButtonText}>{text}</Text>}
        {icon && icon}
      </View>
    </AnimatedPressable>
  );
};

export default Button;
