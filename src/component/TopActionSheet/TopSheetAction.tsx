import {Profile} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import TopSheet from '@Component/TopSheetComponent/TopSheet';
import useHomeScreenContainer from '@Container/AppContainer/Home/HomeScreenContainer';
import useTopSheetContainer from '@Container/AppContainer/SupportChat/TopSheetContainer';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const TopSheetAction = ({
  show,
  hide,
  isModalVisible,
  wrapperStyle,
  enableClick = false,
  getSupportChat = () => {},
}: any) => {
 const  getAllUserDetails = useHomeScreenContainer();
 const { user } = getAllUserDetails || {}
  return (
    <>
      <ButtonView
        onPress={() => show()}
        style={[styles.profileButton, wrapperStyle]}
        enableClick={enableClick}>
          {user?.profilePictureUrl ? <Image 
        source={{uri: user?.profilePictureUrl}}
        /> : <Profile />}
      </ButtonView>
      <TopSheet
        isModalVisible={isModalVisible}
        hide={hide}
        getSupportChat={getSupportChat}
        profileImage={user?.profilePictureUrl || ""}
      />
    </>
  );
};

export default TopSheetAction;

const styles = StyleSheet.create({
  profileButton: {
    alignSelf: 'flex-end',
    marginTop: Metrics.verticalScale(36),
  },
  dotStyle: {
    position: 'absolute',
    right: 20,
    top: 8,
    zIndex: 9999,
    width: Metrics.scale(9),
    height: Metrics.verticalScale(11),
    backgroundColor: Colors.RED,
    borderRadius: 20,
  },
  driverImage:{
    width: Metrics.scale(60),
    height: Metrics.scale(60),
    backgroundColor: 'red',
    borderRadius: 60,
    marginLeft: Metrics.scale(10),
    overflow: 'hidden'
  }
});
