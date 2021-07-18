import {inject, observer} from 'mobx-react';
import React from 'react';
import AddButton from '../components/AddButton';
import InputTodo from '../components/InputTodo';
import TodoItem from '../components/TodoItem';
import {FlatList, Text, View, StyleSheet, Pressable} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {color} from 'react-native-reanimated';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
import {useState} from 'react';
SolidIcons._fontFamily = 'FontAwesome5Free-Solid';

const TodoScreen = ({RootStore, navigation, route}) => {
  const deleteIcon = parseIconFromClassName('fas fa-trash-alt');
  const editIcon = parseIconFromClassName('fas fa-pen');
  const TodosList = RootStore.TodosList;
  console.log('list : ' + TodosList.todos);
  const [editId, setEditId] = useState(0);
  const [oldText, setOldText] = useState('');
  return (
    <>
      {/* <AddButton /> */}
      {TodosList.todoInputState ? <InputTodo editId={editId} oldText={oldText} /> : null}
      {TodosList.todos.length < 1 ? null : (
        <SwipeListView
          data={TodosList.todos}
          renderItem={({item}) => (
            <TodoItem text={item.text} active={item.active} id={item.id} />
          )}
          renderHiddenItem={({item}) => (
            <View style={styles.hiddenItem}>
              <Pressable
                onPress={() => {
                  setEditId(item.id);
                  setOldText(item.text)
                  TodosList.switchInputState(true);
                }}
                style={{...styles.hiddenItemText, backgroundColor: 'skyblue'}}>
                <FontAwesome
                  style={{fontSize: 20, marginRight: 10, color: 'white'}}
                  icon={editIcon}
                />
              </Pressable>
              <Pressable
                onPress={() => TodosList.deleteTodo(item.id)}
                style={styles.hiddenItemText}>
                <FontAwesome
                  style={{fontSize: 20, marginRight: 10, color: 'white'}}
                  icon={deleteIcon}
                />
              </Pressable>
            </View>
          )}
          rightOpenValue={-105}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  hiddenItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffff',
    width: '100%',
    height: '100%',
  },
  hiddenItemText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
    backgroundColor: 'indianred',
    height: '100%',
    width: 50,
    paddingLeft: 10,
    margin: 1,
    borderRadius: 10,
  },
});

export default inject('RootStore')(observer(TodoScreen));

{
  /* <FlatList
          data={TodosList.todos}
          renderItem={({item}) => (
            <TodoItem text={item.text} active={item.active} id={item.id} />
          )}
          keyExtractor={item => item.id}
          style={{zIndex: -1}}
        /> */
}
