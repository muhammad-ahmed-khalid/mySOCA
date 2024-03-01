import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Modal} from 'react-native';

export default forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const setModalVisibility = isVisible => setIsVisible(isVisible);

  useImperativeHandle(ref, () => ({setModalVisibility}));

  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      {props.children}
    </Modal>
  );
});
