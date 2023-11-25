import {GetReciept} from '@Asset/logo';
import ButtonUnderLine from '@Component/ButtonUnderLine/ButtonUnderLine';
import BookingHistoryRow from '@Component/TripCompletedDetails/BookingHistoryRow';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IFareDetails {
  fares: any;
  totalFare: any;
}

const FareDetails = ({fares, totalFare}: IFareDetails) => {
  let entries = Object.entries(fares);
  return (
    <View style={styles.mainWrapper}>
      {entries?.map(([key, val], index) => {
        return (
          <View key={index}>
            <BookingHistoryRow
              label={key}
              price={`$${val || 0}`}
              fontSize={styles.generalFontSize}
              styleWrapper={styles.wrapperStyle}
            />
          </View>
        );
      })}

      <BookingHistoryRow
        label={'Total'}
        price={`$${totalFare}`}
        styleWrapper={styles.totalWrapper}
        fontSize={styles.generalFontSize}
      />
    </View>
  );
};

export default React.memo(FareDetails);

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: Colors.Colors.WHITE,
    paddingHorizontal: Metrics.scale(25),
    paddingBottom: Metrics.verticalScale(10),
    borderBottomLeftRadius: Metrics.scale(20),
    borderBottomRightRadius: Metrics.scale(20),
  },
  wrapperStyle: {
    paddingTop: Metrics.scale(5),
    paddingBottom: 0,
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalWrapper: {
    borderTopWidth: 1,
    borderColor: Colors.Colors.GREY,
    marginHorizontal: Metrics.scale(0),
    paddingTop: Metrics.scale(5),
    paddingBottom: 0,
    marginTop: Metrics.scale(10),
  },

  generalFontSize: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
    textTransform: 'capitalize',
  },
});
