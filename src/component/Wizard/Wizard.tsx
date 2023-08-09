import {LinearConfig} from '@Constants/dummyData';
import { commonAbsoluteCss } from '@Utility/common';
import React from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Wizard = ({
  children,
  setAllTotalSteps,
  handleBackPress,
  currentStep,
}: any) => {
  const totalSteps = React.Children.count(children);
  setAllTotalSteps(totalSteps);
  LayoutAnimation.configureNext(LinearConfig);

  return (
    <TouchableWithoutFeedback onPress={handleBackPress}>
      <View style={[styles.wizardRoot, commonAbsoluteCss?.openSheetWrapper]}>
        {React.Children.map(children, (child, index) => (
          <View
            style={[
              {
                display: index === currentStep ? 'flex' : 'none',
              },
              commonAbsoluteCss?.openSheetWrapper,
            ]}>
            {child}
          </View>
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Wizard;

const styles = StyleSheet.create({
  wizardRoot: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    height: '100%',
  },
});
