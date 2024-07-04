import {Image, Text, View} from 'react-native';
import styles from './styles';
import useTranslation from '../../../../hooks/useTranslation';

const InfoItem = ({title, description, image}: any) => {
  const {t} = useTranslation('common', 'PURCHASE_PAGES');

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t(title)}</Text>
        <Text style={styles.description}>{t(description)}</Text>
      </View>
    </View>
  );
};

export default InfoItem;
