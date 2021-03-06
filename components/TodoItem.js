import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';


const TodoItem = ({text, active, RootStore, id}) => {
  console.log(active);

  const {switchTodoState} = RootStore.TodosList;
  console.log('active ' + active);
  return (
    <View style={styles(active).todoItemContainer}>
      <Text
        style={
          !active
            ? {textDecorationLine: 'line-through', fontSize: 18, color: 'grey'}
            : {textDecorationLine: 'none', fontSize: 18, color: 'black'}
        }>
        {text}
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={true ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => switchTodoState(id)}
        value={active}
      />
    </View>
  );
};

const styles = active =>
  StyleSheet.create({
    todoItemContainer: {
      backgroundColor: `${!active ? 'lightgrey' : 'white'}`,
      paddingLeft: 3,
      paddingRight: 3,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgrey',
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      textDecorationLine: 'line-through',
    },
  });

export default inject('RootStore')(observer(TodoItem));
