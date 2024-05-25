import {Text, TouchableHighlight, View} from 'react-native';
import {theme} from '../../constants/theme';
import {Chat, Task} from '../Icons';
import styles from './styles';

const CustomTabBarButton = ({
  route,
  isFocused,
  options,
  onPress,
  index,
  style,
  imageStyle,
}: any) => (
  <TouchableHighlight
    activeOpacity={1}
    underlayColor={'transparent'}
    key={route.name || index}
    accessibilityRole="button"
    accessibilityState={isFocused ? {selected: true} : {}}
    accessibilityLabel={options.tabBarAccessibilityLabel}
    onPress={() => {
      onPress();
    }}
    style={style}>
    <View style={[styles.unfocusedTextView, imageStyle]}>
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
    </View>
  </TouchableHighlight>
);

export default CustomTabBarButton;
