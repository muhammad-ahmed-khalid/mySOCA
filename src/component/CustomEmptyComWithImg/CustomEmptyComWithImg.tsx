import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import Metrics from '@Utility/Metrics';
import H4 from '@Component/Headings/H4';
import Fonts from '@Theme/Fonts';
import {BellNotification} from '@Asset/logo';
import {Colors} from '@Theme/index';

const CustomEmptyComWithImg = ({
  text = 'No Record Found',
  imageUrl = '',
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>{imageUrl ? imageUrl : <BellNotification />}</View>
      <H4 text={text} style={styles.textStyle} />
    </View>
  );
};

export default React.memo(CustomEmptyComWithImg);

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: Metrics.scale(25) },
  textStyle: {
    marginBottom: Metrics.scale(10),
    ...Fonts.SemiBold(),
    marginTop: Metrics.scale(25)
  },
  imageWrapper: {
    width: Metrics.scale(95),
    height: Metrics.scale(95),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.scale(95),
    backgroundColor: Colors.Colors.LIGHT_GREY,
  },
});
