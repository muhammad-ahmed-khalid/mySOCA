import {
  AppHeaderLogo,
  LeftAngleIcon,
  PortalNotification,
  RiderImage,
  Star,
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H5 from '@Component/Headings/H5';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {useFocusEffect} from '@react-navigation/native';
import {goBack, navigate} from '@Service/navigationService';
import {useBoundStore} from '@Store/index';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import {ExitAppUtil} from '@Utility/ExitAppUtil';
import Metrics from '@Utility/Metrics';
import {RouteHandleNames, RoutesHandleUtil} from '@Utility/RoutesHandleUtil';
import React, {memo, useEffect, useState} from 'react';
import {Platform, StatusBar} from 'react-native';
import {BackHandler, Image, SafeAreaView, StyleSheet, View} from 'react-native';

const AppHeader = props => {
  const {routeName} = props || {};
  const chatHeaderZustand = useBoundStore(state => state.chatHeaderZustand);

  const currentRideDataZustand = useBoundStore(
    state => state.currentRideDataZustand,
  );
  const setChatHeaderZustand = useBoundStore(
    state => state.setChatHeaderZustand,
  );
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isTripDate, setIsTripDate] = React.useState(false);
  const {data: TripDate} = useQuery([STORAGE_KEYS.RIDE_DATE], {
    enabled: isTripDate,
  });
  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      ); // if callback returns true, back button doesn't working and vice versa
      return () => backHandler.remove();
    }, [routeName]),
  );
  let routehandle = RoutesHandleUtil(routeName, chatHeaderZustand);

  useEffect(() => {
    if (routehandle.includes(RouteHandleNames.TripDetails)) {
      setIsTripDate(!isTripDate);
    }
  }, [routehandle.includes(RouteHandleNames.TripDetails)]);

  const handleBackPress = () => {
    if (
      routeName == NavigationRoutes.APP_STACK.HOME ||
      routeName == NavigationRoutes.AUTH_STACK.LOGIN
    ) {
      ExitAppUtil();
      return true;
    } else {
      goBack();
      return true;
    }
  };
  let isFromAuth = false;
  if (routehandle.includes(RouteHandleNames.PrivacyPolicy)) {
    isFromAuth = true;
  }

  return (
    <View style={styles.appHeaderContainer}>
      <SafeAreaView style={styles.appHeaderBorder}>
        <View style={styles.appHeaderSubContainer}>
          <View style={styles.appHeaderButtonContainer}>
            <ButtonView
              onPress={() => handleBackPress()}
              style={styles.closeBtn}>
              <LeftAngleIcon />
            </ButtonView>
          </View>
          <View style={styles.appHeaderLogoContainer}>
            {routehandle.includes(RouteHandleNames.ShowSupport) ? (
              <>
                <View style={{height: 55}}>
                  <AppHeaderLogo style={{marginLeft: Metrics.scale(25)}} />
                </View>
                <H5 text={'Y Drive Support'} style={styles.headerSupportText} />
              </>
            ) : routehandle.includes(RouteHandleNames.ShowDriverChat) ? (
              <>
                <View style={styles.imageWrapper}>
                  <Image
                    source={RiderImage}
                    style={styles.driverImage}
                    resizeMode={'cover'}
                  />
                </View>
                <View style={styles.headerNameWrapper}>
                  <H5 text={currentRideDataZustand?.customerName || 'N/A'} />
                  {currentRideDataZustand?.customerRating && (
                    <View style={styles.headerRatingWrapper}>
                      <Star />
                      <H5
                        text={currentRideDataZustand?.customerRating}
                        style={styles.headerRatingText}
                      />
                    </View>
                  )}
                </View>
              </>
            ) : routehandle.includes(RouteHandleNames.TripDetails) ? (
              <H5 text={TripDate} />
            ) : (
              <></>
            )}
          </View>
          <View style={styles.appHeaderRightContainer}>
            {routehandle.includes(RouteHandleNames.TripDetails) ? (
              <></>
            ) : routehandle.includes(RouteHandleNames.Profile) ? (
              <View style={styles.tripProfileWrapper}>
                <ButtonView
                  style={styles.bellIconWrapper}
                  onPress={() =>
                    navigate(NavigationRoutes.APP_STACK.NOTIFICATION)
                  }
                  activeOpacity={1}>
                  <PortalNotification />
                </ButtonView>
              </View>
            ) : (
              <View style={styles.appHeaderButtonContainer} />
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default memo(AppHeader);
const styles = StyleSheet.create({
  appHeaderContainer: {
    alignItems: 'center',
    width: Metrics.screenWidth,
    overflow: 'hidden',
    paddingTop: Metrics.doubleBaseMargin,
    backgroundColor: Colors.WHITE_FOUR,
  },
  appHeaderBorder: {
    height: Metrics.verticalScale(90),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE_FOUR,
  },
  appHeaderRightContainer: {width: '10%'},
  tripProfileWrapper: {marginLeft: 'auto'},
  appHeaderSubContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  appHeaderButtonContainer: {
    width: '10%',
  },
  appHeaderButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appHeaderBackText: {
    marginLeft: Metrics.smallMargin,
    ...Fonts.Regular(Fonts.Size.medium, Colors.DARK_BLACK),
  },
  appHeaderLogoContainer: {
    alignItems: 'center',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appHeaderBackLogoImg: {},
  appHeaderNotificationContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
    height: '100%',
    justifyContent: 'center',
  },
  appHeaderNotification: {
    backgroundColor: Colors.RED,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    zIndex: 999,
    position: 'absolute',
  },
  closeBtn: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.19,
    shadowRadius: 3.65,

    elevation: 7,
  },
  imageWrapper: {
    borderRadius: Metrics.scale(50),
    width: Metrics.scale(50),
    height: Metrics.scale(50),
    borderWidth: 3,
    borderColor: '#fff',
    elevation: 1,
    overflow: 'hidden',
  },
  headerNameWrapper: {marginLeft: Metrics.scale(10)},
  headerRatingWrapper: {
    flexDirection: 'row',
  },
  headerRatingText: {marginLeft: Metrics.scale(5)},
  headerSupportText: {
    marginLeft: Metrics.scale(10),
    ...Fonts.SemiBold(Fonts.Size.large, Colors.DARK_BLACK),
  },
  driverImage: {
    width: Metrics.scale(50),
    height: Metrics.scale(50),
  },
  bellIconWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  bellIconDot: {
    width: 10,
    height: 10,
    backgroundColor: Colors.RED,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: Colors.WHITE,
    position: 'absolute',
    right: 13,
    top: 6,
  },
  topSheetActionWrapper: {
    marginTop: Platform.OS === 'ios' ? 0 : Metrics.scale(10),
  },
});
