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
import H6 from '@Component/Headings/H6';
import moment from 'moment';
import {DATE_FORMATS} from '@Utility/DateUtils';
import CustomFlatListSeperator from '@Component/CustomFlatListSeperator/CustomFlatListSeperator';
import LinearGradient from 'react-native-linear-gradient';
import H4 from '@Component/Headings/H4';
import {DropDownIcon} from '@Asset/logo';
import usePerformanceContainer from './PerformanceContainer';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {getItem} from '@Service/storageService';

const TotalGames = ({route}) => {
  const {PlayerID} = route?.params?.params;
  const {getPerformanceData} = usePerformanceContainer(PlayerID);
  const data = getPerformanceData?.data?.TotalGames || {};
  // Assuming data is the object you provided
  const dataArray = Object.entries(data)?.map(([key, value]) => ({key, value}));

  return (
    <SafeAreaView>
      <ScrollView style={{}}>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(20),
          }}>
          <FlatListHandler
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: Metrics.verticalScale(20),
                }}>
                {item.value > 0 && (
                  <>
                    <H5 text={item.key} />
                    <H5 text={item.value} />
                  </>
                )}
              </View>
            )}
            data={dataArray}
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

export default TotalGames;

const styles = StyleSheet.create({});
