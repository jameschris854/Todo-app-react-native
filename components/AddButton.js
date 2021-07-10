import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';

const AddButton = ({TodosList}) => {
  const {switchInputState} = TodosList;

  return (
    <Pressable
      style={styles.addButton}
      onPress={() => console.log(switchInputState())}>
      <Text style={{color: 'white', fontSize: 35}}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});

export default inject('TodosList')(observer(AddButton));
