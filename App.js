/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Dimensions} from 'react-native';
import Header from './components/Header';
import TodosScreen from './screens/TodosScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {inject, observer} from 'mobx-react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoStats from './screens/TodosStats';
// import todosScreen from './screens/todos.screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Tab = createBottomTabNavigator();
const App = ({TodosList}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log(TodosList.todoInputState);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.mainContainer}>
        <Header />
        <Tab.Navigator 
          screenOptions={({route}) => (
            console.log(route.name)
          )}
        >
          <Tab.Screen name="Todo List" component={TodosScreen} />
          <Tab.Screen name="Stats" component={TodoStats} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
    position: 'relative',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default inject('TodosList')(observer(App));
