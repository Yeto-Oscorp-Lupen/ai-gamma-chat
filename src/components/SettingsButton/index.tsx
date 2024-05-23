import React from 'react';
import {StyleSheet} from 'react-native';
import {ContactFill, PrivacyFill, StarFill, TermsFill} from '../Icons';
import CommonButton from '../Button';
import {theme} from '../../constants/theme';

export type Props = {
  index?: number;
  hasBorder?: boolean;
  text: string;
  onPress: () => void;
};

const Icons = (i: number | undefined) => {
  if (i === 0) {
    return <ContactFill style={style.icon} width={18} height={18} />;
  } else if (i === 1) {
    return <StarFill style={style.icon} width={18} height={18} />;
  } else if (i === 2) {
    return <TermsFill style={style.icon} width={18} height={18} />;
  } else if (i === 3) {
    return <PrivacyFill style={style.icon} width={18} height={18} />;
  } else {
    return null;
  }
};

const SettingButton: React.FC<Props> = ({index, text, onPress}) => {
  return (
    <CommonButton
      styles={style.container}
      text={text}
      onPress={onPress}
      icon={Icons(index)}
    />
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.main.primary,
  },
  icon: {
    color: theme.colors.main.white,
  },
});

export default SettingButton;
