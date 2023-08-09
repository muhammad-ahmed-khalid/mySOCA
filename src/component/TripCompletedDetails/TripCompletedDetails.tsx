import { GetReciept } from '@Asset/logo';
import ButtonUnderLine from '@Component/ButtonUnderLine/ButtonUnderLine';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BookingHistoryRow from './BookingHistoryRow';
import { CheckNull } from '@Utility/common';
import ButtonView from '@Component/ButtonView';

interface ITripCompletedDetails {
  isGetReciept?: boolean;
  height?: boolean;
  faresDetails?: any;
  getReciept?: any;
}

const TripCompletedDetails = ({
  isGetReciept = false,
  height = false,
  faresDetails,
  getReciept
}: ITripCompletedDetails) => {
  const { fares, totalFare } = faresDetails || {};
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
      {isGetReciept && (
        <ButtonUnderLine
          leftArrow={true}
          text={'Get a receipt'}
          textStyle={styles.btnTextStyle}
          icon={<GetReciept />}
          action={getReciept}
        />
      )}
    </View>
  );
};

export default TripCompletedDetails;

const styles = StyleSheet.create({
  mainWrapper: {
    paddingTop: Metrics.verticalScale(20),
    paddingBottom: Metrics.verticalScale(30),
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalWrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.Colors.GREY,
    marginHorizontal: Metrics.scale(0),
    paddingVertical: Metrics.scale(25),
    marginTop: Metrics.scale(15),
    marginBottom: Metrics.scale(30),
  },
  btnTextStyle: {
    ...Fonts.Medium(Fonts.Size.medium, Colors.Colors.BLUE_LINK),
    textDecorationLine: 'underline',
    marginLeft: Metrics.scale(4),
  },
  generalFontSize: {
    textTransform: 'capitalize',
  },
});
