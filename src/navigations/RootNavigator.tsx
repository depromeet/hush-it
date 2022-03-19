import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import React, {useRef} from 'react';
import MainStackNavigator, {MainStackParamsList} from './MainStackNavigator';
import {navigationRef} from './constants/navigationOptions';
import {navigatorName} from './constants/screenName';

export type RootStackParamsList = {
  [navigatorName.MainStack]: NavigatorScreenParams<MainStackParamsList>;
};

const RootNavigator = () => {
  const routeNameRef = useRef<string>();
  const RootStack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name)
      }>
      <RootStack.Navigator
        screenOptions={{
          animationTypeForReplace: 'push',
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}>
        <RootStack.Screen
          name={navigatorName.MainStack}
          component={MainStackNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

RootNavigator.displayName = 'RootNavigator';

export default RootNavigator;
