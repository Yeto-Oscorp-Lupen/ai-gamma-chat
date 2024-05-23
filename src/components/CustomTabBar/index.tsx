import {View} from 'react-native';
import CustomTabBarButton from '../CustomTabBarButton';
import styles from './styles';

const CustomTabBar = ({state, descriptors, navigation}: any) => (
  <View style={styles.mainDiv}>
    {state.routes.map((route: any, index: any) => {
      const {options} = descriptors[route.key];

      const isFocused = state.index === index;

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
          key={index}
          route={route}
          isFocused={isFocused}
          options={options}
          onPress={onPress}
        />
      );
    })}
  </View>
);

export default CustomTabBar;
