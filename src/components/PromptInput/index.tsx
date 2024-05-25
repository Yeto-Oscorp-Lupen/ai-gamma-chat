import React from 'react';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {theme} from '../../constants/theme';

export type Props = {
  text: string;
  placeholder: string;
  style?: any;
  onSubmitEditing: any;
  isLoading?: boolean;
  onChangeText: any;
  containerStyle?: any;
  iconStyle?: any;
  buttonStyle?: any;
};

const PromptInput: React.FC<Props> = ({
  text,
  placeholder,
  onChangeText,
  onSubmitEditing,
  isLoading,
  containerStyle,
  iconStyle,
  buttonStyle,
}) => {
  return (
    <>
      <TextInput
        blurOnSubmit
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        keyboardAppearance={'dark'}
        keyboardType={'web-search'}
        multiline
        style={[styles.input, containerStyle]}
        placeholder={placeholder}
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor={theme.colors.main.white}
        editable={!isLoading}
        selectionColor={theme.colors.main.black}
        // ref={searchBarRef}
      />
      <TouchableOpacity
        style={[styles.sendButton, buttonStyle]}
        onPress={onSubmitEditing}
        disabled={!text?.length}>
        <Image
          resizeMode="contain"
          source={require('../../assets/chat/send.png')}
          style={[styles.sendIcon, iconStyle]}
        />
      </TouchableOpacity>
    </>
  );
};

export default PromptInput;
