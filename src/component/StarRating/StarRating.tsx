import {EmptyStar, FilledStar} from '@Asset/logo';
import H3 from '@Component/Headings/H3';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import {SvgProps} from 'react-native-svg';

interface IRatingComponent {
  enabled?: boolean;
  rating?: number;
  handleRatingChange?: Function;
  customerName?: string;
}

const RatingComponent = ({
  enabled = false,
  rating,
  handleRatingChange,
  customerName,
}: IRatingComponent) => {
  const StarEmpty = (props: SvgProps) => <EmptyStar {...props} />;

  const StarHalf = (props: SvgProps) => <FilledStar {...props} />;

  const StarFull = (props: SvgProps) => <FilledStar {...props} />;

  const StarIcon = ({color, size, type}: StarIconProps) => {
    if (type === 'empty') {
      return (
        <StarEmpty
          fill={color}
          width={Metrics.scale(40)}
          height={Metrics.scale(42)}
        />
      );
    }

    if (type === 'half') {
      return (
        <StarHalf
          fill={color}
          width={Metrics.scale(40)}
          height={Metrics.scale(42)}
        />
      );
    }

    return (
      <StarFull
        fill={color}
        width={Metrics.scale(40)}
        height={Metrics.scale(42)}
      />
    );
  };
  return (
    <View style={styles.ratingMainWrapper}>
      <H3 style={styles.rateTripText} text={customerName} />
      <View style={styles.ratingWrapper}>
        <StarRating
          enableHalfStar={false}
          rating={rating}
          onChange={handleRatingChange}
          StarIconComponent={StarIcon}
          style={styles.wrapper}
          color="tomato"
          starStyle={styles.stars}
          animationConfig={{scale: 1}}
        />
      </View>
    </View>
  );
};
export default React.memo(RatingComponent);

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stars: {
    marginHorizontal: 14,
  },
  ratingMainWrapper: {
    backgroundColor: Colors.Colors.WHITE,
    borderRadius: Metrics.scale(25),
    marginBottom: Metrics.scale(20),
    paddingHorizontal: Metrics.scale(25),
    shadowColor: Colors.Colors.BLACK,
    paddingTop: Metrics.scale(20),
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
  ratingWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.verticalScale(20),
    marginBottom: Metrics.verticalScale(30),
  },
  rateTripText: {
    ...Fonts.Bold(Fonts.Size.large, Colors.Colors.DARK_BLACK),
  },
});
