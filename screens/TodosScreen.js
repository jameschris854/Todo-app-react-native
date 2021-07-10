import {inject, observer} from 'mobx-react';
import React from 'react';
import AddButton from '../components/AddButton';
import InputTodo from '../components/InputTodo';
import TodoItem from '../components/TodoItem';
import {FlatList, Text, View} from 'react-native';

const TodoScreen = ({TodosList}) => {
  console.log('list : ' + TodosList.todos);

  return (
    <>
      <AddButton />
      {TodosList.todoInputState ? <InputTodo /> : null}
      {TodosList.todos.length < 1 ? null : (
        <FlatList
          data={TodosList.todos}
          renderItem={({item}) => (
            <TodoItem text={item.text} active={item.active} id={item.id} />
          )}
          keyExtractor={item => item.id}
          style={{zIndex: -1}}
        />
      )}
    </>
  );
};

export default inject('TodosList')(observer(TodoScreen));
