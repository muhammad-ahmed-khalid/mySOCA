import {CATEGORIES_MAIN} from '@Constants/dummyData';
import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {
  AgeIcon,
  LeaguesIcon,
  PlayerImage,
  TourneyIcon,
  Trophy,
} from '@Asset/logo';
import Header from '@Component/AppHeader';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H2 from '@Component/Headings/H2';
import H3 from '@Component/Headings/H3';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import usePerformanceContainer from './PerformanceContainer';

export default function Performance({route}) {
  console.log(route, 'routerouteroute');

  const {PlayerID, Player_Name} = route?.params;
  const {getPerformanceData} = usePerformanceContainer(PlayerID);
  const data = getPerformanceData?.data?.Tournaments || {};
  const battingData = getPerformanceData?.data?.Batting || {};
  const FieldingData = getPerformanceData?.data?.Fielding || {};
  const BowlingData = getPerformanceData?.data?.Bowling || {};

  console.log(BowlingData, 'BowlingDataBowlingDataBowlingDataBowlingData');

  const dataArray = Object.entries(data)?.map(([key, value]) => {
    let name = '';

    // Assign custom names based on the key
    switch (key) {
      case 'LocalLeagues':
        name = 'Local Leagues';
        break;
      case 'MLCJRCHAMP':
        name = 'MLCJR Championship';
        break;
      case 'T20Tourneys':
        name = 'Local Tourneys';
        break;
      // Add more cases as needed

      // Default case: use the key as the name
      default:
        name = key;
    }

    return {
      name,
      value,
    };
  });

  const battingArray = Object.entries(battingData).map(([key, value]) => {
    let name = '';

    switch (key) {
      case 'BattingAve':
        name = 'Batting Average';
        break;
      case 'Fiftees':
        name = 'Fifties';
        break;
      case 'Highest':
        name = 'Highest Score';
        break;
      case 'Hundreds':
        name = 'Hundreds';
        break;
      case 'RunsScored':
        name = 'Runs Scored';
        break;
      case 'StrikeRate':
        name = 'Strike Rate';
        break;
      default:
        name = key;
    }

    return {
      name,
      value,
    };
  });
  const fieldingArray = Object.entries(FieldingData).map(([key, value]) => {
    let name = '';

    switch (key) {
      case 'Catches':
        name = 'Catches';
        break;
      case 'DirectRunOuts':
        name = 'Direct Run Outs';
        break;
      case 'IndirectRunOuts':
        name = 'Indirect Run Outs';
        break;
      case 'WkDism':
        name = 'Wicket Dismissals';
        break;
      default:
        name = key;
    }

    return {
      name,
      value,
    };
  });
  const bowlingArray = Object.entries(BowlingData).map(([key, value]) => {
    let name = '';

    switch (key) {
      case 'Average':
        name = 'Bowling Average';
        break;
      case 'DotBallPercentage':
        name = 'Dot Ball Percentage';
        break;
      case 'Economy':
        name = 'Economy';
        break;
      case 'FiveW':
        name = 'Five Wicket Hauls';
        break;
      case 'FourW':
        name = 'Four Wicket Hauls';
        break;
      case 'Hatrick':
        name = 'Hat-trick';
        break;
      case 'OversBowled':
        name = 'Overs Bowled';
        break;
      case 'StrikeRate':
        name = 'Strike Rate';
        break;
      case 'Wickets':
        name = 'Wickets';
        break;
      default:
        name = key;
    }

    return {
      name,
      value,
    };
  });
  // console.log(
  //   getPerformanceData,
  //   'getPerformanceDatagetPerformanceDatagetPerformanceData',
  // );

  return (
    <View style={{backgroundColor: '#1A182c', flex: 1}}>
      {/* <LinearGradient
        colors={['#09203F', '#537895']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          backgroundColor: '#374051',
          //   alignItems: 'center',
          // paddingBottom: Metrics.scale(20),
          paddingTop: Metrics.verticalScale(50),
          borderBottomLeftRadius: Metrics.scale(30),
          borderBottomRightRadius: Metrics.scale(30),
          paddingBottom: 20,
          // height: '100%',
        }}>
        <H2 text={'2023- Performance Stats'} style={styles.text} />
        <H3
          text={Player_Name}
          style={{
            color: Colors.WHITE,
            marginHorizontal: 20,
            marginTop: Metrics.smallMargin,
          }}
        />
      </LinearGradient> */}
      {/* <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(20),
          }}>
          <H3 text="Total Games" style={{textAlign: 'center'}} />
          <FlatList
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: Metrics.verticalScale(20),
                }}>
                <H6 text={item.name} />
                <H6 text={item.value} />
              </View>
            )}
            data={dataArray}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={() => {
              return <CustomFlatListSeperator />;
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: Colors.INPUT_BORDER_COLOR,
          }}
        />
        <Grid>
          <Col>
            <Row
              style={{
                alignSelf: 'center',
              }}>
              <View
                style={{
                  // marginHorizontal: 20,
                  marginTop: Metrics.verticalScale(20),
                  marginBottom: 10,
                }}>
                <H3 text="Batting" style={{textAlign: 'center'}} />
                <FlatList
                  renderItem={({item}) => (
                    <View
                      style={{
                        // flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: Metrics.verticalScale(20),
                        marginHorizontal: 10,
                        alignItems: 'center',
                      }}>
                      <H6 text={item.name} />
                      <H6 text={item.value} />
                    </View>
                  )}
                  data={battingArray}
                  keyExtractor={item => item.name}
                  ItemSeparatorComponent={() => {
                    return <CustomFlatListSeperator />;
                  }}
                />
              </View>
            </Row>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: Colors.INPUT_BORDER_COLOR,
              }}
            />
            <Row style={{alignSelf: 'center'}}>
              <View
                style={{
                  // marginHorizontal: 10,
                  marginTop: Metrics.verticalScale(20),
                }}>
                <H3 text="Fielding" style={{textAlign: 'center'}} />
                <FlatList
                  renderItem={({item}) => (
                    <View
                      style={{
                        // flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: Metrics.verticalScale(20),
                        // marginHorizontal: 30,
                        // marginHorizontal: 10,
                        alignItems: 'center',
                      }}>
                      <H6 text={item.name} />
                      <H6 text={item.value} />
                    </View>
                  )}
                  data={fieldingArray}
                  keyExtractor={item => item.name}
                  ItemSeparatorComponent={() => {
                    return <CustomFlatListSeperator />;
                  }}
                />
              </View>
            </Row>
          </Col>
          <Col>
            <View
              style={{
                // marginHorizontal: 20,
                borderColor: Colors.INPUT_BORDER_COLOR,
                borderLeftWidth: 1,
                height: '100%',
              }}>
              <H3
                text="Bowling"
                style={{
                  textAlign: 'center',
                  marginTop: Metrics.verticalScale(20),
                }}
              />
              <FlatList
                renderItem={({item}) => (
                  <View
                    style={{
                      // flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Metrics.verticalScale(20),
                      alignItems: 'center',
                    }}>
                    <H6 text={item.name} />
                    <H6 text={item.value} />
                  </View>
                )}
                data={bowlingArray}
                keyExtractor={item => item.name}
                ItemSeparatorComponent={() => {
                  return (
                    <CustomFlatListSeperator
                      customStyle={{width: '80%', alignSelf: 'center'}}
                    />
                  );
                }}
              />
            </View>
          </Col>
        </Grid>
      </ScrollView> */}
      <Header title="Player Performance" />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: Metrics.scale(23)}}>
        <PlayerInfo />
        <TotlaGamePlayed />
        <FieldingErrors />
      </ScrollView>
    </View>
  );
}

