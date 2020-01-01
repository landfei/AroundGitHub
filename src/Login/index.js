import React from 'react';
import { Text } from 'react-native';

import { setUserInfo } from '../Utils';

export default () => {
  setUserInfo({
    openId: 'openid',
  });
  return (
    <>
      <Text>Login</Text>
    </>
  );
};
