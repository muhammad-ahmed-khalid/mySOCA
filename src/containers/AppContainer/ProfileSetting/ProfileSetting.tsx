import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '@Component/AppHeader';
import H2 from '@Component/Headings/H2';
import Metrics from '@Utility/Metrics';
import {Colors, Fonts} from '@Theme/index';
import useProfileSettingContainer from './ProfileSettingContainer';
import FlatListHandler from '@Component/FlatlistHandler';
import RenderMenuItem from '@Component/RenderMenuItem/RenderMenuItem';
import ButtonView from '@Component/ButtonView';
import H4 from '@Component/Headings/H4';
import { NotificationIconNew } from '@Asset/logo';


const ProfileSetting = () => {
  const { menuProfileSettingList } = useProfileSettingContainer()
  return (
    <View style={{backgroundColor: '#1A182c', flex: 1}}>
      <Header title="Profile Setting" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: Metrics.scale(23),
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <GeneralSetting />
          <ReachOutUs menuProfileSettingList={menuProfileSettingList}/>
        </View>
        <PrivicyPolicy />
      </ScrollView>
    </View>
  );
};

const GeneralSetting = () => {
  const [isToggle, setIsToggle] = React.useState(false);
  return (
    <View style={{marginBottom: Metrics.scale(31)}}>
      <H2 text="General" style={styles.totalGamePlayedTitle} />
      <RenderMenuItem
        icon={<NotificationIconNew />}
        text={"Notifications"}
        action={() => {
          console.log(isToggle, "isToggle")
          setIsToggle(!isToggle)
        }}
        actionType={"showToggle"}
        allowIncomingRequests={isToggle}
      />
    </View>
  );
};

const ReachOutUs = ({menuProfileSettingList}:any) => {
  const renderItem = ({item, index}: any) => {
    // Define the action based on the item type
    // const action = item.id === 'language' ? languageModalRef.current?.show : item?.action;
    
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
        isRating={item?.isRating}
        driverRating={item?.rating}
        allowIncomingRequests={item?.allowIncomingRequests}
      />
    );
  };
  return (
    <View>
      <H2 text="Reach Out to Us" style={styles.totalGamePlayedTitle} />
      <View style={styles.flatListWrapper}>
          <FlatListHandler
            data={menuProfileSettingList}
            renderItem={renderItem} 
            keyExtractor={() => Math.random() * 100}
            />
        </View>
    </View>
  );
};

const PrivicyPolicy = () => {
  return(
    <View style={styles.privicyPolicyWrapper}>
      <ButtonView>
        <H4 text='Privacy Policy' style={styles.privicyPolicyText}/>
      </ButtonView>
      <ButtonView>
        <H4 text='Terms of Services' style={styles.privicyPolicyText}/>
      </ButtonView>
    </View>
  )
}

export default ProfileSetting;

const styles = StyleSheet.create({
  totalGamePlayedTitle: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
    marginBottom: Metrics.scale(20)
  },
  flatListWrapper: {
    paddingHorizontal: Metrics.scale(3),
    marginBottom: Metrics.verticalScale(0),
  },
  privicyPolicyWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  privicyPolicyText:{
    ...Fonts.SemiBold(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLUE),
    borderBottomWidth: 1,
    borderBottomColor: Colors.Colors.DARK_BLUE
  }
});
