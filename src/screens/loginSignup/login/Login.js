import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  background,
  form,
  form_btn,
  text,
  title,
} from '../../../components/style';
import {MAIN_ROUTES, SIGNUP_ROUTES} from '../../../navigation/routes';

const Login = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}
      <View className={form.container}>
        <Text className={form.title}>Login</Text>

        <TextInput
          placeholder="enter your email ..."
          className={form.inputText}
        />
        <TextInput
          placeholder="password your email ..."
          className={form.inputText}
        />
        <View className="items-end justify-end w-11/12 ">
          <Text
            className="text-gray-300 text-base text-end mt-4"
            onPress={() => navigation.navigate(SIGNUP_ROUTES.EMAIL)}>
            Forget password ?
          </Text>
        </View>

        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate(MAIN_ROUTES.HOME)}>
          <Text className={form.btn_text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row mt-4 w-11/12 justify-end"
          onPress={() => navigation.navigate(SIGNUP_ROUTES.EMAIL)}>
          <Text className="text-base text-gray-400">
            Don't have an Account!
          </Text>
          <Text className="text-base text-gray-200 ml-2">Signup?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
