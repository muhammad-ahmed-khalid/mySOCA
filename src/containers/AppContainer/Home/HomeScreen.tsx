import {
  AwardSvg,
  ChevronSvg,
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
import { getItem, setItem } from '@Service/storageService';
import { STORAGE_KEYS } from '@Constants/queryKeys';

const HomeScreen = ({route}) => {

  const {PlayerID, Name} = route?.params?.item;

  const {playerData, playerLoading} = useHomeScreenContainer(PlayerID);


 
  
  const {Tier, RewardPoints, Months, Attendance, Amount} =
    playerData?.data || {};

 

  return (
    <SafeAreaView>
      {/* <View style={{marginHorizontal: 20, marginTop: Metrics.baseMargin}}>
        <LinearGradient
          colors={['#09203F', '#537895']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradientContainer}>
          <H4
            text={Tier}
            style={{
              ...Fonts.Bold(Fonts.Size.large, Colors.WHITE),
              marginTop: Metrics.baseMargin,
              alignSelf: 'center',
            }}
          />
          <H4
            text="Zaydaan"
            style={{
              ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
              marginTop: Metrics.baseMargin,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: Metrics.baseMargin,
            }}>
            <View style={{alignItems: 'center'}}>
              <H4
                text="Reward Pts"
                style={{
                  ...Fonts.Medium(Fonts.Size.normal, Colors.WHITE),
                  marginTop: Metrics.baseMargin,
                }}
              />
              <H4
                text={Rewards}
                style={{
                  ...Fonts.Medium(Fonts.Size.normal, Colors.WHITE),
                  marginTop: Metrics.baseMargin,
                }}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <H4
                text="Member Since"
                style={{
                  ...Fonts.Medium(Fonts.Size.normal, Colors.WHITE),
                  marginTop: Metrics.baseMargin,
                }}
              />
              <H4
                text="20/02/2021"
                style={{
                  ...Fonts.Medium(Fonts.Size.normal, Colors.WHITE),
                  marginTop: Metrics.baseMargin,
                }}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <LinearGradient
            colors={['#868F96', '#596164']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientContainers}>
            <H4
              text="Attendence"
              style={{
                ...Fonts.Bold(Fonts.Size.medium, Colors.WHITE),
                marginTop: Metrics.baseMargin,
              }}
            />
            <H4
              text={`${Attendance}%`}
              style={{
                ...Fonts.Medium(Fonts.Size.medium, Colors.WHITE),
                marginTop: Metrics.baseMargin,
              }}
            />
          </LinearGradient>
          <LinearGradient
            colors={['#868F96', '#596164']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientContainers}>
            <H4
              text="Amount"
              style={{
                ...Fonts.Bold(Fonts.Size.medium, Colors.WHITE),
                marginTop: Metrics.baseMargin,
              }}
            />
            <H4
              text={`$${Total}`}
              style={{
                ...Fonts.Medium(Fonts.Size.medium, Colors.WHITE),
                marginTop: Metrics.baseMargin,
              }}
            />
          </LinearGradient>
        </View>
        <View style={{marginTop: Metrics.verticalScale(40)}}>
          <H4 text="Transactions" />
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              height: 1,
              backgroundColor: Colors.SEPARATOR_COLOR,
              marginTop: Metrics.doubleBaseMargin,
            }}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{minHeight: '50%'}}
          alwaysBounceVertical={false}
          bounces={false}>
          <FlatListHandler
            renderItem={renderTransaction}
            data={TransactionList}
            keyExtractor={item => item?.id}
          />
        </ScrollView>
      </View> */}
      <LinearGradient
        colors={['#09203F', '#537895']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          backgroundColor: '#374051',
          alignItems: 'center',
          // paddingBottom: Metrics.scale(20),
          paddingTop: Metrics.verticalScale(50),
          // height: '75%',
          borderBottomLeftRadius: Metrics.scale(30),
          borderBottomRightRadius: Metrics.scale(30),
        }}>
        <Image
          source={SOCAPng}
          style={{
            height: 70,
            width: 70,
            marginBottom: Metrics.verticalScale(5),
          }}
        />
        <H2
          text={`${Name}`}
          style={{
            // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
            alignSelf: 'flex-start',
            color: Colors.WHITE,
            marginHorizontal: Metrics.scale(20),
            marginTop: Metrics.verticalScale(40),
          }}
        />
        <H1
          text={`${Tier}`}
          style={{
            // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
            alignSelf: 'flex-start',
            color: Colors.WHITE,
            marginHorizontal: Metrics.scale(20),
          }}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: Metrics.verticalScale(30),
          }}>
          <SemiCircleProgress progress={Months} strokeWidth={5} radius={100} />
        </View>



        <LinearGradient
        colors={['#A1C4FD', '#C2E9FB']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          flexDirection: 'row',
          // alignSelf: 'flex-start',
          // alignItems: 'center',
          marginTop: Metrics.verticalScale(50),
          justifyContent: 'space-between',
          // marginHorizontal: Metrics.scale(20),
          paddingHorizontal:15,
          paddingVertical:10,
          borderBottomLeftRadius: Metrics.scale(25),
          borderBottomRightRadius: Metrics.scale(25),
          width: '100%',}}
        >
    <View>
            <H4
              text={`TOTAL POINTS`}
              style={{
                // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
                // alignSelf: 'flex-start',
                color: 'white',
                // marginHorizontal: Metrics.scale(20),
              }}
            />

            <H1
              text={`${RewardPoints}`}
              style={{
                // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
                // alignSelf: 'flex-start',
                color: Colors.WHITE,
                // paddingHorizontal: 10,
                // marginHorizontal: Metrics.scale(20),
              }}
            />
          </View>
          <ButtonView
            onPress={() =>
              navigate(NavigationRoutes.APP_STACK.ACTIVITY, {
                PlayerID,
                RewardPoints,
                Months,
              })
            }
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
            }}>
            <H5
              text={`Account Activity`}
              style={{
                // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
                // alignSelf: 'flex-start',
                color: 'white',
                // marginHorizontal: Metrics.scale(20),
                // marginTop: Metrics.verticalScale(40),
              }}
            />
            <ChevronSvg style={{marginHorizontal: Metrics.baseMargin}} />
          </ButtonView>
        </LinearGradient>


        {/* <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
            // alignItems: 'center',
            marginTop: Metrics.verticalScale(50),
            justifyContent: 'space-between',
            marginHorizontal: Metrics.scale(20),
            width: '94%',
          }}>
      
        </View> */}

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: Metrics.doubleBaseMargin,
          }}> */}
        {/* <View style={styles.buttonWrapper}>
            <H4
              text="Attendence"
              style={{
                ...Fonts.Bold(Fonts.Size.medium, Colors.WHITE),
                marginTop: Metrics.baseMargin,
                marginBottom: Metrics.baseMargin,
              }}
            />
            <CircularProgress
              value={playerLoading ? 0 : Attendance}
              radius={50}
              duration={1000}
              progressValueColor={Colors.WHITE}
              maxValue={100}
              title={`%`}
              titleColor={Colors.WHITE}
              activeStrokeWidth={3}
              inActiveStrokeWidth={3}
              activeStrokeColor={Colors.WHITE}
              inActiveStrokeOpacity={0.5}
              titleStyle={{
                position: 'absolute',
                right: 0,
                left: 38,
                fontSize: 20,
              }}
            />
          </View> */}
        {/* <View style={styles.buttonWrapper}>
            <View style={{flexDirection: 'row'}}>
              <H4
                text={Tier}
                style={{
                  ...Fonts.Bold(Fonts.Size.medium, Colors.WHITE),
                }}
              />
              <AwardSvg
                style={{width: '15%', marginHorizontal: Metrics.smallMargin}}
              />
            </View>
            <H4
              text="Amount"
              style={{
                ...Fonts.Bold(Fonts.Size.medium, Colors.WHITE),
                marginTop: Metrics.baseMargin,
              }}
            />
            <H4
              text={`$${Amount}`}
              style={{
                ...Fonts.Medium(Fonts.Size.medium, Colors.WHITE),
                marginTop: Metrics.baseMargin,
              }}
            />
          </View> */}
        {/* </View> */}
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignContent: 'flex-end',
            alignSelf: 'flex-end',
            marginRight: Metrics.scale(25),
          }}>
          <H2 text={RewardPoints} style={{color: Colors.WHITE}} />
          <H7 text={'pts'} style={{color: Colors.WHITE}} />
        </View> */}
      </LinearGradient>

      {/* <LinearGradient
        colors={['#A1C4FD', '#C2E9FB']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <H2
            text={RewardPoints}
            style={{
              ...Fonts.SemiBold(Fonts.Size.large, Colors.WHITE),
            }}
          />
          <H5 text={'pts'} style={{color: Colors.WHITE}} />
        </View>
        <ButtonView
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() =>
            navigate(NavigationRoutes.APP_STACK.ACTIVITY, {PlayerID})
          }>
          <H4
            text={`${Months} months`}
            style={{
              ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
              marginHorizontal: Metrics.baseMargin,
            }}
          />
          <ChevronSvg />
        </ButtonView>
      </LinearGradient> */}

      {/* <View>
          <H4
            text={`Hi, ${Name}`}
            style={{...Fonts.SemiBold(Fonts.Size.medium, Colors.BLACK)}}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <H4
            text={RewardPoints}
            style={{...Fonts.SemiBold(Fonts.Size.medium, Colors.BLACK)}}
          />
          <H7 text={'pts'} />
        </View>
        <View>
          <H4
            text={`${Months} months`}
            style={{...Fonts.SemiBold(Fonts.Size.medium, Colors.BLACK)}}
          />
        </View> */}
      {/* <LinearGradient
        colors={['#09203F', '#537895']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientContainers}>
        <H2
          text={Tier}
          style={{...Fonts.SemiBold(Fonts.Size.large, Colors.WHITE)}}
        />
        <AwardSvg />
      </LinearGradient> */}
    </SafeAreaView>
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
