import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import getUser from '../services/user';

const RootNavigator: React.FC = ({}) => {
  const user = getUser();
  // console.log(user === null ? 'Loading' : user.displayName);

  const navigationRef = React.createRef<NavigationContainerRef>();
  // @ts-ignore
  const {navigate} = (name: string, params: object) =>
    navigationRef.current?.navigate(name, params);

  return (
    <NavigationContainer ref={navigate}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
