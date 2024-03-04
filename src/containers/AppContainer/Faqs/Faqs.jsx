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
  import {
    AwardGoldSvg,
    AwardPlatinumSvg,
    AwardSilverSvg,
    AwardSvg,
    FaqsIcon,
    FaqsIcon2,
    RewardIcon,
  } from '@Asset/logo';
  import H6 from '@Component/Headings/H6';
  import H7 from '@Component/Headings/H7';
  import ButtonView from '@Component/ButtonView';
  import H5 from '@Component/Headings/H5';
  import H1 from '@Component/Headings/H1';
  import LinearGradient from 'react-native-linear-gradient';
  import SpinnerLoader from '@Component/SmallLoader';
import useTierContainer from '../Tiers/TierContainer';
import Header from '@Component/AppHeader';
  
  const Faqs = () => {
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
        console.log(item,'itemitemitemitemitem');
      const isDetails = isOpenArray[index]; // Get the open/close state for this FAQ item
      console.log(item, 'This is item');
      const {label, desc} = item || {};
  
      let tierSvg;
  
      // Conditionally set the SVG component based on the tier
    //   if (Tier === 'Gold') {
    //     tierSvg = <AwardGoldSvg style={{height: 20, width: 20}} />;
    //   } else if (Tier === 'Platinum') {
    //     tierSvg = <AwardPlatinumSvg style={{height: 20, width: 20}} />;
    //   } else if (Tier === 'Silver') {
    //     tierSvg = <AwardSilverSvg style={{height: 20, width: 20}} />;
    //   } else if (Tier === 'Member') {
    //     tierSvg = <AwardSvg style={{height: 20, width: 20}} />;
    //   }
      return (
        <View
          style={{
            backgroundColor:Colors.FAMILY_BACKGROUND,
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
            >

              <H6
                text={label}
                style={{color: Colors.TEXT_COLOR, marginHorizontal: 2, borderBottomWidth: isDetails ? 1 : 0, paddingBottom: isDetails ? 10 : 0,borderColor:Colors.TEXT_COLOR}}
              />
            </View>
  
            <View>{isDetails ? <FaqsIcon2 /> : <FaqsIcon />}</View>
          </ButtonView>
          {isDetails && (
            <View>
              {desc && (
                <H6
                  style={{
                    ...Fonts.Medium(Fonts.Size.small, Colors.WHITE_THREE),
                    marginTop: Metrics.baseMargin,
                    lineHeight: 30,
                  }}
                  text={desc}
                />
              )}
            </View>
          )}
        </View>
      );
    };
    return (
      <>
   <Header title="General FAQs"/>
        {isLoading ? (
          <SpinnerLoader size={'large'} color={'#09203F'} />
        ) : (
          <ScrollView style={{backgroundColor:Colors.APP_BACKGROUND,flex:1}}> 
            <View
              style={{
                marginHorizontal: 20,
              }}>
              <View style={{marginTop: Metrics.doubleBaseMargin}}>
                <FlatListHandler
                  data={FaqsList}
                  keyExtractor={item => item?.id}
                  renderItem={renderItem}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </>
    );
  };
  
  export default Faqs;
  
  const styles = StyleSheet.create({});