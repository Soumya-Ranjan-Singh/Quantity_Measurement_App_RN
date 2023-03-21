import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import MyHeader from '../components/MyHeader';
import {MyInput} from '../components/MyInput';
import {VolumePicker} from '../components/MyPicker';
import {MyButton} from '../components/MyButton';
import {MyText} from '../components/MyText';
import pageStyles from '../utility/GlobalStyle';
import { stringConstants } from '../utility/constants/String';

const Volume = () => {
  const [inputVal, setInputVal] = useState('');
  const [measuredVal, setMeasuredVal] = useState('');
  const [valueFrom, setValueFrom] = useState('Litres');
  const [valueTo, setValueTo] = useState('Litres');

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
        if (valueFrom === 'Litres') {
          if (valueTo === 'Millilitres') {
            setMeasuredVal(inputVal / 0.001);
          } else if (valueTo === 'Gallons') {
            setMeasuredVal(inputVal * 0.21997);
          }
        } else if (valueFrom === 'Millilitres') {
          if (valueTo === 'Litres') {
            setMeasuredVal(inputVal / 1000);
          } else if (valueTo === 'Gallons') {
            setMeasuredVal(inputVal * 0.0002641721);
          }
        } else if (valueFrom === 'Gallons') {
          if (valueTo === 'Litres') {
            setMeasuredVal(inputVal / 0.26417);
          } else if (valueTo === 'Millilitres') {
            setMeasuredVal(inputVal / 0.00026417);
          }
        }
      }
    })(),
  );
  return (
    <ScrollView style={pageStyles.container}>
      <MyHeader />
      <View style={pageStyles.body}>
        <MyInput value={inputVal} onChangeText={text => setInputVal(text)} />
        <VolumePicker
          text={stringConstants.from}
          selectedValue={valueFrom}
          onValueChange={(itemValue, itemIndex) => setValueFrom(itemValue)}
        />
        <VolumePicker
          text={stringConstants.to}
          selectedValue={valueTo}
          onValueChange={(itemValue, itemIndex) => setValueTo(itemValue)}
        />
        <MyButton onPress={reset} />
        <MyText text={`${inputVal} ${valueFrom} = ${measuredVal} ${valueTo}`} />
      </View>
    </ScrollView>
  );
};

export default Volume;