const PlayerInfo = () => {
  return (
    <View style={styles.PlayerInfoContainer}>
      <Image source={PlayerImage} style={styles.image} />
      <View style={styles.ageWrapper}>
        <AgeIcon />
        <H3 text="19" style={styles.ageText} />
      </View>
      <H3 text="Stacy Gwen" style={styles.nameText} />
      <H3 text="USACID - Cricclubs id" style={styles.solganText} />
    </View>
  );
};

const TotlaGamePlayed = () => {
  return (
    <View style={styles.totalGamePlayedWrapper}>
      <H2 text="Total games played" style={styles.totalGamePlayedTitle} />
      <View style={styles.totalGameBoxesWrapper}>
        <View style={styles.totalGameBoxesInnerWrapper}>
          <Trophy />
          <H4 text="$300.00" style={styles.totalGameBoxePrice} />
          <H4 text="Championships" style={styles.totalGameBoxeTitle} />
        </View>
        <View
          style={[
            styles.totalGameBoxesInnerWrapper,
            {marginHorizontal: Metrics.scale(13)},
          ]}>
          <LeaguesIcon />
          <H4 text="$300.00" style={styles.totalGameBoxePrice} />
          <H4 text="Championships" style={styles.totalGameBoxeTitle} />
        </View>
        <View style={styles.totalGameBoxesInnerWrapper}>
          <TourneyIcon />
          <H4 text="$300.00" style={styles.totalGameBoxePrice} />
          <H4 text="Championships" style={styles.totalGameBoxeTitle} />
        </View>
      </View>
    </View>
  );
};

