import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Email, Home, Login, Password, Username, VerificationCode} from './path';
import {MAIN_ROUTES, SIGNUP_ROUTES} from './routes';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name={MAIN_ROUTES.HOME} component={Home} />
        <Stack.Screen name={SIGNUP_ROUTES.EMAIL} component={Email} />
        <Stack.Screen name={SIGNUP_ROUTES.USERNAME} component={Username} />
        <Stack.Screen name={SIGNUP_ROUTES.PASSWORD} component={Password} />
        <Stack.Screen
          name={SIGNUP_ROUTES.VERIFICATION}
          component={VerificationCode}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
