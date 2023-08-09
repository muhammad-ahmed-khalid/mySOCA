import H2 from '@Component/Headings/H2';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { DATE_FORMATS } from '../../utility/DateUtils';
import Metrics from '../../utility/Metrics';
import ButtonView from '../ButtonView';
import H4 from '@Component/Headings/H4';

const FormBooleanInput = React.forwardRef((props: any, ref) => {
  const [state, setState] = React.useState({
    isErr: false,
    err: '',
    value: props.value || '',
  });
  const [selectedOption, setSelectedOption] = useState('Yes');

  React.useEffect(
    () =>
      setState(s => ({
        ...s,
        value: props.value,
        isErr: false,
        err: '',
      })),
    [props.value],
  );

  React.useImperativeHandle(ref, () => ({
    setError: (isErr: boolean, err: string) => {
      setState(s => ({
        ...s,
        isErr,
        err: err?.length ? err : props.err,
      }));
    },
    getValue: () => state.value,
  }));

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setState(s => ({
      ...s,
      value: option,
      err: null,
      isErr: false,
    }));
  };

  const RadioButton = ({ options, selectedOption, onOptionSelect }) => {
    return (
      <View style={styles.container}>
        {options.map((option, index) => (
          <ButtonView
            key={index}
            enableClick={props.isDisabled}
            style={[styles.radioButton, props?.isDisabled && {opacity: 0.5}]}
            onPress={() => onOptionSelect(option)}>
            <View style={[styles.radioButtonIcon]}>
              {selectedOption === option && (
                <View style={styles.radioButtonIconSelected} />
              )}
            </View>
            <H4 text={option} style={styles.optionText} />
          </ButtonView>
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.mainContainer, { width: props.width }]}>
      <View style={[props.wrapperStyle]}>
        <RadioButton
          options={['Yes', 'No']}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
        />
      </View>
      {!!state.isErr && <H2 style={styles.errorMessage} text={state.err} />}
    </View>
  );
});

export default FormBooleanInput;
const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: Metrics.verticalScale(10),
  },
  errorMessage: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.TOMATO),
    marginTop: Metrics.scale(5),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonIcon: {
    width: Metrics.scale(16),
    height: Metrics.scale(16),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Colors.DARK_BLACK,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIconSelected: {
    width: Metrics.scale(11),
    height: Metrics.scale(11),
    borderRadius: 10,
    backgroundColor: Colors.Colors.DARK_BLACK,
  },
  optionText: {
    ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.DARK_BLACK),
  },
});
