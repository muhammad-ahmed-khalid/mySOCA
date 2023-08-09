import {
  DropOffLocationIcon,
  PickUpLocationIcon,
  ShowMapIcon,
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H4 from '@Component/Headings/H4';
import H6 from '@Component/Headings/H6';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import { navigate, popToTop } from '@Service/navigationService';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import { DATE_FORMATS } from '@Utility/DateUtils';
import Metrics from '@Utility/Metrics';
import { useQueryClient } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IRideHistory {
  item?: any;
  isOngoing?: boolean;
}

const RideHistory = ({ item, isOngoing = false }: IRideHistory) => {
  const { fare, stops, id, date } = item || {};
  const queryClient = useQueryClient();
  const handlePressTripDetails = () => {
    if (isOngoing) {
      popToTop();
    } else {
      navigate(NavigationRoutes.APP_STACK.TRIP_DETAILS, { rideID: id });
      queryClient.setQueryData(
        [STORAGE_KEYS.RIDE_DATE],
        moment(date).format(DATE_FORMATS.BOOKING_DATE) || '',
      );
    }
  };

  return (
    <View>
      <ButtonView style={styles.root} onPress={() => handlePressTripDetails()}>
        <View style={styles.datePriceWrapper}>
          <H4
            style={styles.dateText}
            text={moment(date).format(DATE_FORMATS.BOOKING_DATE)}
          />
        {
          isOngoing ? <H4 style={styles.dateText} text={`Est time 00:10 min`} /> : <H4 style={styles.dateText} text={`$${fare}`} />
        }
        </View>
        <View style={styles.destinationWrapper}>
          <View style={styles.addNewAddressInnerWrapper}>
            <View style={styles.addressRow}>
              {stops &&
                stops.map((val, key) => {
                  return (
                    <View key={key} style={styles.addressRowInnerWrapper}>
                      <View
                        style={[
                          styles.inditicatorWrapper,
                          { top: key + 1 != stops.length ? -4 : 0 },
                        ]}>
                        {key == 0 ? (
                          <View style={styles.addressDestnations}>
                            <PickUpLocationIcon />
                          </View>
                        ) : (
                          <View style={styles.addressDestnations}>
                            <DropOffLocationIcon style={{ width: 50000 }} />
                          </View>
                        )}

                        <View
                          style={[
                            styles.addressLine,
                            {
                              borderWidth: key + 1 != stops.length ? 0.7 : 0,
                            },
                          ]}
                        />
                      </View>
                      <View style={{ width: '88%' }}>
                        <H6
                          style={styles.addressText}
                          text={val}
                          numberOfLines={2}
                        />
                        {key + 1 != stops.length && (
                          <View style={styles.addressesSeperator} />
                        )}
                      </View>
                    </View>
                  );
                })}
            </View>
            <View style={styles.openMapIconWrapper}>
              <ShowMapIcon />
            </View>
          </View>
        </View>
      </ButtonView>
    </View>
  );
};

export default RideHistory;

const styles = StyleSheet.create({
  root: {
    paddingTop: Metrics.scale(15),
    paddingBottom: Metrics.scale(25),
    paddingHorizontal: Metrics.scale(20),
    borderColor: Colors.Colors.GREY,
    marginTop: 10,
  },
  datePriceWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: Metrics.scale(10),
  },
  dateText: {
    ...Fonts.SemiBold(Fonts.Size.small, Colors.Colors.BLACK),
  },
  destinationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.verticalScale(15),
    paddingLeft: Metrics.scale(5),
  },

  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.Colors.MEDIUM_GRAY,
    marginVertical: Metrics.verticalScale(5),
  },

  openMapIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
  },

  addNewAddressInnerWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 0,
    paddingLeft: 0,
  },

  addressRow: { width: '90%' },
  addressRowInnerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.LIGHT_BLACK_TEXT),
  },

  inditicatorWrapper: {
    marginRight: Metrics.scale(20),
    alignItems: 'center',
  },
  addressDestnations: {
    zIndex: 99,
    width: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Colors.WHITE,
  },
  addressLine: {
    height: '100%',
    width: 1,
    position: 'absolute',
    borderColor: Colors.Colors.NAVY_BLUE,
    left: 3.7,
    borderWidth: 0.5,
    borderStyle: 'dotted',
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  addressesSeperator: {
    borderWidth: 0.5,
    borderColor: Colors.Colors.MEDIUM_GRAY,
    width: '100%',
    marginVertical: 5,
  },
});
