import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FORGET_ROUTES} from '../../../navigation/routes';
import {background, form} from '../../../components/style';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      <View className={form.container}>
        <Text className={form.title}>Password</Text>
        <Text className={form.text}>Forget Password</Text>
        <TextInput
          placeholder="Enter Password ..."
          placeholderTextColor={'black'}
          className={form.inputText}
        />
        <TextInput
          placeholder="Confirm Password ..."
          placeholderTextColor={'black'}
          className={form.inputText}
        />
        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate(FORGET_ROUTES.SUCCESSFULLY)}>
          <Text className={form.btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
