/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Animated, FlatList, View} from 'react-native';
import styles from './styles';
import {TASKS_ITEMS} from '../../constants/tasks';
import TaskItem from '../../components/TaskItem';
import AnimatedView from '../../components/AnimatedView';
import {useCallback, useRef, useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {animateHide, animateVisible, vibrate} from '../../utils';
import StickyImageMessage from '../../components/StickyImageMessage';
import AnimatedPressable from '../../components/AnimatedPressable';
import {useSelector} from 'react-redux';
import GammaButton from './components/GammaButton';
import useTranslation from '../../hooks/useTranslation';

const TasksPage = ({navigation}: any) => {
  const {t} = useTranslation('common', 'TASKS_PAGE');
  const {isSubs} = useSelector((state: any) => state.app);
  const actionAnimatedValue = useRef(new Animated.Value(0)).current;
  const taskAnimatedValues = useRef(
    TASKS_ITEMS.map(() => new Animated.Value(0)),
  ).current;
  const [tasks, setTasks] = useState(TASKS_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState<string>('Popular');
  const [categories, setCategories] = useState<string[]>([]);
  const flatListRef = useRef<FlatList>(null);

  useFocusEffect(
    useCallback(() => {
      const cat = TASKS_ITEMS.map(task => task.category);
      setCategories(['POPULAR', ...new Set(cat)]);
      filterTasks('POPULAR');
      animateVisible(actionAnimatedValue);
      return () => animateHide(actionAnimatedValue);
    }, []),
  );

  useEffect(() => {
    animateTasks();
  }, [tasks]);

  const animateTasks = () => {
    const animations = tasks.map((_, index) => {
      return Animated.timing(taskAnimatedValues[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      });
    });
    Animated.stagger(100, animations).start();
  };

  const handleTaskItemPress = (item: any) => {
    vibrate();
    navigation.navigate({
      name: 'TasksChatPage',
      params: {
        item,
      },
    });
  };

  const filterTasks = (category: string) => {
    vibrate();
    setSelectedCategory(category);
    const filteredTasks = TASKS_ITEMS.filter(task => {
      if (category === 'POPULAR') {
        return task.isPopular;
      }
      return task.category === category;
    });
    setTasks(filteredTasks);
    taskAnimatedValues.forEach(value => value.setValue(0)); // Reset animation values
    flatListRef.current?.scrollToOffset({animated: true, offset: 0}); // Scroll to top
  };

  return (
    <>
      <View style={styles.safeAreaContainer}>
        {isSubs === false && (
          <GammaButton
            navigation={navigation}
            animatedValue={actionAnimatedValue}
          />
        )}
        <AnimatedView
          animatedValue={actionAnimatedValue}
          style={{paddingBottom: 80}}>
          <FlatList
            ref={flatListRef}
            data={categories}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 10,
              marginVertical: 10,
            }}
            renderItem={({item: category}) => (
              <AnimatedPressable
                onPress={() => filterTasks(category)}
                style={
                  category === selectedCategory
                    ? styles.categoryChipSelected
                    : styles.categoryChip
                }>
                <Animated.Text style={styles.categoryChipText}>
                  {t(`CATEGORIES.${category}`)}
                </Animated.Text>
              </AnimatedPressable>
            )}
          />
          <FlatList
            ref={flatListRef}
            data={tasks}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => (
              <View
                style={isSubs ? styles.seperator : styles.seperatorIsNotSub}
              />
            )}
            renderItem={({item: task, index}) => (
              <Animated.View
                style={{
                  opacity: taskAnimatedValues[index],
                  transform: [
                    {
                      translateY: taskAnimatedValues[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [30, 0],
                      }),
                    },
                  ],
                }}>
                <TaskItem
                  imageUrl={task?.imageUrl}
                  imageText={task?.imageText}
                  name={t(`TASKS.${task.name}`)}
                  desc={t(`TASKS.${task.desc}`)}
                  onPress={() => handleTaskItemPress(task)}
                />
              </Animated.View>
            )}
          />
        </AnimatedView>
      </View>
      <StickyImageMessage
        onPress={() => navigation.navigate('ChatsChatPage')}
      />
    </>
  );
};

export default TasksPage;
