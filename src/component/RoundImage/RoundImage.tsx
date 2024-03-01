import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface IRoundImage {
  wrapperStyle?: any;
  imgUrl?: any;
  imgStyle?: any;
}

const RoundImage = ({wrapperStyle, imgUrl, imgStyle}: IRoundImage) => {
  return (
    <View style={[styles.driverImage, wrapperStyle]}>
      <Image
        source={
          imgUrl && imgUrl != undefined
            ? {uri: imgUrl}
            : {
                uri: 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png',
              }
        }
        style={styles.imageStyle}
      />
    </View>
  );
};

export default RoundImage;

const styles = StyleSheet.create({
  driverImage: {
    borderRadius: Metrics.scale(62),
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.scale(62),
    height: Metrics.scale(62),
    borderWidth: 5,
    borderColor: Colors.Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  imageStyle: {
    width: Metrics.scale(57),
    borderRadius: Metrics.scale(57),
    height: Metrics.scale(57),
  },
});
