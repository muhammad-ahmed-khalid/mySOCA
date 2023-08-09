import { MapDirectionBtn, SmileIcon } from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H1 from '@Component/Headings/H1';
import H4 from '@Component/Headings/H4';
import { Colors, Fonts } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface IMapDirectionCustomView {
  IsMapDirectionShow: any;
  directionZustand: any,
}

const MapDirectionCustomView = ({
  directionZustand,
  IsMapDirectionShow,
}: IMapDirectionCustomView) => {
  const { name, address, isArrivalTime, arrivalTime, cb, isStartMapIcon } =
    IsMapDirectionShow;

  if (Object.entries(IsMapDirectionShow)?.length === 0) {
    return null;
  }


  const renderDirectionIcons = (instruction) => {
    if (instruction?.instructions[1]) {
      const maneuver = instruction?.instructions[1]?.maneuver;

      if (maneuver === 'turn-left') {
        return (
          <View>
            <Text>Turn Left</Text>
          </View>
        );
      } else if (maneuver === 'turn-right') {
        return (
          <View>
            <Text>Turn Right</Text>
          </View>
        );
      } else if (maneuver === 'straight') {
        return (
          <View>
            <Text>Straight</Text>
          </View>
        );
      } else if (maneuver === 'make-u-turn') {
        return (
          <View>
            <Text>Make U-turn</Text>
          </View>
        );
      } else if (maneuver === 'merge-left') {
        return (
          <View>
            <Text>Merge Left</Text>
          </View>
        );
      } else if (maneuver === 'merge-right') {
        return (
          <View>
            <Text>Merge Right</Text>
          </View>
        );
      } else if (maneuver === 'take-exit') {
        return (
          <View>
            <Text>Take the Exit</Text>
          </View>
        );
      } else if (maneuver === 'keep-left') {
        return (
          <View>
            <Text>Keep Left</Text>
          </View>
        );
      } else if (maneuver === 'keep-right') {
        return (
          <View>
            <Text>Keep Right</Text>
          </View>
        );
      } else if (maneuver === 'turn-slight-left') {
        return (
          <View>
            <Text>Turn Slight Left</Text>
          </View>
        );
      } else if (maneuver === 'turn-slight-right') {
        return (
          <View>
            <Text>Turn Slight Right</Text>
          </View>
        );
      } else if (maneuver === 'turn-sharp-left') {
        return (
          <View>
            <Text>Turn Sharp Left</Text>
          </View>
        );
      } else if (maneuver === 'turn-sharp-right') {
        return (
          <View>
            <Text>Turn Sharp Right</Text>
          </View>
        );
      } else if (maneuver === 'continue') {
        return (
          <View>
            <Text>Continue</Text>
          </View>
        );
      } else if (maneuver === 'arrive') {
        return (
          <View>
            <Text>Arrive at Destination</Text>
          </View>
        );
      } else {
        return (
          <View>
            <Text>go on</Text>
          </View>
        );
      }
    }

    return instruction?.instructions[1]?.maneuver;
  };

  return (
    <View style={styles.root}>
      <View
        style={[styles.innerWrapper, !isArrivalTime && styles.bottomShadow]}>
        <View style={styles.addressWrapper}>
          <H1 style={styles.addressTitleText} text={name} numberOfLines={1} />
          <H4
            style={styles.addressDescriptionText}
            text={address}
            numberOfLines={2}
          />
        </View>
        <View style={styles.directionWrapper}>
          <View style={styles.directionRow}>
            {renderDirectionIcons(directionZustand)}
          </View>
        </View>
        {/* {isStartMapIcon && (
          <View style={styles.directionWrapper}>
            <View style={styles.seperator} />
            <ButtonView onPress={() => cb()}>
              <MapDirectionBtn />
              <H4 text="START" style={styles.startText} />
            </ButtonView>
          </View>
        )} */}
      </View>
      {isArrivalTime && (
        <View
          style={[
            styles.expectedTimeWrapper,
            isArrivalTime && styles.bottomShadow,
          ]}>
          <SmileIcon />
          <H4
            text={`Customer is expecting you at ${arrivalTime}`}
            style={styles.expectingTimeText}
          />
        </View>
      )}
    </View>
  );
};

export default MapDirectionCustomView;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  innerWrapper: {
    backgroundColor: Colors.Colors.LIGHT_GREY_SHADE,
    paddingHorizontal: Metrics.scale(20),
    paddingTop: Metrics.scale(60),
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Metrics.scale(15),
    zIndex: 1,
  },
  addressWrapper: {
    width: '80%',
    paddingRight: Metrics.scale(20),
  },
  directionWrapper: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expectedTimeWrapper: {
    backgroundColor: Colors.Colors.SOFT_GREY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Metrics.scale(15),
    borderBottomLeftRadius: Metrics.scale(20),
    borderBottomRightRadius: Metrics.scale(20),
  },
  expectingTimeText: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.LIGHT_GREY_TEXT),
    marginLeft: Metrics.scale(7),
  },
  addressTitleText: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.Colors.DARK_BLACK),
    marginBottom: Metrics.scale(2),
  },
  addressDescriptionText: {
    ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.SECONDARY),
  },
  startText: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.VIA_COLOR),
    marginTop: Metrics.scale(5),
  },
  bottomShadow: {
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
    width: 1,
    backgroundColor: Colors.Colors.GREY,
    height: '50%',
    position: 'absolute',
    left: -5,
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
