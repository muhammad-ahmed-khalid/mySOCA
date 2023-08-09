import H4 from '@Component/Headings/H4';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IBookingHistoryRow {
  label?: string;
  price?: any;
  styleWrapper?: {};
  fontSize?: any;
}

const BookingHistoryRow = ({
  label,
  price,
  styleWrapper,
  fontSize,
}: IBookingHistoryRow) => {
  return (
    <View style={[styles.rowWrapper, styleWrapper]}>
      <H4 text={label} style={fontSize} />
      <H4 text={price} style={fontSize} />
    </View>
  );
};

export default BookingHistoryRow;

const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Metrics.scale(12),
  },
});
