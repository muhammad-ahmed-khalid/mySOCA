import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import usePlayerSelectionContainer from './PlayerSelectionContainer';
import H2 from '@Component/Headings/H2';
import Metrics from '@Utility/Metrics';
import H1 from '@Component/Headings/H1';
import FlatListHandler from '@Component/FlatlistHandler';
import LinearGradient from 'react-native-linear-gradient';
import H4 from '@Component/Headings/H4';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import ButtonView from '@Component/ButtonView';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {LogoutSvg} from '@Asset/logo';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {getItem, setItem} from '@Service/storageService';

const PlayerSelection = () => {
  const parentId = getItem(STORAGE_KEYS.PARENTID);
  console.log(parentId, 'parentIdparentIdparentId');

  const {selectionPlayerData} = usePlayerSelectionContainer(parentId);
  console.log(
    selectionPlayerData,
    'selectionPlayerDataselectionPlayerDataselectionPlayerData',
  );

  const renderItem = ({item}) => {
    const {Name, PlayerID} = item || {};

    return (
      <ButtonView
        onPress={() =>
          navigate(NavigationRoutes.APP_STACK.BOTTOM_TABS, {item})
        }>
        <LinearGradient
          colors={['#868F96', '#596164']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradientContainers}>
          <H4
            text="Player Name"
            style={{
              ...Fonts.Bold(Fonts.Size.medium, Colors.WHITE),
              //   marginTop: Metrics.baseMargin,
            }}
          />
          <H4
            text={Name}
            style={{
              ...Fonts.Medium(Fonts.Size.medium, Colors.WHITE),
              marginTop: Metrics.baseMargin,
            }}
          />
        </LinearGradient>
      </ButtonView>
    );
  };

  return (
    <LinearGradient
      colors={['#09203F', '#537895']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{flex: 1, paddingVertical: Metrics.doubleBaseMargin}}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: Metrics.verticalScale(40),
        }}>
        <H2 text="Please select a profile" style={{color: Colors.WHITE}} />
        <FlatListHandler
          data={selectionPlayerData?.data}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
        />
      </View>
    </LinearGradient>
  );
};

export default PlayerSelection;

const styles = StyleSheet.create({
  gradientContainers: {
    padding: 20,
    // backgroundColor: '#868F96',
    marginTop: Metrics.verticalScale(30),
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: Metrics.scale(60),
  },
});
