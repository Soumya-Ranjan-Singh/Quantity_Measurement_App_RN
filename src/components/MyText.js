import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Font, Margin } from '../utility/Themes';

export const MyText = props => {
  return (
    <View style={styles.body_text}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body_text: {
    margin: Margin.TERNARY,
    alignItems: 'center',
  },
  text: {
    marginTop: Margin.TERNARY,
    fontSize: Font.SECONDARY,
  },
});
