import {CancelRoundIcon, CheckRound} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H4 from '@Component/Headings/H4';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
interface IOnlineStatus {
  cbVal?: any;
  currentVal?: any;
}

const OnlineStatus = ({cbVal, currentVal}: IOnlineStatus) => {
  return (
    <ButtonView
      style={[
        styles.main,
        currentVal
          ? {backgroundColor: Colors.Colors.DARK_GREEN, paddingLeft: 10, paddingRight: 5}
          : {backgroundColor: Colors.Colors.RED, paddingLeft: 5, paddingRight: 10},
      ]}
      onPress={() => cbVal(!currentVal)}>
      {currentVal ? (
        <View style={styles.innerWrapper}>
          <H4 text={'online'} style={styles.textStyleOnline} />
          <CheckRound />
        </View>
      ) : (
        <View style={styles.innerWrapper}>
          <CancelRoundIcon />
          <H4 text={'offline'} style={styles.textStyleOffline} />
        </View>
      )}
    </ButtonView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: Metrics.scale(5),
    borderRadius: Metrics.scale(30),
    marginRight: Metrics.scale(10),
    marginTop: Metrics.verticalScale(27),
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyleOnline: {
    marginRight: Metrics.scale(5),
    ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.WHITE),
  },
  textStyleOffline:{
    marginLeft: Metrics.scale(5),
    ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.WHITE),
  }
});

export default OnlineStatus;
