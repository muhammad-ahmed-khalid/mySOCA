import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import FlatListHandler from '../FlatlistHandler';

interface ICustomModal {
  data?: any;
  cbValue?: any;
  setisLanguageModalVisible: Function;
  isLanguageModalVisible: boolean;
  item?: any;
  title?: String;
  selectedLangValue?: any;
  setSelectedLanguageValue?: any;
  handleSelectedLanguage?: any;
}

interface IRenderItem {
  item?: any;
  index?: number;
}

const SimpleModal = ({
  setisLanguageModalVisible,
  isLanguageModalVisible,
  data,
  cbValue,
  selectedLangValue,
  title = 'SelectLanguage',
  handleSelectedLanguage,
}: ICustomModal) => {
  const closeModal = () => {
    setisLanguageModalVisible(false);
  };

  const [selectedRadio, setSelectedRadio] = useState(selectedLangValue?.id);

  React.useEffect(() => {
    if (selectedLangValue?.id) {
      setSelectedRadio(selectedLangValue?.id);
    }
  }, [selectedLangValue?.id]);

  const handlePressSelection = (item: any) => {
    cbValue && cbValue(item);
    handleSelectedLanguage && handleSelectedLanguage(item?.id);
    setSelectedRadio(item?.id);
    closeModal();
  };

  const renderItem = ({item, index}: IRenderItem) => {
    return (
      <View style={styles.main}>
        <ButtonView onPress={() => handlePressSelection(item)}>
          <View style={styles.radioWrapper}>
            <View
              style={[
                styles.radio,
                selectedRadio == item?.id
                  ? {borderColor: Colors.BLUE_LINK}
                  : {borderColor: Colors.MEDIUM_GRAY},
              ]}>
              {selectedRadio == item?.id ? (
                <View style={styles.radioBg} />
              ) : null}
            </View>
            <H4 text={item.name} style={styles.textStyle} />
          </View>
        </ButtonView>
      </View>
    );
  };

  return (
    <ReactNativeModal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.4}
      onBackdropPress={closeModal}
      animationInTiming={50}
      animationOutTiming={200}
      isVisible={isLanguageModalVisible}
      backdropTransitionOutTiming={0}>
      <View style={styles.modal}>
        <H2 style={styles.title} text={title} />
        <FlatListHandler
          data={data}
          renderItem={renderItem}
          style={[
            {flex: 1, paddingBottom: Metrics.baseMargin},
            Platform.OS === 'ios'
              ? {marginBottom: Metrics.verticalScale(25)}
              : {marginBottom: Metrics.verticalScale(20)},
          ]}
          keyExtractor={item => item?.id}
        />
        <View style={styles.buttonView}>
          <ButtonView style={styles.touchableOpacity} onPress={closeModal}>
            <H7 style={styles.text} text="cancel" />
          </ButtonView>
        </View>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 270,
    width: Metrics.scale(348),
    paddingTop: Metrics.verticalScale(10),
    backgroundColor: Colors.WHITE,
    marginHorizontal: Metrics.scale(15),
    borderRadius: Metrics.scale(15),
  },
  buttonView: {
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    color: Colors.BLUE_LINK,
    alignSelf: 'flex-end',
    marginRight: Metrics.doubleBaseMargin,
    margin: Metrics.baseMargin,
  },
  touchableOpacity: {
    paddingVertical: Metrics.verticalScale(10),
    alignItems: 'center',
    marginLeft: 'auto',
  },
  title: {
    ...Fonts.SemiBold(Fonts.Size.large, Colors.BLACK),
    margin: Metrics.scale(12),
    marginHorizontal: Metrics.scale(20),
  },
  main: {
    marginHorizontal: Metrics.scale(15),
    flex: 1,
    justifyContent: 'center',
  },
  radio: {
    height: Metrics.scale(22),
    width: Metrics.scale(22),
    borderWidth: 1,
    borderRadius: Metrics.scale(22),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.verticalScale(5),
  },
  radioBg: {
    backgroundColor: Colors.BLUE_LINK,
    height: Metrics.scale(13),
    width: Metrics.scale(13),
    borderRadius: Metrics.scale(13),
  },
  textStyle: {marginHorizontal: 10},
});

export default SimpleModal;
