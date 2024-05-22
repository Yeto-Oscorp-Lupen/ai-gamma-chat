import {View, Dimensions, StyleSheet} from 'react-native';
import TabBarButton from '../CustomTabBarButton';
import {theme} from '../../constants/theme';

const {width} = Dimensions.get('window');

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.mainDiv}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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
          <TabBarButton
            key={index}
            route={route}
            isFocused={isFocused}
            options={options}
            onPress={onPress}
            index={index}
            label={label}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  focusedTextView: {
    borderWidth: 2,
    alignItems: 'center',
  },
  unfocusedTextView: {
    borderWidth: 2,
    alignItems: 'center',
  },
  mainDiv: {
    flexDirection: 'row',
    width,
    height: 80,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 10,
    backgroundColor: theme.colors.main.secondary,
    position: 'absolute',
    bottom: 0,
  },
});

export default TabBar;
