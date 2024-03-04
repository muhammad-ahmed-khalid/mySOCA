import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@Component/AppHeader'
import { ImageBackgroundPNG } from '@Asset/logo'
import Metrics from '@Utility/Metrics'
import { Colors } from '@Theme/Colors'
import H5 from '@Component/Headings/H5'
import ButtonView from '@Component/ButtonView'
import H6 from '@Component/Headings/H6'
import H7 from '@Component/Headings/H7'
import FlatListHandler from '@Component/FlatlistHandler'
import H1 from '@Component/Headings/H1'

const Announcement = () => {
  return (
    <View style={{backgroundColor:Colors.APP_BACKGROUND,flex:1}}>
        <Header title="Announcements"/>
        <ScrollView style={{marginHorizontal:Metrics.baseMargin}} showsVerticalScrollIndicator={false}>

        <H7 text="23 Feb, 2024" style={{color:Colors.ICE_BLUE,marginTop:Metrics.baseMargin}}/>
            <AnnouncementComp/>
          <H7 text="24 Feb, 2024" style={{color:Colors.ICE_BLUE,marginTop:Metrics.baseMargin}}/>
          <AnnouncementComp/>
          <AnnouncementComp/>
          <H7 text="26 Feb, 2024" style={{color:Colors.ICE_BLUE,marginTop:Metrics.baseMargin}}/>
          <AnnouncementComp/>
          <AnnouncementComp/>

          </ScrollView>
    </View>
  )
}

const AnnouncementComp=()=>{
    return(
        <ImageBackground
        source={ImageBackgroundPNG}
        resizeMode="cover"
        style={{height: 100, marginTop: Metrics.baseMargin,padding:Metrics.baseMargin}}>
       <View style={{flexDirection:'row'}}>
       <H5
        style={{color: Colors.WHITE}}
          text="Evolution Championship
(Spring 2024)"
        />
        <ButtonView style={{backgroundColor:Colors.ICE_BLUE,paddingHorizontal:Metrics.smallMargin,paddingVertical:Metrics.baseMargin,borderRadius:10}}>
        <H6
        style={{color: Colors.BUTTON_LIGHT_GREY}}
          text="Register Now"
        />
        </ButtonView>
       </View>

         <View style={{flexDirection: 'row',marginTop:Metrics.baseMargin}}>
              <H7
                text="Last Date of Registration: "
                style={{color: Colors.ICE_BLUE,}}
              />
              <H7 text="20 Feb, 2024" style={{color: Colors.WHITE,}} />
            </View>
      </ImageBackground>
    )
}

export default Announcement

const styles = StyleSheet.create({})