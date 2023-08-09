import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ResendButton from '@Component/ResendButton/ResendButton';
import useAuthOTPContainer from '@Container/AuthContainer/AuthOTP/AuthOTPContainer';

interface ICountDown {
    phoneNumber?: number;
}

const CountDown = ({phoneNumber}:ICountDown) => {
        const [count, setCount] = React.useState(30);
        const [showCount, setShowCount] = React.useState(true);
        const {
            resendOtpCode
          } = useAuthOTPContainer(phoneNumber);
    
        React.useEffect(() => {
          if (showCount) {
            const interval = setInterval(() => {
              setCount(prev => {
                if (prev <= 0) {
                  setShowCount(false);
    
                  return 0;
                } else {
                  return prev - 1;
                }
              });
            }, 1000);
            return () => clearInterval(interval);
          }
        }, [showCount]);
        const toggleResend = async () => {
          const palyload = {
            phone: `${phoneNumber}`,
          };
          resendOtpCode(palyload);
          setCount(30);
          setShowCount(true);
        };
        return (
          <ResendButton
            text={'didNotReceivedCode'}
            btnText={'resend'}
            isShowCount={showCount}
            resendOTPText={`Resend in ${count} sec`}
            toggleResend={toggleResend}
          />
        );
      };
    

export default CountDown

const styles = StyleSheet.create({})