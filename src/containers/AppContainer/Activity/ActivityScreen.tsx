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

const ActivityScreen = ({route}) => {
  const {PlayerID} = route?.params;
  const {getActivityData} = useActivityContainer(PlayerID);
  console.log(getActivityData, 'getActivityDatagetActivityDatagetActivityData');

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
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(50),
          }}>
          <H1 text="Activity" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: Metrics.baseMargin,
            }}>
            <H6 text="Transaction" />
            <H6 text="Reward Pts/Amount" />
          </View>
          <FlatListHandler
            renderItem={renderTransaction}
            data={getActivityData?.data}
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
