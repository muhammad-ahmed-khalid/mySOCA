import Fonts from './Fonts';
import { Colors } from './Colors';
import Metrics from '../utility/Metrics';
import { StyleProp, ViewStyle } from 'react-native';

const appMainContainer = {
  backgroundColor: Colors.WHITE_TWO,
  flexGrow: 1,
};

const centerAlign = {
  justifyContent: 'center',
  alignItems: 'center',
};

const inputControl = {
  height: Metrics.verticalScale(50),
  ...Fonts.Medium(16, Colors.CHARCOAL_GREY),
};

const rowAlign: StyleProp<ViewStyle> = {
  flexDirection: 'row',
};

export { appMainContainer, inputControl, centerAlign, rowAlign };
