import {
  LayoutAnimation,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import H2 from '@Component/Headings/H2';
import Metrics from '@Utility/Metrics';
import FlatListHandler from '@Component/FlatlistHandler';
import {FaqsList} from '@Constants/dummyData';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import {AwardSvg, FaqsIcon, FaqsIcon2, RewardIcon} from '@Asset/logo';
import H6 from '@Component/Headings/H6';
import H7 from '@Component/Headings/H7';
import ButtonView from '@Component/ButtonView';
import H5 from '@Component/Headings/H5';
import useTierContainer from './TierContainer';
import H1 from '@Component/Headings/H1';

const TierScreen = () => {
  const {getTierData} = useTierContainer();
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
            <AwardSvg style={{height: 20, width: 20}} />
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
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(50),
          }}>
          <H1 text="Tiers" />
          <View style={{marginTop: Metrics.doubleBaseMargin}}>
            <FlatListHandler
              data={getTierData?.message}
              keyExtractor={item => item?.id}
              renderItem={renderItem}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TierScreen;

const styles = StyleSheet.create({});
