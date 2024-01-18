import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Metrics from '@Utility/Metrics';
import H2 from '@Component/Headings/H2';
import H4 from '@Component/Headings/H4';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import FlatListHandler from '@Component/FlatlistHandler';
import {TransactionList} from '@Constants/dummyData';
import H7 from '@Component/Headings/H7';
import ButtonView from '@Component/ButtonView';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '@Theme/Colors';
import useRewardContainer from './RewardContainer';
import Fonts from '@Theme/Fonts';
import {AwardSvg, ViaCard} from '@Asset/logo';
import H1 from '@Component/Headings/H1';
import SpinnerLoader from '@Component/SmallLoader';

const RewardScreen = ({route}) => {
  const {player_reg_no: PlayerID} = route?.params?.item;
  console.log(PlayerID, 'PlayerIDPlayerID');

  const {getRedeemData, isLoading} = useRewardContainer(PlayerID);
  console.log(getRedeemData, 'getRedeemDatagetRedeemDatagetRedeemData');

  const RenderItem = ({item}: any) => {
    const {Points, Price, Redemtion, isRedeemable} = item || {};
    return (
      <LinearGradient
        colors={['#09203F', '#537895']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientContainer}>
        <View style={{}}>
          <H4 text={Redemtion} style={{color: 'white'}} />
        </View>
        <View>
          <H6
            text="Redeem at the academy for"
            style={{
              color: 'white',
              alignSelf: 'center',
              marginTop: Metrics.baseMargin,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: Metrics.scale(60),
          }}>
          <View
            style={{
              paddingVertical: Metrics.baseMargin,
              paddingHorizontal: Metrics.baseMargin,
              borderRadius: Metrics.baseMargin,
              marginTop: Metrics.baseMargin,
              // backgroundColor: '#868F96',
              // bordeColor: Colors.GREY_BORDER,
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <AwardSvg style={{height: 15, width: 15}} />
            <H6 text={Points} style={{color: 'white'}} />
            <H7
              text="Pts"
              style={{
                ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.WHITE),
                alignSelf: 'flex-end',
              }}
            />
          </View>
          <View
            style={{
              paddingVertical: Metrics.baseMargin,
              paddingHorizontal: Metrics.baseMargin,
              borderRadius: Metrics.baseMargin,
              marginTop: Metrics.baseMargin,
              // backgroundColor: '#868F96',
              // bordeColor: Colors.GREY_BORDER,
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <ViaCard style={{height: 20, width: 20}} />
            <H6
              text={`$${Price}`}
              style={{color: 'white', marginHorizontal: Metrics.smallMargin}}
            />
          </View>
        </View>
      </LinearGradient>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <H1 text="Redeem" />
          </View>
          {/* <H4
            text="Coming Soon"
            style={{color: 'red', marginTop: Metrics.baseMargin}}
          /> */}
          {isLoading ? (
            <SpinnerLoader size={'large'} color={'#09203F'} />
          ) : (
            <View
              style={{
                marginTop: Metrics.baseMargin,
                // opacity: 0.7,
              }}>
              <FlatListHandler
                data={getRedeemData?.data}
                keyExtractor={item => item?.id}
                renderItem={RenderItem}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RewardScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    marginVertical: Metrics.verticalScale(10),
    padding: Metrics.baseMargin,
    paddingVertical: Metrics.verticalScale(22),
    borderRadius: Metrics.baseMargin,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
