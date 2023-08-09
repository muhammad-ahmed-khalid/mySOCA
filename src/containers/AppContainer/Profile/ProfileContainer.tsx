import {logout} from '@Api/Auth';

import {useMutation} from '@tanstack/react-query';
import React, {useContext} from 'react';
import useHomeScreenContainer from '../Home/HomeScreenContainer';
import loginContext from '@Context/loginContext';

export default function useProfileContainer() {
  const {getAllUserDetails} = useHomeScreenContainer();
  const {name} = getAllUserDetails || {};
  const [isDeleteAccountVisible, setisDeleteAccountVisible] =
    React.useState(false);
  const {handleLogoutUser} = useContext(loginContext);

  const {mutate: logoutMutate} = useMutation(logout, {
    onSuccess: (data: any) => {
      handleLogoutUser();
    },
  });

  const changeDeleteModalVisible = isLogout => {
    if (isLogout == true) {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
      logoutMutate();
    } else {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };

  return {
    setisDeleteAccountVisible,
    changeDeleteModalVisible,
    isDeleteAccountVisible,
  };
}
