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
import { Colors, Fonts } from '@Theme/index'

const Performance = () => {
    return (
        <View style={{ backgroundColor: Colors.Colors.APP_BACKGROUND, flex: 1 }}>
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
                    <H4 text='All Times' style={styles.overAllPerformanceBtnText} />
                    <ArrowDown />
                </ButtonView>
            </View>
            <View style={styles.overAllPerformanceBoxWrapper}>
                <View style={styles.overAllPerformanceInnersingleBox}>
                    <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel} />
                    <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc} />
                </View>
                <View style={styles.overAllPerformanceInnersingleBox}>
                    <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel} />
                    <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc} />
                </View>
                <View style={styles.overAllPerformanceInnersingleBox}>
                    <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel} />
                    <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc} />
                </View>
                <View style={styles.overAllPerformanceInnersingleBox}>
                    <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel} />
                    <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc} />
                </View>
                <View style={styles.overAllPerformanceInnersingleBox}>
                    <H2 text='Mat' style={styles.overAllPerformanceInnersingleBoxLabel} />
                    <H5 text='000' style={styles.overAllPerformanceInnersingleBoxDesc} />
                </View>
            </View>
        </View>
    )
}

const PlayerStatistics = () => {
    const tableData = [
        ['', 'F50', 'F40', 'T30', 'T20', 'Others'],
        ['Runs', '000', '000', '000', '000', '000'],
        ['Avg', '000', '000', '000', '000', '000'],
        ['HS', '000', '000', '000', '000', '000'],
        ['100’s', '000', '000', '000', '000', '000'],
        ['50’s', '000', '000', '000', '000', '000']
    ];

    const tableWktsData = [
        ['Wkts', '000', '000', '000', '000', '000'],
        ['Avg', '000', '000', '000', '000', '000'],
        ['4W', '000', '000', '000', '000', '000'],
        ['5W', '000', '000', '000', '000', '000'],
        ['Hatrick', '000', '000', '000', '000', '000']
    ];

    const tableCatchesData = [
        ['Catches', '000', '000', '000', '000', '000'],
        ['WK Dism', '000', '000', '000', '000', '000'],
        ['ROs', '000', '000', '000', '000', '000'],
    ];

    return (
        <View style={styles.PlayerStatisticsWrapper}>
            <H2 text='Player statistics' style={styles.overAllPerformanceText} />
            <View style={styles.container}>
                {tableData.map((rowData, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {rowData.map((cellData, cellIndex) => (
                            <View key={cellIndex} style={[styles.cell, cellIndex === 0 && styles.emptyCell]}>
                                <Text style={[styles.checkingText, cellIndex === 0 && styles.firstCellLabel]}>{cellData}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
            <View style={styles.container}>
                {tableWktsData.map((rowData, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {rowData.map((cellData, cellIndex) => (
                            <View key={cellIndex} style={[styles.cell, cellIndex === 0 && styles.emptyCell]}>
                                <Text style={[styles.checkingText, cellIndex === 0 && styles.firstCellLabel]}>{cellData}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>

            <View style={[styles.container, {borderBottomWidth: 0}]}>
                {tableCatchesData.map((rowData, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {rowData.map((cellData, cellIndex) => (
                            <View key={cellIndex} style={[styles.cell, cellIndex === 0 && styles.emptyCell]}>
                                <Text style={[styles.checkingText, cellIndex === 0 && styles.firstCellLabel]}>{cellData}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </View>

    )
}



export default Performance

const styles = StyleSheet.create({
    overAllPerformanceWrapper: {
        marginBottom: Metrics.scale(20)
    },
    overAllPerformanceInnerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    overAllPerformanceText: {
        ...Fonts.SemiBold(Fonts.Size.xSmall, "#98D8FA"),
    },
    overAllPerformanceBtnText: {
        ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
        textDecorationLine: 'underline',
        marginRight: Metrics.scale(5)
    },
    overAllPerformanceBoxWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: '#0A182C',
        paddingVertical: Metrics.scale(13),
        borderRadius: 10,
        marginTop: Metrics.scale(13)
    },
    overAllPerformanceInnersingleBox: {
    },
    overAllPerformanceInnersingleBoxLabel: {
        ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.DARK_BLUE),
        marginBottom: Metrics.scale(11)
    },
    overAllPerformanceInnersingleBoxDesc: {
        ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.WHITE),
    },
    checkingText: {
        ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.WHITE),
    },
    firstCellLabel: {
        ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.DARK_BLUE),
        flex: 1,
    },

    container: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#003D57"
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyCell: {
        flex: 0.5, // Adjust width for empty cell
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
})