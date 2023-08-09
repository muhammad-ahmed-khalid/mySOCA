import {Star} from '@Asset/logo';
import H4 from '@Component/Headings/H4';
import H5 from '@Component/Headings/H5';
import RoundImage from '@Component/RoundImage/RoundImage';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IDriverInfo {
  name?: String;
  imgUrl?: any;
  rating?: any;
}

const DriverInfo = ({
  name = 'Jason Smith',
  imgUrl,
  rating = '4.3',
}: IDriverInfo) => {
  return (
    <View style={styles.driverInfoWrapper}>
      <RoundImage imgUrl={imgUrl} />
      <View style={styles.driverinfo}>
        <H4 style={styles.riderName} text={name} />
        <View style={styles.ratingWrapper}>
        </View>
      </View>
    </View>
  );
};

export default DriverInfo;

const styles = StyleSheet.create({
  driverInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  driverinfo: {
    marginLeft: Metrics.scale(8),
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  riderName: {
    ...Fonts.SemiBold(Fonts.Size.large, Colors.Colors.DARK_BLACK),
    marginBottom: Metrics.verticalScale(4),
    marginLeft: Metrics.scale(5),
  },
  riderReview: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.Colors.DARK_BLACK),
    marginLeft: Metrics.scale(5),
  },
});
