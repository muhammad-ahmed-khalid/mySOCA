import H6 from '@Component/Headings/H6';
import Timer from '@Component/Timer/Timer';
import { Colors, Fonts } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import { StyleSheet, View } from 'react-native';
interface IRideTravelTime {
  time?: any;
  distance?: any;
}
const RideTravelTime = ({ time, distance }: IRideTravelTime) => {
  return (
    <View style={styles.rideDetailsWrapper}>
      <View style={[{ alignItems: 'center' }]}>
        <H6 style={styles.label} text={'TRAVEL TIME'} />
        <H6 style={styles.text} text={time} />
      </View>
      <View style={styles.seperator} />
      <View style={[{ alignItems: 'center' }]}>
        <H6 style={styles.label} text={'Total Distance'} />
        <H6 style={styles.text} text={distance} />
      </View>
    </View>
  );
};

export default RideTravelTime;

const styles = StyleSheet.create({
  rideDetailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.scale(24),
    paddingTop: Metrics.verticalScale(12),
    paddingBottom: Metrics.verticalScale(16),

    backgroundColor: Colors.Colors.WHITE,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 15,
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
    backgroundColor: Colors.Colors.GREY,
    width: 1,
    height: 34,
    top: Metrics.scale(2),
  },
  heading: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.GREY),
  },
  label: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.MEDIUM_GREY_SHADE),
    textTransform: 'uppercase',
  },

  text: {
    ...Fonts.Bold(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
  },
});
