/* eslint-disable react-native/no-inline-styles */
import {Animated, FlatList, View} from 'react-native';
import styles from './styles';
import {TASKS_ITEMS} from '../../constants/tasks';
import TaskItem from '../../components/TaskItem';
import AnimatedView from '../../components/AnimatedView';
import {useCallback, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {animateHide, animateVisible} from '../../utils';

const TasksPage = () => {
  const actionAnimatedValue = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      animateVisible(actionAnimatedValue); // Make component visible when focused
      return () => animateHide(actionAnimatedValue); // Optionally make component hidden when not focused
    }, []),
  );

  return (
    <View style={styles.safeAreaContainer}>
      <AnimatedView
        animatedValue={actionAnimatedValue}
        style={{paddingBottom: 80}}>
        <FlatList
          data={TASKS_ITEMS}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsHorizontalScrollIndicator={false}
          renderItem={({item: task}) => (
            <TaskItem
              imageUrl={task.imageUrl}
              name={task.name}
              desc={task.desc}
            />
          )}
        />
      </AnimatedView>
    </View>
  );
};

export default TasksPage;
