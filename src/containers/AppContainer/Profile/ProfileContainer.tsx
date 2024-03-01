import {logout} from '@Api/Auth';

import {useMutation} from '@tanstack/react-query';
import React, {useContext} from 'react';
import useHomeScreenContainer from '../Home/HomeScreenContainer';
import loginContext from '@Context/loginContext';
import {
  CalendarIcon,
  EmailIcon,
  GenderIcon,
  PhoneNumberIcon,
  UserIconProfile,
} from '@Asset/logo';

export default function useProfileContainer() {
  // const { getAllUserDetails } = useHomeScreenContainer();
  // const { name } = getAllUserDetails || {};
  const [isDeleteAccountVisible, setisDeleteAccountVisible] =
    React.useState(false);
  const {handleLogoutUser} = useContext(loginContext);

  const changeDeleteModalVisible = isLogout => {
    if (isLogout == true) {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
      handleLogoutUser();
    } else {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };
  const menuProfileSettingList = [
    {
      icon: <UserIconProfile />,
      text: 'Name',
    },
    {
      icon: <PhoneNumberIcon />,
      text: 'mobileNumber',
    },
    {
      icon: <EmailIcon />,
      text: 'email',
    },
    {
      icon: <GenderIcon />,
      text: 'gender',
    },
    {
      icon: <CalendarIcon />,
      text: 'dateOfBirth',
    },

    {
      icon: <CalendarIcon />,
      text: 'Banking Information',
    },
    {
      icon: <CalendarIcon />,
      text: 'Stripe Connect',
    },
  ];
  return {
    setisDeleteAccountVisible,
    changeDeleteModalVisible,
    isDeleteAccountVisible,
    menuProfileSettingList,
  };
}
