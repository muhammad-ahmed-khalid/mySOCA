import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Metrics from '@Utility/Metrics';
import H2 from '@Component/Headings/H2';
import H1 from '@Component/Headings/H1';
import {ChevronSvg, LogoutSvg, PerformanceSvg} from '@Asset/logo';
import H6 from '@Component/Headings/H6';
import H5 from '@Component/Headings/H5';
import ButtonView from '@Component/ButtonView';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import React, {useContext} from 'react';
import CustomFlatListSeperator from '@Component/CustomFlatListSeperator/CustomFlatListSeperator';
import CustomModal from '@Component/CustomModal/CustomModal';
import {Colors} from '@Theme/Colors';

const AccountScreen = () => {
  const {handleLogoutUser} = useContext(loginContext) as LoginContext;
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);

  const changeDeleteModalVisible = isDelete => {
    if (isDelete == true) {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
      handleLogoutUser();
    } else {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(50),
          }}>
          <H1 text="Profile" />

          <ButtonView
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Metrics.doubleBaseMargin,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <PerformanceSvg />
              <H5
                text="Performance"
                style={{marginHorizontal: Metrics.baseMargin}}
              />
            </View>
            <ChevronSvg />
          </ButtonView>

          <View style={styles.bottomLine} />
          <ButtonView
            onPress={() => setIsDeleteAccountVisible(true)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Metrics.baseMargin,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <LogoutSvg />
              <H5
                text="Logout"
                style={{marginHorizontal: Metrics.baseMargin}}
              />
            </View>
          </ButtonView>
          <CustomModal
            changeDeleteModalVisible={changeDeleteModalVisible}
            setIsDeleteAccountVisible={setIsDeleteAccountVisible}
            isDeleteAccountVisible={isDeleteAccountVisible}
            title={'Logout'}
            desc={'Are you sure you want to logout?'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  bottomLine: {
    width: '100%',
    height: 1,
    // position: 'absolute',
    backgroundColor: Colors.GREY,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    // bottom: 0,
    // marginRight: 'auto',
  },
});
