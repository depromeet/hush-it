import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screenName} from '@navigations/constants/screenName';
import {TestPage} from '~/components/pages/TestPage';

export type MainStackParamsList = {
  [screenName.TestPage]: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamsList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      defaultScreenOptions={{headerShown: false}}
      screenOptions={{
        gestureEnabled: false,
        headerLeft: undefined,
      }}>
      <MainStack.Screen
        name={screenName.TestPage}
        component={TestPage}
        options={{headerShown: false, animation: 'fade'}}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
