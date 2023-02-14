import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import {useOrientation} from '../components/useOrientation';

const Home = ({navigation}) => {
  const getValue = useOrientation();
  return (
    <ScrollView style={styles.container}>
      <MyHeader />
      <View style={styles.body}>
        <View style={[styles.body_btn, {marginTop: getValue(400, 100)}]}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Converters');
            }}>
            <Text style={styles.btn_text}>Welcome</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  body: {
    flex: 2,
  },
  body_btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 40,
  },
  btn: {
    backgroundColor: 'green',
    width: 150,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    color: 'white',
    fontSize: 25,
  },
});
