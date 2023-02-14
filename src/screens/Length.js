import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import MyHeader from '../components/MyHeader';
import {MyInput} from '../components/MyInput';
import {LengthPicker} from '../components/MyPicker';
import {MyButton} from '../components/MyButton';
import {MyText} from '../components/MyText';

const Length = () => {
  const [inputVal, setInputVal] = useState('');
  const [measuredVal, setMeasuredVal] = useState('');
  const [valueFrom, setValueFrom] = useState('Centimeter');
  const [valueTo, setValueTo] = useState('Centimeter');

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
        if (valueFrom === 'Centimeter') {
          if (valueTo === 'Meter') {
            setMeasuredVal(inputVal / 100);
          } else if (valueTo === 'Kilometer') {
            setMeasuredVal(inputVal / 100000);
          } else if (valueTo === 'Milimeter') {
            setMeasuredVal(inputVal / 0.1);
          } else if (valueTo === 'Micrometer') {
            setMeasuredVal(inputVal / 0.0001);
          } else if (valueTo === 'Mile') {
            setMeasuredVal(inputVal * 0.0000062137);
          } else if (valueTo === 'Foot') {
            setMeasuredVal(inputVal * 0.032808);
          }
        } else if (valueFrom === 'Meter') {
          if (valueTo === 'Centimeter') {
            setMeasuredVal(inputVal * 100);
          } else if (valueTo === 'Kilometer') {
            setMeasuredVal(inputVal / 1000);
          } else if (valueTo === 'Milimeter') {
            setMeasuredVal(inputVal * 1000);
          } else if (valueTo === 'Micrometer') {
            setMeasuredVal(inputVal / 0.000001);
          } else if (valueTo === 'Mile') {
            setMeasuredVal(inputVal * 0.00062137);
          } else if (valueTo === 'Foot') {
            setMeasuredVal(inputVal * 3.2808);
          }
        } else if (valueFrom === 'Kilometer') {
          if (valueTo === 'Centimeter') {
            setMeasuredVal(inputVal * 100000);
          } else if (valueTo === 'Meter') {
            setMeasuredVal(inputVal * 1000);
          } else if (valueTo === 'Milimeter') {
            setMeasuredVal(inputVal / 0.000001);
          } else if (valueTo === 'Micrometer') {
            setMeasuredVal(inputVal / 0.000000001);
          } else if (valueTo === 'Mile') {
            setMeasuredVal(inputVal * 0.62137);
          } else if (valueTo === 'Foot') {
            setMeasuredVal(inputVal * 3280.8);
          }
        } else if (valueFrom === 'Milimeter') {
          if (valueTo === 'Centimeter') {
            setMeasuredVal(inputVal / 10);
          } else if (valueTo === 'Meter') {
            setMeasuredVal(inputVal / 1000);
          } else if (valueTo === 'Kilometer') {
            setMeasuredVal(inputVal / 1000000);
          } else if (valueTo === 'Micrometer') {
            setMeasuredVal(inputVal / 0.001);
          } else if (valueTo === 'Mile') {
            setMeasuredVal(inputVal * 0.00000062137);
          } else if (valueTo === 'Foot') {
            setMeasuredVal(inputVal * 0.0032808);
          }
        } else if (valueFrom === 'Micrometer') {
          if (valueTo === 'Centimeter') {
            setMeasuredVal(inputVal / 10000);
          } else if (valueTo === 'Meter') {
            setMeasuredVal(inputVal / 1000000);
          } else if (valueTo === 'Kilometer') {
            setMeasuredVal(inputVal / 1000000000);
          } else if (valueTo === 'Milimeter') {
            setMeasuredVal(inputVal / 1000);
          } else if (valueTo === 'Mile') {
            setMeasuredVal(inputVal * 0.00000000062137);
          } else if (valueTo === 'Foot') {
            setMeasuredVal(inputVal * 0.0000032808);
          }
        } else if (valueFrom === 'Mile') {
          if (valueTo === 'Centimeter') {
            setMeasuredVal(inputVal / 0.0000062137);
          } else if (valueTo === 'Meter') {
            setMeasuredVal(inputVal / 0.00062137);
          } else if (valueTo === 'Kilometer') {
            setMeasuredVal(inputVal / 0.62137);
          } else if (valueTo === 'Milimeter') {
            setMeasuredVal(inputVal / 0.00000062137);
          } else if (valueTo === 'Micrometer') {
            setMeasuredVal(inputVal / 0.00000000062137);
          } else if (valueTo === 'Foot') {
            setMeasuredVal(inputVal * 5280.0);
          }
        } else if (valueFrom === 'Foot') {
          if (valueTo === 'Centimeter') {
            setMeasuredVal(inputVal / 0.032808);
          } else if (valueTo === 'Meter') {
            setMeasuredVal(inputVal / 3.2808);
          } else if (valueTo === 'Kilometer') {
            setMeasuredVal(inputVal / 3280.8);
          } else if (valueTo === 'Milimeter') {
            setMeasuredVal(inputVal / 0.0032808);
          } else if (valueTo === 'Micrometer') {
            setMeasuredVal(inputVal / 0.0000032808);
          } else if (valueTo === 'Mile') {
            setMeasuredVal(inputVal * 0.00018939);
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
        <LengthPicker
          text="From"
          selectedValue={valueFrom}
          onValueChange={(itemValue, itemIndex) => setValueFrom(itemValue)}
        />
        <LengthPicker
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

export default Length;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  body: {
    flex: 2,
  },
});
