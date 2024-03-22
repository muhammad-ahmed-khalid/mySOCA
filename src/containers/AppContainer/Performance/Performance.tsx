import {CATEGORIES_MAIN} from '@Constants/dummyData';
import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {
  AgeIcon,
  DummyCircle,
  GirlPlayer,
  LeaguesIcon,
  PlayerImage,
  SilverSmallCup,
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

console.log(route,'routerouterouterouteroute');

  return (
    <View style={{backgroundColor:Colors.Colors.APP_BACKGROUND, flex: 1}}>
      <Header title="Player Performance" />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: Metrics.scale(23),}}>
        <PlayerInfo />
        <TotlaGamePlayed />
        <Attendance />
        <FieldingErrors />
      </ScrollView>
    </View>
  );
}

const PlayerInfo = () => {
  return (
    <View style={styles.PlayerInfoContainer}>
      <Image source={GirlPlayer} style={styles.image} />
      <View style={styles.playerInfoInnerWrapper}>
      <View style={styles.ageWrapper}>
        <AgeIcon />
        <H3 text="19" style={styles.ageText} />
      </View>
      <H3 text="Stacy Gwen" style={styles.nameText} />
      <H3 text="USACID - Cricclubs id" style={styles.solganText} />
      <View style={styles.cupWrapper}>
        <SilverSmallCup />
        <H3 text="Silver" style={styles.cupText} />
      </View>
      </View>
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

const Attendance = () => {
  return (
    <View style={styles.attendanceWrapper}>
      <H2 text="Attendance" style={styles.totalGamePlayedTitle} />
      <View style={styles.attendanceBoxWrapper}>
        <View style={styles.leftSect}>
          <H4 text='80' style={styles.leftTitle}/>
          <H4 text='out of 100' style={styles.leftSubTitle}/>
        </View>
        <View style={styles.rightSect}>
           <H4 text='80%' style={styles.rightTitle}/>
           <DummyCircle />
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
  },
  text: {
    marginHorizontal: 25,
    color: Colors.Colors.WHITE,
    marginBottom: Metrics.baseMargin,
    textAlign: 'center',
  },

  PlayerInfoContainer: {
    flexDirection: 'row'
  },
  image: {
    width: Metrics.scale(139),
    height: Metrics.scale(165),
    borderRadius: 15,
    overflow: 'hidden',
  },
  playerInfoInnerWrapper:{
    marginLeft: Metrics.scale(14)
  },
  ageWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  cupWrapper:{
    borderWidth: 1,
    borderColor: Colors.Colors.DARK_BLUE,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 95,
    paddingVertical: 10,
    marginTop: Metrics.scale(11)
  },
  cupText:{
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.WHITE),
    marginLeft: Metrics.scale(8)
  },
  ageText: {
    ...Fonts.Regular(Fonts.Size.mLarge, Colors.Colors.DARK_BLUE),
    lineHeight: 24,
    marginLeft: Metrics.scale(5),
  },
  nameText: {
    ...Fonts.Bold(Fonts.Size.xxLarge, Colors.Colors.WHITE),
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
  attendanceWrapper:{
    marginBottom: Metrics.scale(25)
  },
  attendanceBoxWrapper:{
    backgroundColor: Colors.Colors.FAMILY_BACKGROUND,
    borderRadius: 10,
    paddingHorizontal: Metrics.scale(13),
    paddingTop: Metrics.scale(15),
    paddingBottom: Metrics.scale(16),
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  leftSect:{
    justifyContent: 'center',
  },
  rightSect:{
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftTitle:{
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.Colors.WHITE),
  },
  leftSubTitle:{
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLUE),
  },
  rightTitle:{
    ...Fonts.SemiBold(Fonts.Size.xhuge, Colors.Colors.TEXT_COLOR),
    marginRight: Metrics.scale(13)
  }
});
