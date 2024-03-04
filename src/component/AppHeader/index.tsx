import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import {Colors, Fonts} from '../../themes';
import Metrics from '../../utility/Metrics';
import ImageViewer from '../ImageView/Index';
import {useNavigation} from '@react-navigation/native';
import { BackIconSvg, LogoSvg } from '@Asset/logo';
import H7 from '@Component/Headings/H7';
import H6 from '@Component/Headings/H6';
import H4 from '@Component/Headings/H4';
import H3 from '@Component/Headings/H3';
// import Icon from '../Icon/Icon';

type IHeaderProps = {
  title?: string | null;
  actionButton?: JSX.Element;
  containerStyle?: object;
  backButton?:boolean;
  subText?:string | null
  desc?:string | null
};

export default function Header(props: IHeaderProps) {
  const navigation = useNavigation();

  const {title = 'App Heading', actionButton, containerStyle,backButton=true,subText,desc} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.innerContainer}>
        {
            backButton && 
            <>
            
            <Pressable
            style={styles.backWrapper}
            onPress={() => navigation.goBack()}>
            <BackIconSvg/>
          </Pressable>
             <Text style={styles.textStyle}>{title}</Text>
            </>
        }
        <View style={{flexDirection:'column',marginTop:Metrics.baseMargin}}>

        <H6 text={subText} style={{color:Colors.Colors.ICE_BLUE}}/>
        <H3 text={desc} style={{color:Colors.Colors.WHITE}}/>
        </View>
      </View>
      <View style={styles.iconStyle}>{actionButton}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Metrics.scale(25),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#0A182C'
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  backWrapper: {
    backgroundColor: Colors.Colors.TRANSPARENT,
    height: Metrics.scale(48),
    width: Metrics.scale(48),
    borderRadius: Metrics.scale(8),
    justifyContent: 'center',
    marginRight: Metrics.scale(10),
    alignItems: 'center',
  },
  textStyle: {
    ...Fonts.Bold(16, Colors.Colors.WHITE),
    textAlign: 'left',
    marginVertical: Metrics.verticalScale(5),
    letterSpacing: 0,
  },
  iconStyle: {
    flexDirection: 'row',
    marginTop:Metrics.doubleBaseMargin
  },
});
