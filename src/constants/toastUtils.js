import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BaseToast, ErrorToast} from 'react-native-toast-message';
import {Colors, Fonts} from '../themes';
export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: Colors.TOAST_COLORS.success}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        ...Fonts.Regular(Fonts.Size.normal, Colors.Colors.PRIMARY),
      }}
      text2Style={{
        ...Fonts.Regular(Fonts.Size.xxSmall, Colors.Colors.PRIMARY),
      }}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.PRIMARY),
      }}
      text2Style={{
        ...Fonts.Regular(Fonts.Size.xxSmall, Colors.Colors.PRIMARY),
      }}
      text2NumberOfLines={2}
    />
  ),
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
  tomatoToast: ({text1, props}) => (
    <View style={styles.tomatoToastWrapper}>
      <Text>{text1}</Text>
    </View>
  ),
};


const styles = StyleSheet.create({
  tomatoToastWrapper:{
    width: '100%', 
    backgroundColor: Colors.Colors.TOMATO
  }
});
