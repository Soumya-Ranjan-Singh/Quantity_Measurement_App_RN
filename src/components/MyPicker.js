import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const LengthPicker = props => {
  return (
    <View style={styles.body_picker}>
      <Text style={styles.body_picker_text}>
        {props.text} :{' '}
      </Text>
      <Picker
        style={styles.picker}
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}>
        <Picker.Item label="Centimeter" value="Centimeter" />
        <Picker.Item label="Meter" value="Meter" />
        <Picker.Item label="Kilometer" value="Kilometer" />
        <Picker.Item label="Milimeter" value="Milimeter" />
        <Picker.Item label="Micrometer" value="Micrometer" />
        <Picker.Item label="Mile" value="Mile" />
        <Picker.Item label="Foot" value="Foot" />
      </Picker>
    </View>
  );
};

export const TempPicker = props => {
    return (
      <View style={styles.body_picker}>
        <Text style={styles.body_picker_text}>
          {props.text} :{' '}
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={props.selectedValue}
          onValueChange={props.onValueChange}>
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit" value="Fahrenheit" />
          <Picker.Item label="Kelvin" value="Kelvin" />
        </Picker>
      </View>
    );
  };

  export const VolumePicker = props => {
    return (
      <View style={styles.body_picker}>
        <Text style={styles.body_picker_text}>
          {props.text} :{' '}
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={props.selectedValue}
          onValueChange={props.onValueChange}>
          <Picker.Item label="Litres" value="Litres" />
          <Picker.Item label="Millilitres" value="Millilitres" />
          <Picker.Item label="Gallons" value="Gallons" />
        </Picker>
      </View>
    );
  };

const styles = StyleSheet.create({
  body_picker: {
    marginTop: 10,
  },
  body_picker_text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 40,
  },
  picker: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
