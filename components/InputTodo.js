import {inject, observer} from 'mobx-react';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Dimensions,
} from 'react-native';
// onChangeText={onChangeNumber}
// value={number}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InputTodo = ({TodosList}) => {
  const {switchInputState, addNewTodo} = TodosList;

  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.inputWrapper} blurRadius={1}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={val => setInputText(val)}
          placeholder="Add a new task"
        />
        <Pressable
          style={styles.btn}
          onPress={() => {
            addNewTodo(inputText);
            setInputText('');
          }}>
          <Text style={{color: 'white'}}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#9898986e',
    position: 'absolute',
    height: windowHeight,
    width: windowWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: '85%',
    backgroundColor: 'white',
  },
  btn: {
    width: 50,
    backgroundColor: 'skyblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    margin: 12,
  },
});

export default inject('TodosList')(observer(InputTodo));
