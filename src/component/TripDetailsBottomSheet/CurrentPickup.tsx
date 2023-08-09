import {
  ChatIcon,
  CircleBlank,
  CircleFilled,
  ExclemenationMark,
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H3 from '@Component/Headings/H3';
import H4 from '@Component/Headings/H4';
import H6 from '@Component/Headings/H6';
import useHomeScreenContainer from '@Container/AppContainer/Home/HomeScreenContainer';
import {useRoute} from '@react-navigation/native';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';

const CurrentPickup = () => {
  const route = useRoute();
  const {data, handleClose} = route?.params;

  const {customerName, stops, rideId, vehicleClass} =
    data?.currentRideDataZustand || {};
  const {customerChatIdMutate} = useHomeScreenContainer();
  const handlePressChatBtn = () => {
    handleClose();
    customerChatIdMutate({id: rideId});
  };

  return (
    <View style={styles.root} bounces={false}>
      <View style={styles.firstRow}>
        <H3 text={customerName} style={styles.customerNameTxt} />
        <ButtonView onPress={() => handlePressChatBtn()}>
          <ChatIcon />
        </ButtonView>
      </View>
      <View style={styles.seperator} />
      <View style={styles.secondRow}>
        <ExclemenationMark />
        <H4
          text={vehicleClass?.name ? `${vehicleClass?.name} ride` : 'N/A'}
          style={styles.standardRatesTxt}
        />
      </View>
      <View style={styles.seperator} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        style={styles.stopsScrollWrapper}>
        <View style={styles.addressRow}>
          {stops &&
            stops.map((val, key) => {
              return (
                <View key={key} style={styles.addressRowInnerWrapper}>
                  <View
                    style={[
                      styles.inditicatorWrapper,
                      {top: key + 1 != stops.length ? 0 : 0},
                    ]}>
                    {key == 0 ? (
                      <View
                        style={[
                          styles.addressDestnations,
                          {backgroundColor: 'white'},
                        ]}>
                        <CircleBlank />
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.addressDestnations,
                          {backgroundColor: 'white'},
                        ]}>
                        <CircleFilled style={{width: 50000}} />
                      </View>
                    )}

                    <View
                      style={[
                        styles.addressLine,
                        {
                          borderWidth: key + 1 != stops.length ? 0.6 : 0,
                        },
                        Platform.OS == 'android'
                          ? {}
                          : {
                              borderRadius: 2,
                              borderWidth: key + 1 != stops.length ? 0.5 : 0,
                            },
                      ]}
                    />
                  </View>
                  <View style={styles.addresessWrapper}>
                    <H6
                      style={styles.addressNameText}
                      text={val?.name}
                      numberOfLines={2}
                    />
                    <H6 style={styles.addressText} text={val?.address} />
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CurrentPickup;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.Colors.WHITE,
    flex: 1,
  },
  addresessWrapper: {width: '88%', marginBottom: 15},
  customerNameTxt: {
    ...Fonts.Bold(Fonts.Size.large, Colors.Colors.DARK_BLACK),
  },
  stopsScrollWrapper: {
    marginTop: Metrics.scale(10),
    marginBottom: Metrics.scale(10),
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Metrics.scale(24),
    paddingBottom: Metrics.scale(15),
  },
  seperator: {
    width: '100%',
    backgroundColor: Colors.Colors.GREY,
    height: 1,
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Metrics.scale(28),
  },
  standardRatesTxt: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
    marginLeft: Metrics.scale(10),
  },

  datePriceWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: Metrics.scale(10),
  },
  dateText: {
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.Colors.BLACK),
  },
  destinationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.verticalScale(15),
    paddingLeft: Metrics.scale(5),
  },
  destinationInnerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  destinationLocations: {
    width: '85%',
    marginLeft: Metrics.scale(10),
  },
  locationText: {
    ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.MEDIUM_BLACK),
  },

  destinationPointers: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Metrics.scale(15),
    paddingVertical: Metrics.verticalScale(2),
    paddingTop: Metrics.verticalScale(5),
  },
  openMapIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
  },
  dropofLocationIcon: {position: 'relative', top: -3},

  item: {
    margin: 10,
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

  addressRow: {
    width: '100%',
  },
  addressRowInnerWrapper: {
    flexDirection: 'row',
  },
  addressNameText: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
    marginBottom: 2,
  },
  addressText: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.MEDIUM_GREY_SHADE),
    width: '85%',
  },

  inditicatorWrapper: {
    marginRight: Metrics.scale(20),
    alignItems: 'center',
  },
  addressDestnations: {
    zIndex: 99,
    top: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Colors.WHITE,
  },
  addressLine: {
    height: '100%',
    width: 1,
    position: 'absolute',
    borderColor: Colors.Colors.NAVY_BLUE,
    top: 3.5,
    left: 6.7,
    borderWidth: 0.5,
    borderStyle: 'dashed',
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
