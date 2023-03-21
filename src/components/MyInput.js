import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { stringConstants } from '../utility/constants/String';
import { Border, Color, Font, Margin, Padding, Width } from '../utility/Themes';

export const MyInput = props => {
  return (
    <View style={styles.body_input}>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={stringConstants.placeholder}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body_input: {
    margin: Margin.SECONDARY,
    alignItems: 'center',
  },
  input: {
    fontSize: Font.SECONDARY,
    margin: Margin.TOP_MARGIN_BTN,
    width: Width.INPUT_WIDTH,
    borderColor: Color.BORDER,
    borderWidth: Border.THIN_BORDER,
    paddingLeft: Padding.INPUT_LEFT_PADDING,
    backgroundColor: Color.INPUT_BACKGROUND,
  },
});
