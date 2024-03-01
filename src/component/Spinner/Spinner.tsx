import React, {RefObject} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import {Colors} from '../../themes';
import { commonAbsoluteCss } from '@Utility/common';

let visibleSpinnerRef: RefObject<Function> = React.createRef();
export const _showSpinner = () => {
  visibleSpinnerRef?.current && visibleSpinnerRef?.current(true);
};

export const _hideSpinner = () => {
  visibleSpinnerRef?.current && visibleSpinnerRef?.current(false);
};

const Spinner = () => {
  const [visible, setVisiblity] = React.useState<boolean>(false);
  React.useLayoutEffect(() => {
    visibleSpinnerRef.current = setVisiblity;
  }, []);
  return (
    <Modal
      onRequestClose={() => console.log('spinner closed')}
      animationType="fade"
      supportedOrientations={['landscape', 'portrait']}
      transparent
      visible={visible}>
      <View style={[styles.container, {backgroundColor: 'rgba(0, 0, 0, 0.5)'},commonAbsoluteCss?.openSheetWrapper]}>
        <ActivityIndicator size="large" color={Colors.APP_PRIMARY_COLOR} />
      </View>
    </Modal>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    top: 0,
  },
});
