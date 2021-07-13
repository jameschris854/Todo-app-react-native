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
import InputTodo from './components/InputTodo'
import AddButton from './components/AddButton'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons,parseIconFromClassName } from 'react-native-fontawesome';

// import todosScreen from './screens/todos.screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const chartIcon = parseIconFromClassName('fas fa-chart-pie') // will be parsed to chevronLeft

const Tab = createBottomTabNavigator();
const App = ({TodosList}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log(TodosList.todoInputState);
               const {switchInputState, addNewTodo} = TodosList;

 
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.mainContainer}>
        <Header />
        <Tab.Navigator 
          screenOptions={({route}) => (
            console.log(route.name)
          )}
          tabBarOptions={{showLabel:false,style:{
            position:'absolute',
            bottom:25,
            left:10,
            right:10,
            elevation:0,
            backgroundColor:'white',
            borderRadius:15,
            height:90,
            ...styles.shadow
          }}}
        >
          <Tab.Screen name="Todo List" component={TodosScreen}  options={{
            tabBarIcon:({focused}) => {
              return(
              <View>
            <FontAwesome style={{fontSize:25,color:`${focused ? 'skyblue' :'lightgrey'}`}} icon={SolidIcons.home} />
            <Text style={{color:`${focused?'skyblue' : 'lightgrey'}`,...styles.tabText}}>Home</Text>
            </View>
            )}
            
          }}/>
          <Tab.Screen name="Input" component={TodosScreen} options={{
            tabBarIcon:({focused}) => (
              <View>
              <AddButton />
            </View>
            ),
            tabBarButton: (props) => (
                <AddButton  {...props} />
            )
          }} />
          <Tab.Screen name="Stats" component={TodoStats} options={{
            tabBarIcon:({focused}) =>{
              //  focused? switchInputState(false): null
               return(
              <View>
            <FontAwesome style={{fontSize:25,color:`${focused ? 'skyblue' :'lightgrey'}`}} icon={chartIcon} />
            <Text style={{color:`${focused?'skyblue' : 'lightgrey'}`,...styles.tabText}}>Stats</Text>
            </View>
            )}
          }} />
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
  shadow:{
    shadowColor:'#7F5D40',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,shadowRadius:3.5,elevation:5 },
    tabText:{
      textAlign:'center'
    }
});

export default inject('TodosList')(observer(App));
