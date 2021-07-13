import {inject, observer} from 'mobx-react';
import React from 'react';
import AddButton from '../components/AddButton';
import InputTodo from '../components/InputTodo';
import TodoItem from '../components/TodoItem';
import {FlatList, Text, View,StyleSheet, Pressable } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { color } from 'react-native-reanimated';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons,parseIconFromClassName } from 'react-native-fontawesome';
SolidIcons._fontFamily = 'FontAwesome5Free-Solid';
const deleteIcon = parseIconFromClassName('far fa-trash-alt')

const TodoScreen = ({TodosList,navigation,route}) => {
  console.log('list : ' + TodosList.todos);

  return (  
    <>
      {/* <AddButton /> */}
      {TodosList.todoInputState ? <InputTodo /> : null}
      {TodosList.todos.length < 1 ? null : 
         <SwipeListView
         data={TodosList.todos}
         renderItem={({item}) => (
           <TodoItem text={item.text} active={item.active} id={item.id} />
         )}
         renderHiddenItem={ ({item}) => (
             <View style={styles.hiddenItem}>
                 <Pressable onPress={() => TodosList.deleteTodo(item.id)}  style={styles.hiddenItemText}><FontAwesome style={{fontSize:20, marginRight:10,color:'white'}} icon={deleteIcon} /></Pressable>
                 <Pressable onPress={() => TodosList.deleteTodo(item.id)}  style={styles.hiddenItemText}><FontAwesome style={{fontSize:20, marginRight:10,color:'white'}} icon={SolidIcons.trash} /></Pressable>
             </View>
         )}
         leftOpenValue={75}
         rightOpenValue={-75}
     />
        
      }
     
    </>
  );
};

const styles = StyleSheet.create({
  hiddenItem:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'red',
    width:'100%',
    height:'100%',
  },
  hiddenItemText:{
    color:'white',
    fontSize:18,
    fontWeight:'900',
  }
})

export default inject('TodosList')(observer(TodoScreen));


{/* <FlatList
          data={TodosList.todos}
          renderItem={({item}) => (
            <TodoItem text={item.text} active={item.active} id={item.id} />
          )}
          keyExtractor={item => item.id}
          style={{zIndex: -1}}
        /> */}