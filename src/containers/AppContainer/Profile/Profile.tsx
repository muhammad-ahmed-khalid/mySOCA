import { Logout } from '@Asset/logo';
import ButtonUnderLine from '@Component/ButtonUnderLine/ButtonUnderLine';
import CustomModal from '@Component/CustomModal/CustomModal';
import FlatListHandler from '@Component/FlatlistHandler';
import H1 from '@Component/Headings/H1';
import RenderMenuItem from '@Component/RenderMenuItem/RenderMenuItem';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import useProfileContainer from './ProfileContainer';
interface ICommonComponentsType {
  menuProfileSettingList?: any;
  menuItemsListPreferences?: any;
  QualityReportFinal?: any;
}

const Profile = () => {

  return (
    <>
      <View style={{ minHeight: '100%' }}>
        <FlatListHandler
          ListHeaderComponent={RenderFlatlistHeader}
          ListFooterComponent={RenderFlatlistFooter}
        />
      </View>
    </>
  );
};

const DriverPortal = ({ menuProfileSettingList }: ICommonComponentsType) => {
  return (
    <>
      <H1 style={styles.primaryHeading} text={'driverPortal'} />
      <View>
        <View style={styles.flatListWrapper}>
          <FlatListHandler
            data={menuProfileSettingList}
            renderItem={renderItem}
          />
        </View>
      </View>
    </>
  );
};



const renderItem = ({ item, index }: any) => {
  return (
    <RenderMenuItem
      key={index}
      icon={item?.icon}
      text={item?.text}
      action={item?.action}
      optionalText={item?.optionalText}
      isVerified={item?.isVerified}
      emailVerification={item?.emailVerification}
      actionType={item?.actionType}
    />
  );
};
const RenderFlatlistHeader = () => {
  const {
    menuProfileSettingList,
  } = useProfileContainer();
  return (
    <View style={styles.innerWrapper}>
      <View style={styles.mainWrapper}>
        <DriverPortal menuProfileSettingList={menuProfileSettingList} />
      </View>

    </View>
  );
};

const RenderFlatlistFooter = () => {
  const {
    setisDeleteAccountVisible,
    changeDeleteModalVisible,
    isDeleteAccountVisible,
  } = useProfileContainer();
  return (
    <>
      <View style={[styles.mainWrapper, styles.footerMainWrapper]}>
        <View style={styles.buttonsWrapper}>
          <ButtonUnderLine
            wrapperStyle={styles.signOutWrapperStyle}
            btnText={'signout'}
            icon={<Logout />}
            leftArrow={true}
            btnStyle={styles.signoutBtnStyle}
            action={() => setisDeleteAccountVisible(true)}
          />
        </View>
      </View>
      <CustomModal
        changeDeleteModalVisible={changeDeleteModalVisible}
        setisDeleteAccountVisible={setisDeleteAccountVisible}
        isDeleteAccountVisible={isDeleteAccountVisible}
        title={'Sign Out'}
        desc={'Do want to sign out?'}
      />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: Metrics.scale(25),
  },
  footerMainWrapper: {
    paddingBottom: Metrics.scale(90),
  },
  innerWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flatListWrapper: {
    paddingHorizontal: Metrics.scale(3),
    marginBottom: Metrics.verticalScale(0),
  },
  buttonsWrapper: {
    paddingHorizontal: Metrics.scale(8),
    marginBottom: Metrics.verticalScale(40),
  },
  signOutWrapperStyle: {
    justifyContent: 'flex-start',
  },
  primaryHeading: {
    marginBottom: Metrics.verticalScale(5),
    ...Fonts.SemiBold(Fonts.Size.xxLarge, Colors.Colors.DARK_BLACK),
  },
  secondaryHeading: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.Colors.DARK_BLACK),
    marginBottom: Metrics.verticalScale(24),
    marginTop: Metrics.verticalScale(24),
  },

  signoutBtnStyle: {
    textDecorationLine: 'none',
    marginLeft: Metrics.scale(20),
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.RED),
  },
});
