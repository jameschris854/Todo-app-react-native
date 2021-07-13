import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable,Dimensions} from 'react-native';

const AddButton = ({TodosList,navigation,...props}) => {
  const {switchInputState,todoInputState} = TodosList;
  return (
    <Pressable
      style={styles.addButton}
      onPress={() =>{
         switchInputState(!todoInputState)}}>
      <Text style={{color: 'white', fontSize: 50}}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 70,
    backgroundColor: 'skyblue',
    top:-30,
    alignItems: 'center',
    borderRadius: 100,
  },
});


//  addButton: {
//     width: 70,
//     height: 70,
//     backgroundColor: 'skyblue',
//     display: 'flex',
//     alignItems: 'center',
//     borderRadius: 100,
//     position: 'absolute',
//     bottom: '0%',
//     right: Dimensions.get('window').width / 2 - 35,
//     elevation:1000,
//     zIndex:1000,
//   },
// });

export default inject('TodosList')(observer(AddButton));
