import H1 from '@Component/Headings/H1';
import H7 from '@Component/Headings/H7';

import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';

interface IAuthDefaultHeading {
  title?: string;
  desc?: string;
  isOtp?: boolean;
}

const AuthDefaultHeading = ({
  title,
  desc,
  isOtp = false,
}: IAuthDefaultHeading) => {
  const {t} = useTranslation(['common']);
  return (
    <View style={styles.root}>
      <H1 style={styles.textCenter} text={t(title)} />
      {desc && (
        <H7
          style={[styles.desc, isOtp ? {width: Metrics.scale(180)} : null]}
          text={desc}
        />
      )}
    </View>
  );
};

export default AuthDefaultHeading;

const styles = StyleSheet.create({
  root: {
    marginTop: Metrics.verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  textCenter: {
    textAlign: 'center',
    marginBottom: Metrics.verticalScale(20),
    ...Fonts.SemiBold(Fonts.Size.xxLarge, Colors.Colors.DARK_BLACK),
    marginHorizontal: 20,
  },
  desc: {
    textAlign: 'center',
    color: Colors.Colors.GREY,
    lineHeight: Metrics.verticalScale(20),
  },
});
