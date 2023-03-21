import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { stringConstants } from '../utility/constants/String';
import { Border, Color, Font, Margin } from '../utility/Themes';

export const MyButton = props => {
  return (
    <View style={styles.body_btn}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.btn_text}>{stringConstants.reset}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body_btn: {
    margin: Margin.PRIMARY,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Color.BUTTON_BACKGROUND,
    alignItems: 'center',
    borderRadius: Border.ROUND_CORNER,
    marginTop: Margin.TOP_MARGIN_BTN,
  },
  btn_text: {
    fontSize: Font.PRIMARY,
    marginVertical: Margin.VERTICAL_MARGIN_TXT,
    marginHorizontal: Margin.HORIZONTAL_MARGIN_TXT,
    color: Color.TEXT_COLOR,
  },
});
