import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{color: 'white', fontSize: 20}}>ReactNative Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    backgroundColor: 'skyblue',
    width: '100%',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default Header;
