import React from 'react';
import {ReactElement} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import style from './style';

type ButtonPropsType = {
  text?: string;
  icon?: ReactElement | any;
  styles?: ViewStyle;
  onPress: any;
};

const CommonButton = ({text, icon, onPress, styles}: ButtonPropsType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style.container, styles]}>
        {icon && <View style={style.empty} />}
        {text && <Text style={style.createButtonText}>{text}</Text>}
        {icon && icon}
      </View>
    </TouchableOpacity>
  );
};

export default CommonButton;
