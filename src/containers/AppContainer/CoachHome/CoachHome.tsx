import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTabs from '@Component/Tabs/TopTabs'
import { coachTabs } from '@Constants/dummyData'
import Header from '@Component/AppHeader'
import { Colors } from '@Theme/index'

const CoachHome = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.Colors.APP_BACKGROUND}}>
         <Header
        title="Home"
        backButton={false}
        subText={'Welcome Back'}
        desc={"Peter Parker"}
      />
         <TopTabs component={coachTabs} />
    </View>
  )
}

export default CoachHome

const styles = StyleSheet.create({})