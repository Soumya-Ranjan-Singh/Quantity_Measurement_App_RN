import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export const MyInput = props => {
  return (
    <View style={styles.body_input}>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder="Enter Value Here"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body_input: {
    margin: 15,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    margin: 10,
    width: 200,
    borderColor: '#555',
    borderWidth: 0.5,
    paddingLeft: 15,
    backgroundColor: '#3d3d3d',
  },
});
