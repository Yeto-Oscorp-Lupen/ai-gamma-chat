import {StyleProp, Text, ViewStyle} from 'react-native';
import {theme} from '../../constants/theme';
import {Chat, Task} from '../Icons';
import styles from './styles';
import AnimatedPressable from '../AnimatedPressable';

type CustomTabBarButtonPropsType = {
  route: any;
  isFocused: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const CustomTabBarButton = ({
  route,
  isFocused,
  onPress,
  style,
}: CustomTabBarButtonPropsType) => (
  <AnimatedPressable onPress={onPress} style={[styles.button, style]}>
    {route.name === 'ChatsPage' ? (
      <Chat
        color={isFocused ? theme.colors.main.white : theme.colors.grey[300]}
        width={28}
        height={28}
      />
    ) : (
      <Task
        color={isFocused ? theme.colors.main.white : theme.colors.grey[300]}
        width={28}
        height={28}
      />
    )}
    <Text
      style={[
        styles.text,
        {
          color: isFocused ? theme.colors.main.white : theme.colors.grey[300],
        },
      ]}>
      {route.name === 'ChatsPage'
        ? 'Chats'
        : route.name === 'TasksPage' && 'Tasks for AI'}
    </Text>
  </AnimatedPressable>
);

export default CustomTabBarButton;
