import H6 from '@Component/Headings/H6';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IDriverQualityReportRender {
  title?: string;
  value?: string;
  color?: any;
}

const DriverQualityReportRender = ({
  title,
  value,
  color,
}: IDriverQualityReportRender) => {
 
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.container}>
          <H6 style={[styles.mainText]} text={title} />
        </View>
        <View>
          <H6 style={[styles.optionalText, {color: color}]} text={value} />
        </View>
      </View>
    </View>
  );
};

export default DriverQualityReportRender;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.scale(5),
    marginBottom: Metrics.scale(20),
  },

  mainText: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
  },
  optionalText: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.DARK_GREEN),
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
