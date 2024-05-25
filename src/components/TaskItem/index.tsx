import {Image, Text} from 'react-native';
import styles from './styles';
import AnimatedPressable from '../AnimatedPressable';

const TaskItem = ({imageUrl, name, desc, onPress}: any) => {
  return (
    <AnimatedPressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={imageUrl} resizeMode="contain" />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.descText}>{desc}</Text>
    </AnimatedPressable>
  );
};

export default TaskItem;
