import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Size, Color, Margin, Width, Font, Height } from '../utility/Themes';
import { stringConstants } from '../utility/constants/String';

const MyHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.header_image}
        source={require('../assets/logo/Applogo.png')}
      />
      <Text style={styles.header_text}>{stringConstants.appname}</Text>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    alignContent: 'center',
    flex: Size.CONTAINER_FLEX,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header_image: {
    height: Height.IMG_HEIGHT,
    width: Width.IMG_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: Margin.TOP_MARGIN_BTN,
  },
  header_text: {
    fontSize: Font.PRIMARY,
    fontWeight: 'bold',
    color: Color.TEXT_COLOR,
  },
});
