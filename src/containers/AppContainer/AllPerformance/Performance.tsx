import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@Component/AppHeader'
import Metrics from '@Utility/Metrics'
import H2 from '@Component/Headings/H2'
import ButtonView from '@Component/ButtonView'
import H4 from '@Component/Headings/H4'
import { ArrowDown } from '@Asset/logo'
import H6 from '@Component/Headings/H6'
import H5 from '@Component/Headings/H5'
import { Colors , Fonts} from '@Theme/index'

const Performance = () => {
    return (
        <View style={{ backgroundColor: '#1A182c', flex: 1 }}>
            <Header backButton={false} desc={"Performance"} />
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: Metrics.scale(23) }}>
                <OverAllPerformance />
                <PlayerStatistics />
            </ScrollView>
        </View>
    )
}

const OverAllPerformance = () => {
    return (
        <View style={styles.overAllPerformanceWrapper}>
            <View style={styles.overAllPerformanceInnerWrapper}>
                <H2 text='Over all performance' style={styles.overAllPerformanceText} />
                <ButtonView style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <H4 text='All Times' style={styles.overAllPerformanceBtnText}/>
                    <ArrowDown />
                </ButtonView>
            </View>
            <View style={styles.overAllPerformanceBoxWrapper}>
                    <View style={styles.overAllPerformanceInnersingleBox}>
                        <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel}/>
                        <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc}/>
                    </View>
                    <View style={styles.overAllPerformanceInnersingleBox}>
                        <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel}/>
                        <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc}/>
                    </View>
                    <View style={styles.overAllPerformanceInnersingleBox}>
                        <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel}/>
                        <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc}/>
                    </View>
                    <View style={styles.overAllPerformanceInnersingleBox}>
                        <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel}/>
                        <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc}/>
                    </View>
                    <View style={styles.overAllPerformanceInnersingleBox}>
                        <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel}/>
                        <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc}/>
                    </View>
            </View>
        </View>
    )
}

const PlayerStatistics = () => {
    return (
        <View style={styles.PlayerStatisticsWrapper}>
               <H2 text='Player statistics' style={styles.overAllPerformanceText} />
        </View>
    )
}

export default Performance

const styles = StyleSheet.create({
    overAllPerformanceWrapper: {
        marginBottom: Metrics.scale(20)
    },
    overAllPerformanceInnerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    overAllPerformanceText: {
        ...Fonts.SemiBold(Fonts.Size.xSmall, "#98D8FA"),
    },
    overAllPerformanceBtnText:{
        ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
        textDecorationLine: 'underline',
        marginRight: Metrics.scale(5)
    },
    overAllPerformanceBoxWrapper:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        backgroundColor: '#0A182C',
        paddingVertical: Metrics.scale(13),
        borderRadius: 10,
        marginTop: Metrics.scale(13)
    },
    overAllPerformanceInnersingleBox:{
    },
    overAllPerformanceInnersingleBoxLabel:{
        ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.DARK_BLUE),
        marginBottom: Metrics.scale(11)
    },
    overAllPerformanceInnersingleBoxDesc:{
        ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.WHITE),
    }
})