import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Swiper from '../components/Swiper';
import AccountInfo from '../screens/AccountInfo';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      inactiveTintColor: colors.gray,
    }}>
    <Tab.Screen name="Login" component={Swiper} />
    <Tab.Screen name="Account Info" component={AccountInfo} />
  </Tab.Navigator>
);

export default AppNavigator;
