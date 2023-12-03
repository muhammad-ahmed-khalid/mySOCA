import H1 from '@Component/Headings/H1';
import TopTabs from '@Component/Tabs/TopTabs';
import {performanceTabs} from '@Constants/dummyData';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Metrics from '@Utility/Metrics';
import { Colors } from '@Theme/Colors';

export default function Performance({route}) {
    console.log(route,'routerouteroute');
    
  return (
            <LinearGradient
        colors={['#09203F', '#537895']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          backgroundColor: '#374051',
        //   alignItems: 'center',
          // paddingBottom: Metrics.scale(20),
          paddingTop: Metrics.verticalScale(50),
          height: '100%',
        }}>
      <H1 text={'Performance'} style={styles.text} />
      <TopTabs component={performanceTabs} PlayerID={route}/>

        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
  },
  text: {marginHorizontal: 25,color:Colors.WHITE,marginBottom:Metrics.baseMargin},
});
