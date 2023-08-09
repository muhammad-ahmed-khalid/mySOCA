import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import Metrics from '@Utility/Metrics';
import LottieView from 'lottie-react-native';
import H4 from '@Component/Headings/H4';
import Fonts from '@Theme/Fonts';

const CustomLottie = ({ text = 'No Record Found' }: any) => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottieStyle}
        resizeMode="cover"
        autoPlay={true}
        loop={true}
        source={require('../../assets/lottie/nothingFound.json')}
      />
      <H4 text={text} style={styles.textStyle} />
    </View>
  );
};

export default React.memo(CustomLottie);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  textStyle: {
    marginBottom: 10,
    ...Fonts.SemiBold(),
  },
  lottieStyle: { flex: 1, height: Metrics.verticalScale(250) },
});
