import H5 from '@Component/Headings/H5';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

type EmptyComponentProps = {
    title?: string
}

export default function EmptyComponent(props: EmptyComponentProps) {
    const { title = "No Data Found" } = props

    return (
        <H5 text={title} style={styles.text} />
    )
}

const styles = StyleSheet.create({
    text:{   
         ...Fonts.SemiBold(Fonts.Size.normal, Colors.Colors.DARK_BLACK),
        marginHorizontal: Metrics.scale(30),
        marginVertical: Metrics.scale(20)
        },
  });
  