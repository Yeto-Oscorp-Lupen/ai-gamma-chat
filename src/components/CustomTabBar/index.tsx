import {View} from 'react-native';
import CustomTabBarButton from '../CustomTabBarButton';
import styles from './styles';

const CustomTabBar = ({state, navigation}: any) => (
  <View style={styles.mainDiv}>
    {state.routes.map((route: any, i: number) => {
      const isFocused = state.index === i;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <CustomTabBarButton
          key={i}
          route={route}
          isFocused={isFocused}
          onPress={onPress}
        />
      );
    })}
  </View>
);

export default CustomTabBar;
