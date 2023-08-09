import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import H4 from '@Component/Headings/H4';
import H6 from '@Component/Headings/H6';
import Timer from '@Component/Timer/Timer';
import {Colors, Fonts} from '@Theme/index';
import {
  DATE_FORMATS,
  GetTimeDifference,
  TIME_ENUM,
  getFormatedDateTime,
} from '@Utility/DateUtils';

interface IWaitingCustomer {
  currentRideDataZustand?: any;
}

const WaitingCustomer = ({currentRideDataZustand}: IWaitingCustomer) => {
  return (
    <View style={styles.root}>
      <H4
        text={currentRideDataZustand?.customerName}
        style={styles.customerNameTxt}
      />
      <Seperator />
      <CustomerInfo currentRideDataZustand={currentRideDataZustand} />
    </View>
  );
};

const Seperator = () => {
  return <View style={styles.seperator} />;
};

const CustomerInfo = ({currentRideDataZustand}: IWaitingCustomer) => {
  const {waitingTimeLimit} = currentRideDataZustand;
  return (
    <View style={styles.innerWrapper}>
      <Timer
        minutes={GetTimeDifference(waitingTimeLimit, TIME_ENUM.MIN)}
        seconds={GetTimeDifference(waitingTimeLimit, TIME_ENUM.SEC)}
        style={styles.timeTxt}
        label="Waiting time: "
      />
      <H6
        text={`You may cancel after ${getFormatedDateTime(
          waitingTimeLimit,
          DATE_FORMATS.ARRIVAL_TIME,
        )}`}
        style={styles.optionalTxt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.Colors.WHITE,
    paddingTop: Metrics.scale(23),
    paddingBottom: Metrics.scale(35),
    borderRadius: Metrics.scale(25),
    shadowColor: Colors.Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
  seperator: {
    width: '98%',
    height: 1,
    backgroundColor: Colors.Colors.GREY,
    marginVertical: Metrics.scale(20),
  },
  customerNameTxt: {
    ...Fonts.Bold(Fonts.Size.large, Colors.Colors.DARK_BLACK),
    marginLeft: Metrics.scale(26),
  },
  timeTxt: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
    marginBottom: Metrics.scale(8),
  },
  optionalTxt: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.MEDIUM_GREY_SHADE),
  },
  innerWrapper: {
    marginLeft: Metrics.scale(33),
  },
});

export default WaitingCustomer;
