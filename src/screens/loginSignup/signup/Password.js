import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {background, form} from '../../../components/style';
import {SIGNUP_ROUTES} from '../../../navigation/routes';

const Password = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      <View className={form.container}>
        <Text className={form.title}>Password</Text>
        <TextInput
          placeholder="enter your Password ..."
          className={form.inputText}
        />
        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate(SIGNUP_ROUTES.VERIFICATION)}>
          <Text className={form.btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Password;
