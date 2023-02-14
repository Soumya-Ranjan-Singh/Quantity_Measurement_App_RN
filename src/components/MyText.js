import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export const MyText = props => {
  return (
    <View style={styles.body_text}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body_text: {
    margin: 10,
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 20,
  },
});
