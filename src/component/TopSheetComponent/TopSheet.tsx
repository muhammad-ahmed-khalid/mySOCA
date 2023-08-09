import {
  BookingDarkSVG,
  BookingSvg,
  BookingSvgDark,
  Profile,
  ProfileSvg,
  SupportSvg,
  WalletSvg,
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {LogoSvg} from '@Asset/logo';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';

interface IRenderItem {
  item?: any;
  index?: number;
}

const TopSheet = ({hide, isModalVisible, getSupportChat, profileImage}: any) => {
  const dismissModal = () => hide();
  const TopSheetList = [
    {
      icon: <BookingDarkSVG />,
      text: 'bookings',
      action: () => {
        navigate(NavigationRoutes.APP_STACK.BOOKING_SCREEN);
      },
    },
    {
      icon: <WalletSvg />,
      text: 'earnings',
      action: () => {
        navigate(NavigationRoutes.APP_STACK.EARNINGS);
      },
    },
    {
      icon: <SupportSvg />,
      text: 'support',
      action: () => getSupportChat(),
    },
    {
      icon: <ProfileSvg />,
      text: 'portal',
      action: () => {
        navigate(NavigationRoutes.APP_STACK.PROFILE);
      },
    },
  ];
  return (
    <View style={styles.main}>
      <ReactNativeModal
        animationIn={'slideInDown'}
        animationOut={'slideOutUp'}
        animationInTiming={700}
        animationOutTiming={700}
        isVisible={isModalVisible}
        backdropOpacity={0.5}
        style={styles.modalize}
        onBackdropPress={dismissModal}
        backdropTransitionOutTiming={1}>
        <View style={styles.root}>
          <SafeAreaView style={styles.profileStyle}>
          {profileImage ? <Image 
        source={{uri: profileImage}}
        /> : <Profile />}
            <LogoSvg />
          </SafeAreaView>
          <View style={styles.innerWrapper}>
            {TopSheetList.map(item => (
              <ButtonView
                key={item?.text}
                onPress={() => {
                  hide(),
                    setTimeout(() => {
                      item.action(item.action);
                    }, 1000);
                }}>
                <View style={styles.container}>
                  <View>
                    <View style={styles.icon}>{item?.icon}</View>
                    <H6 text={item.text} style={styles.text} />
                  </View>
                </View>
              </ButtonView>
            ))}
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrics.baseMargin,
  },
  modalize: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: Metrics.scale(0),
  },
  icon: {
    height: Metrics.verticalScale(40),
    width: Metrics.scale(40),
    borderRadius: Metrics.scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
  },
  text: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.BLACK),
    marginVertical: Metrics.smallMargin,
    alignSelf: 'center',
  },
  main: {flex: 1},
  root: {
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: Metrics.scale(30),
    borderBottomRightRadius: Metrics.scale(30),
    zIndex: 9999,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 45,
    paddingHorizontal: Metrics.scale(20),
  },
  profileStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.verticalScale(40),
  },
  flatlist: {justifyContent: 'space-between', width: '100%'},
  innerWrapper: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default TopSheet;
