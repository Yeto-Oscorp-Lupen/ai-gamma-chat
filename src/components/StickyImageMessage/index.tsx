import {StyleSheet, Text, View} from 'react-native';
import {WIDTH} from '../../constants';
import AnimatedPressable from '../AnimatedPressable';
import {theme} from '../../constants/theme';
import useTranslation from '../../hooks/useTranslation';
import {TAB_BAR_HEIGHT} from '../CustomTabBar/styles';

const StickyImageMessage = ({onPress = () => {}}: any) => {
  const {t} = useTranslation('common');

  return (
    <View style={styles.container}>
      <AnimatedPressable onPress={onPress} style={styles.textContainer}>
        <Text style={styles.text}>{t('TYPE_YOUR_MESSAGE_HERE')}</Text>
      </AnimatedPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: TAB_BAR_HEIGHT,
    width: WIDTH,
    height: theme.spacing(8),
    backgroundColor: theme.colors.main.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing(1),
  },
  textContainer: {
    borderWidth: 1,
    borderColor: theme.colors.main.primary,
    width: WIDTH - theme.spacing(4),
    paddingVertical: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
  text: {
    color: theme.colors.main.gray,
  },
});

export default StickyImageMessage;
