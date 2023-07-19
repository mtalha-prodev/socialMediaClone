import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {background, form} from '../../../components/style';
import {
  FORGET_ROUTES,
  MAIN_ROUTES,
  SIGNUP_ROUTES,
} from '../../../navigation/routes';

const Login = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}
      <View className={form.container}>
        <Text className={form.title}>Login</Text>

        <TextInput
          placeholder="enter your email ..."
          placeholderTextColor={'black'}
          className={form.inputText}
        />
        <TextInput
          placeholder="password your email ..."
          placeholderTextColor={'black'}
          className={form.inputText}
        />
        <View className="items-end justify-end w-11/12 ">
          <Text
            className=" text-base text-end mt-4 text-zinc-800 dark:text-gray-300"
            onPress={() => navigation.navigate(FORGET_ROUTES.EMAIL)}>
            Forget Password?
          </Text>
        </View>

        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate(MAIN_ROUTES.HOME)}>
          <Text className={form.btn_text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row mt-4 w-11/12 justify-center"
          onPress={() => navigation.navigate(SIGNUP_ROUTES.EMAIL)}>
          <Text className="text-base text-zinc-700 dark:text-zinc-400">
            Don't have an Account!
          </Text>
          <Text className="text-base ml-2 text-zinc-800 dark:text-gray-200 ">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