const FieldingErrors = () => {
  const renderMainCategories = ({item}: any) => {
    return (
      <ButtonView key={item?.id} style={styles.catMainWrapper}>
        <View style={styles.cateTextWrapper}>
          <H4 text={item?.cate} style={styles.cateTitle} />
          <H7 text={item?.score} style={styles.cateTagLine} />
        </View>
      </ButtonView>
    );
  };
  return (
    <View>
      <H2
        text="Fielding errors this year"
        style={styles.totalGamePlayedTitle}
      />
      <FlatListHandler
        data={CATEGORIES_MAIN}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={renderMainCategories}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
  },
  text: {
    marginHorizontal: 25,
    color: Colors.Colors.WHITE,
    marginBottom: Metrics.baseMargin,
    textAlign: 'center',
  },

  PlayerInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Metrics.scale(105),
    height: Metrics.scale(113),
    borderRadius: 6,
    overflow: 'hidden'
  },
  ageWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: Metrics.scale(18),
  },
  ageText: {
    ...Fonts.Regular(Fonts.Size.mLarge, Colors.Colors.DARK_BLUE),
    lineHeight: 24,
    marginLeft: Metrics.scale(5),
  },
  nameText: {
    ...Fonts.Bold(Fonts.Size.xxxLarge, Colors.Colors.WHITE),
    marginBottom: Metrics.scale(8),
  },
  solganText: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.WHITE),
  },
  totalGameBoxesWrapper: {
    flexDirection: 'row',
  },
  totalGameBoxesInnerWrapper: {
    alignItems: 'center',
    width: '31%',
    borderWidth: 1,
    borderColor: Colors.Colors.DARK_BLUE,
    borderRadius: 13,
    paddingTop: Metrics.scale(15),
    paddingBottom: Metrics.scale(16),
  },
  totalGameBoxePrice: {
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.Colors.WHITE),
    marginTop: Metrics.scale(10),
    marginBottom: Metrics.scale(5),
  },
  totalGameBoxeTitle: {
    ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.DARK_BLUE),
  },
  totalGamePlayedTitle: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
    marginBottom: Metrics.scale(13),
  },
  totalGamePlayedWrapper: {
    marginTop: Metrics.scale(28),
    marginBottom: Metrics.scale(25),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingRight: 1,
  },
  cateTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  catMainWrapper: {
    width: '48%',
    borderRadius: 10,
    padding: Metrics.scale(13),
    backgroundColor: '#0A182C',
    marginBottom: 12,
  },
  cateTitle: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.DARK_BLUE),
  },
  cateTagLine: {
    ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.WHITE),
  },
});
