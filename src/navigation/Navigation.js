import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Chats,
  Email,
  EmailCheck,
  ForgetPassword,
  ForgetVerification,
  Home,
  Login,
  Password,
  Roll,
  Successfuly,
  Username,
  VerificationCode,
} from './path';
import {FORGET_ROUTES, MAIN_ROUTES, SIGNUP_ROUTES} from './routes';

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

        <Stack.Screen name={SIGNUP_ROUTES.EMAIL} component={Email} />
        <Stack.Screen name={SIGNUP_ROUTES.USERNAME} component={Username} />
        <Stack.Screen name={SIGNUP_ROUTES.PASSWORD} component={Password} />
        <Stack.Screen name={FORGET_ROUTES.EMAIL} component={EmailCheck} />
        <Stack.Screen
          name={FORGET_ROUTES.VERIFICATION}
          component={ForgetVerification}
        />
        <Stack.Screen
          name={FORGET_ROUTES.PASSWORD}
          component={ForgetPassword}
        />
        <Stack.Screen
          name={FORGET_ROUTES.SUCCESSFULLY}
          component={Successfuly}
        />
        <Stack.Screen
          name={SIGNUP_ROUTES.VERIFICATION}
          component={VerificationCode}
        />
        <Stack.Screen name={SIGNUP_ROUTES.ROLL} component={Roll} />
        {/* home  */}
        <Stack.Screen name={MAIN_ROUTES.HOME} component={Home} />
        <Stack.Screen
          name={MAIN_ROUTES.CHATS}
          options={{
            animation: 'slide_from_bottom',
          }}
          component={Chats}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
