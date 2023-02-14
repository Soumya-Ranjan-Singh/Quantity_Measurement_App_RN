import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const MyHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.header_image}
        source={require('../assets/logo/Applogo.png')}
      />
      <Text style={styles.header_text}>Quantity Measurement</Text>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    alignContent: 'center',
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header_image: {
    height: 150,
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  header_text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
