import { CancelSmallIcon, FaqsIcon, GroupSvg, PresentIcon, PrivateSvg } from '@Asset/logo'
import ButtonView from '@Component/ButtonView'
import FlatListHandler from '@Component/FlatlistHandler'
import H2 from '@Component/Headings/H2'
import H3 from '@Component/Headings/H3'
import H5 from '@Component/Headings/H5'
import H6 from '@Component/Headings/H6'
import H7 from '@Component/Headings/H7'
import ProgressCircleWithSVG from '@Component/PorgressCircle/ProgressCircleWithSvg'
import { COACH_PLAYER_TODAY_ATTENDANCE } from '@Constants/constants'
import { PLAYER_ATTENDANCE_SHEET, SessionData } from '@Constants/dummyData'
import { Colors } from '@Theme/Colors'
import Fonts from '@Theme/Fonts'
import Metrics from '@Utility/Metrics'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const CoachSummary = () => {
    return (
        <View style={{ backgroundColor: Colors.APP_BACKGROUND, flex: 1 }}>
            
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 15, }}>
                <TodayPlayerAttendance />
            </ScrollView>
        </View>
    )
}

const TodayPlayerAttendance = () => {



    const renderItem = ({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.Date}</Text>
          <Text style={styles.cell}>{item.Session}</Text>
          <Text style={styles.cell}>{item.Duration}</Text>
         <ButtonView style={styles.btnCell}>
                <H7 text="View" style={{alignSelf:'center',color:Colors.WHITE,paddingVertical:5,paddingHorizontal:-5}}/>
         </ButtonView>
        </View>
      );

    return (
        <View style={styles.todayPlayerAttendanceWrapper}>
            <H2 text="Coaching Summary" style={styles.todayPlayerAttendancTitle} />
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginBottom:-50}}>
            <View style={{paddingHorizontal:Metrics.baseMargin,height:"60%",width:'48%',flexDirection:"row",alignItems:'center',borderWidth:2,borderColor:Colors.DARK_BLUE,borderRadius:15}}>
                <View>
                <H3 text="46" style={{color:Colors.WHITE}}/>
             <H7 text="Groups" style={{color:Colors.DARK_BLUE}}/>   
                </View>
                <View>
                <ProgressCircleWithSVG progress={0.6} svg={<GroupSvg/>}/>

                </View>
                
            </View>
            <View style={{paddingHorizontal:Metrics.baseMargin,height:"60%",width:'48%',flexDirection:"row",alignItems:'center',borderWidth:2,borderColor:Colors.DARK_BLUE,borderRadius:15}}>
                <View>
                <H3 text="74" style={{color:Colors.WHITE}}/>
             <H7 text="Private" style={{color:Colors.DARK_BLUE}}/>   
                </View>
                <View>
                <ProgressCircleWithSVG progress={0.8} svg={<PrivateSvg/>}/>

                </View>
                
            </View>
            </View>
    
            <ButtonView style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:Colors.DARK_BLUE,padding:12,borderRadius:20}} >
                <H6 text="06 Feb, Tournament, Team, Game"  style={{color:Colors.WHITE}}/>
                <FaqsIcon/>
            </ButtonView>
            <H2 text="Coaching Sessions Details" style={styles.coachingTxt} />
            <View style={styles.playerWrapper}>
                <FlatListHandler
                    data={SessionData}
                    renderItem={renderItem}
                    ListHeaderComponent={() => (
                        <View style={styles.row}>
                          <Text style={styles.heading}>Date</Text>
                          <Text style={styles.heading}>Session</Text>
                          <Text style={styles.heading}>Duration</Text>
                          <Text style={styles.heading}>Notes</Text>
                        </View>
                      )}
                />
            </View>
        </View>
    );
};


export default CoachSummary

const styles = StyleSheet.create({
    todayPlayerAttendanceWrapper: {
        marginTop: Metrics.scale(28),
        marginBottom: Metrics.scale(25),
    },
    todayPlayerAttendancTitle: {
        ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
        marginBottom: Metrics.scale(13),
    },
    coachingTxt: {
        ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
        marginTop: Metrics.doubleBaseMargin,
        marginBottom:Metrics.verticalScale(15)
    },
    playerWrapper: {
        backgroundColor: Colors.FAMILY_BACKGROUND,
        paddingHorizontal: Metrics.scale(13),
        paddingVertical: Metrics.scale(16),
        borderRadius: 16,
    },
    playerName: {
        ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
        width: '47%',
    },
    playerAttendanceRenderWrapper: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: Metrics.scale(22),
        alignItems: 'center'
    },
    presentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    presentText: {
        ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.DARK_BLUE),
        marginLeft: Metrics.scale(5)
    },
    playerAttendanceActionWrapper: {
        width: '53%',
    },
    actionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.DARK_BLUE,
        paddingHorizontal: Metrics.scale(10),
        paddingVertical: Metrics.scale(5),
        borderRadius: 100
    },
    actionBtnText: {
        ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.WHITE),
        marginLeft: Metrics.scale(5)
    },
    actionBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
   
    row: {
        flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderColor: '#ccc',
        paddingVertical: 10,
      },
      heading: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color:Colors.DARK_BLUE
      },
      cell: {
        flex: 1,
        textAlign: 'center',
        color:Colors.WHITE,
        height:'150%'
      },
      btnCell: {
        flex: 1,
        marginTop:-5,
        textAlign: 'center',
        color:Colors.WHITE,
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.DARK_BLUE,
    },
})