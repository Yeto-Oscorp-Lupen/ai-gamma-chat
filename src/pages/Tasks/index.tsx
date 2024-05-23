/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Animated, FlatList, View} from 'react-native';
import styles from './styles';
import {TASKS_ITEMS} from '../../constants/tasks';
import TaskItem from '../../components/TaskItem';
import AnimatedView from '../../components/AnimatedView';
import {useCallback, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {animateHide, animateVisible} from '../../utils';
import StickyImageMessage from '../../components/StickyImageMessage';

const TasksPage = () => {
  const actionAnimatedValue = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      animateVisible(actionAnimatedValue);
      return () => animateHide(actionAnimatedValue);
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
          ListFooterComponent={() => <View style={styles.seperator} />}
          renderItem={({item: task}) => (
            <TaskItem
              imageUrl={task.imageUrl}
              name={task.name}
              desc={task.desc}
            />
          )}
        />
      </AnimatedView>
      <StickyImageMessage />
    </View>
  );
};

export default TasksPage;
