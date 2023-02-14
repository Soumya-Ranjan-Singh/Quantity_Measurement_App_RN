import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const MyButton = props => {
  return (
    <View style={styles.body_btn}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.btn_text}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body_btn: {
    margin: 10,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 25,
  },
  btn_text: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
    color: 'white',
  },
});
