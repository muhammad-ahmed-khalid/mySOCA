import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import usePaymentContainer from './PaymentContainer';
import LinearGradient from 'react-native-linear-gradient';
import Metrics from '@Utility/Metrics';
import H3 from '@Component/Headings/H3';
import H2 from '@Component/Headings/H2';
import {Colors} from '@Theme/Colors';
import SpinnerLoader from '@Component/SmallLoader';
import FlatListHandler from '@Component/FlatlistHandler';
import H5 from '@Component/Headings/H5';
import CustomFlatListSeperator from '@Component/CustomFlatListSeperator/CustomFlatListSeperator';

const PaymentScreen = ({route}) => {
  const {PlayerID, Player_Name} = route?.params;
  const {getPaymentData, isLoading} = usePaymentContainer(PlayerID);
  console.log(getPaymentData, 'getPaymentDatagetPaymentDatagetPaymentData');
  const paymentData = getPaymentData?.data || {};
  const dataArray = Object.entries(paymentData)
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
        <H2 text={'Payments'} style={styles.text} />
        <H3
          text={Player_Name}
          style={{
            color: Colors.WHITE,
            marginHorizontal: 20,
            marginTop: Metrics.smallMargin,
          }}
        />
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

export default PaymentScreen;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 25,
    color: Colors.WHITE,
    marginBottom: Metrics.baseMargin,
    textAlign: 'center',
    marginTop: Metrics.verticalScale(40),
  },
});
