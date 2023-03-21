import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import {useOrientation} from '../hooks/useOrientation';
import { stringConstants } from '../utility/constants/String';
import pageStyles from '../utility/GlobalStyle';

const Home = ({navigation}) => {
  const getValue = useOrientation();
  return (
    <ScrollView style={pageStyles.container}>
      <MyHeader />
      <View style={pageStyles.body}>
        <View style={[pageStyles.body_btn, {marginTop: getValue(400, 100)}]}>
          <TouchableOpacity
            style={pageStyles.btn}
            onPress={() => {
              navigation.navigate('Converters');
            }}>
            <Text style={pageStyles.btn_text}>{stringConstants.welcome}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
