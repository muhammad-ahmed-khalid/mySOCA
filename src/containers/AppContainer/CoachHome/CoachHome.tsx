import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTabs from '@Component/Tabs/TopTabs'
import { coachTabs } from '@Constants/dummyData'
import Header from '@Component/AppHeader'
import { Colors } from '@Theme/index'
import useCoachContainer from './CoachContainer'

const CoachHome = ({route}) => {
  const {parentId}=route?.params|| {}
  const {coachData,coachBatch}=useCoachContainer(parentId)
  const coachParam=coachBatch?.data[0]
  const {Coach_name}=coachBatch?.data[0]||{}
  
  return (
    <View style={{flex: 1, backgroundColor: Colors.Colors.APP_BACKGROUND}}>
         <Header
        title="Home"
        backButton={false}
        subText={'Welcome Back'}
        desc={Coach_name}
      />
         <TopTabs component={coachTabs} coachBatch={coachParam}/>
    </View>
  )
}

export default CoachHome

const styles = StyleSheet.create({})