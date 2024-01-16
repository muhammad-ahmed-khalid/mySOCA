import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatListHandler from '@Component/FlatlistHandler';
import {TransactionList} from '@Constants/dummyData';
import Metrics from '@Utility/Metrics';
import H7 from '@Component/Headings/H7';
import H5 from '@Component/Headings/H5';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import H1 from '@Component/Headings/H1';
import useActivityContainer from './ActivityContainer';
import H6 from '@Component/Headings/H6';
import moment from 'moment';
import {DATE_FORMATS} from '@Utility/DateUtils';
import CustomFlatListSeperator from '@Component/CustomFlatListSeperator/CustomFlatListSeperator';
import LinearGradient from 'react-native-linear-gradient';
import H4 from '@Component/Headings/H4';
import {DropDownIcon} from '@Asset/logo';
import SpinnerLoader from '@Component/SmallLoader';

const ActivityScreen = ({route}) => {
  const {PlayerID, RewardPoints, Months} = route?.params;
  const {getActivityData, isLoading} = useActivityContainer(PlayerID);
  const playerData = getActivityData?.data || {};

  console.log(
    getActivityData,
    'getActivityDatagetActivityDatagetActivityDatagetActivityData',
  );
  const dataArray = Object.entries(playerData)
    ?.map(([key, value]) => ({
      key,
      value,
    }))
    .slice(2);

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: Metrics.verticalScale(20),
        }}>
        <H5 text={item.key} />
        <H5 text={item.value} />
      </View>
    );
  };

  return (
    <>
      <LinearGradient
        colors={['#09203F', '#537895']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          backgroundColor: '#374051',
          // alignItems: 'center',
          paddingBottom: Metrics.scale(30),
          // paddingTop: Metrics.verticalScale(50),
          // height: '75%',
          borderBottomLeftRadius: Metrics.scale(20),
          borderBottomRightRadius: Metrics.scale(20),
        }}>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(50),
          }}>
          <H1 text="Account Activity" style={{color: 'white'}} />
          <View
            style={{
              flexDirection: 'row',
              marginTop: Metrics.doubleBaseMargin,
              justifyContent: 'space-between',
            }}>
            <View>
              <H5
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
            <View>
              <H5
                text={`MONTHS THIS YEAR`}
                style={{
                  // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
                  // alignSelf: 'flex-start',
                  color: 'white',
                  // marginHorizontal: Metrics.scale(20),
                }}
              />
              <H1
                text={`${Months}`}
                style={{
                  // ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
                  // alignSelf: 'flex-start',
                  color: Colors.WHITE,
                  alignSelf: 'center',
                  // paddingHorizontal: 10,
                  // marginHorizontal: Metrics.scale(20),
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Metrics.baseMargin,
            }}>
            <H5 text="Last 12 Months" style={{color: Colors.WHITE}} />
            {/* <DropDownIcon style={{marginHorizontal: Metrics.smallMargin}} /> */}
          </View>
        </View>
      </LinearGradient>
      <ScrollView style={{}}>
        {isLoading ? (
          <SpinnerLoader size={'large'} color={'#09203F'} />
        ) : (
          <View
            style={{
              marginHorizontal: 20,
              marginTop: Metrics.verticalScale(20),
            }}>
            <FlatListHandler
              renderItem={renderItem}
              data={dataArray}
              keyExtractor={item => item?.id}
              ItemSeparatorComponent={() => {
                return <CustomFlatListSeperator />;
              }}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({});
