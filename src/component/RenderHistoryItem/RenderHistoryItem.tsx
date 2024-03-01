import {ChevronSvg, RightArrowSmall} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IRenderMenuItem {
  icon?: any;
  text?: string;
  isVerified?: boolean;
  action?: Function;
  optionalText?: string;
  actionType?: string;
  emailVerification?: any;
  labelStyle?: any;
  textStyle?: any;
  iconWrapper?: any;
  activeOpactity?: any;
}

const RenderHistoryItem = ({
  icon,
  text,
  action,
  optionalText,
  isVerified,
  emailVerification,
  actionType,
  labelStyle,
  textStyle,
  iconWrapper,
  activeOpactity = 0.7,
}: IRenderMenuItem) => {
  const getView = (actionType: string | undefined) => {
    switch (actionType) {
      case 'showBtn':
        return emailVerification && isVerified ? (
          <View style={styles.emailVerificationWrapper}>
            <H6 style={styles.emailVerificationText} text={'✓'} />
          </View>
        ) : (
          <ButtonView
            onPress={() => console.log('Verify')}
            style={styles.emailVerificationWrapper}>
            <H6 style={styles.emailVerificationText} text={'verify'} />
          </ButtonView>
        );
      case 'Chevron':
        return (
          <View>
            <ChevronSvg />
          </View>
        );
      case 'ArrowRight':
        return (
          <View>
            <RightArrowSmall />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View>
      <ButtonView
        style={styles.root}
        onPress={() => action()}
        activeOpacity={activeOpactity}>
        <View style={styles.container}>
          <View style={[styles.iconWrapper, iconWrapper]}>{icon}</View>
          <View style={styles.textWrapper}>
            <H6 style={[styles.mainText, labelStyle]} text={text} />
            {optionalText && (
              <H6
                style={[styles.optionalText, textStyle]}
                text={optionalText}
              />
            )}
          </View>
        </View>
        <View style={styles.arrowStyle}>{getView(actionType)}</View>
      </ButtonView>
    </View>
  );
};

export default RenderHistoryItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.scale(5),
    marginBottom: Metrics.scale(13),
  },
  textWrapper: {
    marginLeft: Metrics.scale(20),
  },
  mainText: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
  },
  optionalText: {
    ...Fonts.Regular(Fonts.Size.xxSmall, Colors.Colors.DARK_BLACK),
  },
  iconWrapper: {
    width: Metrics.scale(30),
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emailVerificationWrapper: {
    backgroundColor: Colors.Colors.LIGHT_GREEN,
    paddingVertical: Metrics.verticalScale(5),
    paddingHorizontal: Metrics.verticalScale(10),
    borderRadius: Metrics.verticalScale(100),
  },
  emailVerificationText: {
    ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.LIGHT_BLACK),
  },
  arrowStyle: {marginRight: Metrics.baseMargin},
});
