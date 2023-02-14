import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import MyHeader from '../components/MyHeader';
import {MyInput} from '../components/MyInput';
import {TempPicker} from '../components/MyPicker';
import {MyButton} from '../components/MyButton';
import {MyText} from '../components/MyText';

const Temp = () => {
  const [inputVal, setInputVal] = useState('');
  const [measuredVal, setMeasuredVal] = useState('');
  const [valueFrom, setValueFrom] = useState('Celsius');
  const [valueTo, setValueTo] = useState('Celsius');

  const reset = () => {
    if (inputVal === '' || inputVal !== '') {
      setInputVal('');
      setMeasuredVal(0);
    }
  };

  useEffect(() =>
    (function convert() {
      if (valueFrom === valueTo) {
        setMeasuredVal(inputVal);
      } else {
        if (valueFrom === 'Celsius') {
          if (valueTo === 'Fahrenheit') {
            setMeasuredVal((inputVal * 9) / 5 + 32);
          } else if (valueTo === 'Kelvin') {
            setMeasuredVal(inputVal + 273.15);
          }
        } else if (valueFrom === 'Fahrenheit') {
          if (valueTo === 'Celsius') {
            setMeasuredVal(((inputVal - 32) * 5) / 9);
          } else if (valueTo === 'Kelvin') {
            setMeasuredVal(((inputVal - 32) * 5) / 9 + 273.15);
          }
        } else if (valueFrom === 'Kelvin') {
          if (valueTo === 'Celsius') {
            setMeasuredVal(inputVal - 273.15);
          } else if (valueTo === 'Fahrenheit') {
            setMeasuredVal(((inputVal - 273.15) * 9) / 5 + 32.0);
          }
        }
      }
    })(),
  );
  return (
    <ScrollView style={styles.container}>
      <MyHeader />
      <View style={styles.body}>
        <MyInput value={inputVal} onChangeText={text => setInputVal(text)} />
        <TempPicker
          text="From"
          selectedValue={valueFrom}
          onValueChange={(itemValue, itemIndex) => setValueFrom(itemValue)}
        />
        <TempPicker
          text="To"
          selectedValue={valueTo}
          onValueChange={(itemValue, itemIndex) => setValueTo(itemValue)}
        />
        <MyButton onPress={reset} />
        <MyText text={`${inputVal} ${valueFrom} = ${measuredVal} ${valueTo}`} />
      </View>
    </ScrollView>
  );
};

export default Temp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  body: {
    flex: 2,
  },
});
