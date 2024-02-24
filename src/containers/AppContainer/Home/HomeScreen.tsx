import {
  AwardSvg,
  ChevronSvg,
  HomeAddress,
  HomeJpeg,
  LogoutSvg,
  RightArrowLarge,
  SOCAPng,
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H4 from '@Component/Headings/H4';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import H7 from '@Component/Headings/H7';
import {TransactionList} from '@Constants/dummyData';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Svg, Circle} from 'react-native-svg';

import useHomeScreenContainer from './HomeScreenContainer';
import H2 from '@Component/Headings/H2';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import H1 from '@Component/Headings/H1';
import CircularProgress from 'react-native-circular-progress-indicator';
import SemiCircleProgress from '@Component/SemiCircleProgress/SemiCircleProgress';
import H3 from '@Component/Headings/H3';
import {getItem, setItem} from '@Service/storageService';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import SpinnerLoader from '@Component/SmallLoader';
import Header from '@Component/AppHeader';

const HomeScreen = ({route}) => {
  const {player_reg_no: PlayerID, Player_Name} = route?.params?.item;

  const {playerData, playerLoading} = useHomeScreenContainer(PlayerID);
  console.log(playerData, 'playerDataplayerDataplayerData');

  const {Tier, RewardPoints, Months, Attendance, Amount, CashRewards} =
    playerData?.data || {};

  return (
    <>
    <Header title="Home" backButton={false} subText={"Welcome Back"} desc={Player_Name}/>
    </>
    // <SafeAreaView>
    //   <LinearGradient
    //     colors={['#09203F', '#537895']}
    //     start={{x: 0, y: 0}}
    //     end={{x: 1, y: 0}}
    //     style={{
    //       backgroundColor: '#374051',
    //       alignItems: 'center',
    //       // paddingBottom: Metrics.scale(20),
    //       paddingTop: Metrics.verticalScale(30),
    //       // height: '75%',
    //       // borderBottomLeftRadius: Metrics.scale(30),
    //       // borderBottomRightRadius: Metrics.scale(30),
    //     }}>
    //     <Image
    //       source={SOCAPng}
    //       style={{
    //         height: 80,
    //         width: 80,
    //         marginBottom: Metrics.verticalScale(5),
    //       }}
    //     />

    //     {playerLoading ? (
    //       <SpinnerLoader size={'large'} />
    //     ) : (
    //       <>
    //         <H2
    //           text={`${Player_Name}`}
    //           style={{
    //             // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
    //             alignSelf: 'flex-start',
    //             color: Colors.WHITE,
    //             marginHorizontal: Metrics.scale(20),
    //             marginTop: Metrics.verticalScale(20),
    //           }}
    //         />
    //         <H2
    //           text={`${Tier}`}
    //           style={{
    //             // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
    //             alignSelf: 'flex-start',
    //             color: Colors.WHITE,
    //             marginHorizontal: Metrics.scale(20),
    //           }}
    //         />

    //         <View
    //           style={{
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             marginTop: Metrics.verticalScale(10),
    //           }}>
    //           <SemiCircleProgress
    //             progress={Months}
    //             strokeWidth={5}
    //             radius={100}
    //           />
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             marginTop: Metrics.verticalScale(40),
    //             justifyContent: 'space-between',
    //             width: '100%',
    //             paddingHorizontal: 15,
    //           }}>
    //           <View>
    //             <H5
    //               text={`TOTAL POINTS`}
    //               style={{
    //                 color: 'white',
    //               }}
    //             />

    //             <H2
    //               text={`${RewardPoints}`}
    //               style={{
    //                 color: Colors.WHITE,
    //                 alignSelf: 'center',
    //               }}
    //             />
    //           </View>
    //           <View>
    //             <View style={{alignSelf: 'flex-end'}}>
    //               <H5
    //                 text={`CASH REWARDS`}
    //                 style={{
    //                   color: 'white',
    //                 }}
    //               />

    //               <H2
    //                 text={`${CashRewards}`}
    //                 style={{
    //                   color: Colors.WHITE,
    //                   alignSelf: 'center',
    //                 }}
    //               />
    //             </View>
    //             <ButtonView
    //               onPress={() =>
    //                 navigate(NavigationRoutes.APP_STACK.ACTIVITY, {
    //                   PlayerID,
    //                   RewardPoints,
    //                   Months,
    //                 })
    //               }
    //               style={{
    //                 flexDirection: 'row',
    //                 alignItems: 'center',
    //                 alignSelf: 'flex-end',
    //                 marginRight: Metrics.scale(-15),
    //                 // marginTop: Metrics.baseMargin,
    //                 marginBottom: Metrics.baseMargin,
    //               }}>
    //               <H5
    //                 text={`Account Activity`}
    //                 style={{
    //                   color: 'white',
    //                 }}
    //               />
    //               <ChevronSvg style={{marginHorizontal: Metrics.smallMargin}} />
    //             </ButtonView>
    //           </View>
    //         </View>
    //         <Image
    //           source={HomeJpeg}
    //           resizeMode="stretch"
    //           style={{height: 200, width: '100%'}}
    //         />
    //       </>
    //     )}
    //   </LinearGradient>
    // </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    width: '100%',
    paddingVertical: 20,
    padding: 20,
    // borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomLeftRadius: Metrics.scale(20),
    borderBottomRightRadius: Metrics.scale(20),
  },
  gradientContainers: {
    width: '100%',
    padding: 40,
    paddingVertical: Metrics.verticalScale(50),
    // borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  container: {
    marginTop: Metrics.verticalScale(60),
    alignItems: 'center',
    flex: 1,
    // marginHorizontal: Metrics.scale(20),
  },
  buttonWrapper: {
    width: '45%',
    paddingVertical: 20,
    marginHorizontal: Metrics.baseMargin,
    padding: 20,
    alignItems: 'center',
    // alignSelf: 'center',
    // borderRadius: 30,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 4,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
});
