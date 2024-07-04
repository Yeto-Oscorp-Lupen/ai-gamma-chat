import {Image, Text, View} from 'react-native';
import styles from './styles';

const InfoItem = ({title, description, image}: any) => (
  <View style={styles.container}>
    <View>
      <Image style={styles.image} source={image} resizeMode="contain" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

export default InfoItem;
