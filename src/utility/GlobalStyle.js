import {StyleSheet} from 'react-native';
import { Size, Color, Margin, Width, Border, Font } from './Themes';

const pageStyles = StyleSheet.create({
  container: {
    backgroundColor: Color.BACKGROUND,
    flex: Size.CONTAINER_FLEX,
  },
  body: {
    flex: Size.BODY_FLEX,
  },
  body_btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: Margin.RIGHT_WELCOME_BTN,
  },
  btn: {
    backgroundColor: Color.BUTTON_BACKGROUND,
    width: Width.BTN_WIDTH,
    borderRadius: Border.ROUND_CORNER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    color: Color.TEXT_COLOR,
    fontSize: Font.PRIMARY,
    margin: Margin.PRIMARY,
  },
});

export default pageStyles;
