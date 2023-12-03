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
import { DropDownIcon } from '@Asset/logo';

const ActivityScreen = ({route}) => {
  const {PlayerID, RewardPoints, Months} = route?.params;
  const {getActivityData} = useActivityContainer(PlayerID);
  const playerData =
    getActivityData && getActivityData.data?.length > 0
      ? getActivityData?.data[0]
      : {};


  // Transform the data into an array of objects with "month" and "value" keys
  const transformedData = Object.keys(playerData).map(month => ({
    month,
    value: playerData[month],
  })).slice(1); // Exclude the first element
  const renderTransaction = ({item}) => {
    const {
      Amount,
      CreatedOn,
      PaymentType,
      RewardPoints,
      TransactionID,
      Redemption,
    } = item || {};
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: Metrics.baseMargin,
        }}>
         
        <View>
          <H5 text={Redemption} />
          <H7
            text={moment(CreatedOn).format(DATE_FORMATS.DATE_FORMAT)}
            style={{...Fonts.Medium(Fonts.Size.xxxSmall, Colors.DATE_COLOR)}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {PaymentType === 'RewardPoints' ? (
            <>
              <H5 text={RewardPoints} />
              <H7
                text="Pts"
                style={{
                  ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.BLACK),
                  marginTop: 10,
                }}
              />
            </>
          ) : (
            <>
              <H5 text={`$${Amount}`} />
            </>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
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

     <H1 text="Account Activity" style={{color:'white'}}/>
     <View style={{flexDirection:'row',marginTop:Metrics.doubleBaseMargin,justifyContent:'space-between'}}>
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
                alignSelf:'center'
                // paddingHorizontal: 10,
                // marginHorizontal: Metrics.scale(20),
              }}
            />
      </View>
     </View>
     <View style={{flexDirection:'row',alignItems:'center',marginTop:Metrics.baseMargin}}>
     <H5 text="Last 12 Months" style={{color: Colors.WHITE,}}/>
 <DropDownIcon style={{marginHorizontal:Metrics.smallMargin}}/>

     </View>

     </View>
      </LinearGradient>
      <ScrollView style={{}}>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(20),
        
          }}>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: Metrics.baseMargin,
            }}>
            <H6 text="Mont" />
            <H6 text="Reward Pts/Amount" />
          </View> */}
          <FlatListHandler
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: Metrics.verticalScale(20),
                }}>
                <H5 text={item.month} />
                <H5 text={item.value} />
              </View>
            )}
            data={transformedData}
            keyExtractor={item => item?.id}
            ItemSeparatorComponent={() => {
              return <CustomFlatListSeperator />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({});
