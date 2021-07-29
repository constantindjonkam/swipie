import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import AccountInfo from '../screens/AccountInfo';

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Account Info" component={AccountInfo} />
  </Stack.Navigator>
);

export default AuthNavigator;
