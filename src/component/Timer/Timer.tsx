import React, {useEffect, useState} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';

interface ITimer {
  label?: string;
  hours?: number;
  minutes?: number;
  seconds?: number;
  style?: StyleProp<ViewStyle>;
}

const Timer = ({
  label = '',
  hours = 0,
  minutes = 0,
  seconds = 0,
  style,
}: ITimer) => {
  const totalSeconds = minutes * 60 + seconds;
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingSeconds === 0) {
      console.log('Timer completed');
    }
  }, [remainingSeconds]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    let formattedTime = '';
    formattedTime += `${minutes.toString().padStart(2, '0')}:`;
    formattedTime += `${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
  };

  return (
    <View>
      <Text style={[style]}>
        {label && label}
        {remainingSeconds >= 0 ? formatTime(remainingSeconds) : '00:00'}
      </Text>
    </View>
  );
};

export default React.memo(Timer);
