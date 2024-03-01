import {
  AwardGoldSvg,
  AwardPlatinumSvg,
  AwardSilverSvg,
  AwardSvg,
  FaqsIcon,
  FaqsIcon2
} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H1 from '@Component/Headings/H1';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import SpinnerLoader from '@Component/SmallLoader';
import { FaqsList } from '@Constants/dummyData';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useTierContainer from './TierContainer';
import Header from '@Component/AppHeader';
import H3 from '@Component/Headings/H3';
import H4 from '@Component/Headings/H4';
import { Colors } from '@Theme/index';

const TierScreen = () => {
  const {getTierData, isLoading} = useTierContainer();
  // Create an array of boolean values to represent the open/close state for each FAQ item
  const [isOpenArray, setIsOpenArray] = React.useState(
    Array(FaqsList.length).fill(false),
  );

  const handleTogglePress = index => {
    // Create a copy of the isOpenArray and toggle the state for the clicked FAQ item
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];

    // Customize the animation duration (e.g., 400 milliseconds)
    const customLayoutAnimation = {
      duration: 400, // Adjust this value as needed
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
      },
    };

    setIsOpenArray(updatedIsOpenArray);
    LayoutAnimation.configureNext(customLayoutAnimation);
  };
  const renderItem = ({item, index}) => {
    const isDetails = isOpenArray[index]; // Get the open/close state for this FAQ item
    console.log(item, 'This is item');
    const {Benefits, Requirement, Tier} = item || {};

    let tierSvg;

    // Conditionally set the SVG component based on the tier
    if (Tier === 'Gold') {
      tierSvg = <AwardGoldSvg style={{height: 20, width: 20}} />;
    } else if (Tier === 'Platinum') {
      tierSvg = <AwardPlatinumSvg style={{height: 20, width: 20}} />;
    } else if (Tier === 'Silver') {
      tierSvg = <AwardSilverSvg style={{height: 20, width: 20}} />;
    } else if (Tier === 'Member') {
      tierSvg = <AwardSvg style={{height: 20, width: 20}} />;
    }
    return (
      <View
        style={{
          backgroundColor: '#09203F',
          paddingVertical: Metrics.verticalScale(30),
          paddingHorizontal: 20,
          marginVertical: Metrics.baseMargin,
          borderRadius: Metrics.scale(10),
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
        }}>
        <ButtonView
          onPress={() => handleTogglePress(index)} // Pass the index to identify the clicked FAQ item
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {tierSvg}
            <H5
              text={Tier}
              style={{color: 'white', marginHorizontal: Metrics.smallMargin}}
            />
          </View>

          <View>{isDetails ? <FaqsIcon2 /> : <FaqsIcon />}</View>
        </ButtonView>
        {isDetails && (
          <View>
            {Benefits && (
              <H6
                style={{
                  ...Fonts.Medium(Fonts.Size.small, Colors.WHITE_THREE),
                  marginTop: Metrics.baseMargin,
                  lineHeight: 30,
                }}
                text={`Benefits: ${Benefits}`}
              />
            )}

            <H6
              style={{
                ...Fonts.Medium(Fonts.Size.small, Colors.WHITE_THREE),
                marginTop: Metrics.baseMargin,
                lineHeight: 30,
              }}
              text={Requirement && `Requirement: ${Requirement}`}
            />
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={{backgroundColor: '#1A182c', flex: 1}}>
        <Header backButton={false} desc={"Tiers"}/>
        <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: Metrics.scale(23)}}>
          <View style={styles.headingWrapper}>
            <H3 text='3 Months' style={styles.monthText}/>
            <Text style={styles.monthTagline}>left to unlock <H4 text='Gold' style={styles.tierTEXt}/> Tier</Text>
          </View>
      </ScrollView>
      {/* <LinearGradient
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
          <H1 text="Tiers" style={{color: 'white'}} />
          <H5
            text="Overview"
            style={{color: 'white', marginTop: Metrics.baseMargin}}
          />
          <H6
            style={{color: Colors.WHITE_THREE, marginTop: Metrics.smallMargin}}
            text={`A rich rewards program enabling athletes to keep training with passion. SOCA believes that training regularly keeps the athletes focused and help realize their goals.\nSOCA Rewards Program rewards athletes for commitment to training, fitness, and playing tournaments for SOCA teams.`}
          />
        </View>
      </LinearGradient>
      {isLoading ? (
        <SpinnerLoader size={'large'} color={'#09203F'} />
      ) : (
        <ScrollView>
          <View
            style={{
              marginHorizontal: 20,
            }}>
            <View style={{marginTop: Metrics.doubleBaseMargin}}>
              <FlatListHandler
                data={getTierData?.message}
                keyExtractor={item => item?.id}
                renderItem={renderItem}
              />
            </View>
          </View>
        </ScrollView>
      )} */}
    </View>
  );
};

export default TierScreen;

const styles = StyleSheet.create({
  headingWrapper:{ },
  monthText:{
    ...Fonts.Bold(Fonts.Size.medium, Colors.Colors.WHITE),
  },
  monthTagline:{
    ...Fonts.Bold(Fonts.Size.xSmall,"#98D8FA")
  },
  tierTEXt:{
    ...Fonts.Bold(Fonts.Size.xSmall,"#FFC802")
  }
});
