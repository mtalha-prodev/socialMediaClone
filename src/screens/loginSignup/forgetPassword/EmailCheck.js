import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {background, form} from '../../../components/style';
import {FORGET_ROUTES} from '../../../navigation/routes';

const EmailCheck = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      <View className={form.container}>
        <Text className={form.title}>Sign Up</Text>
        <Text className={form.text}>Enter Your Email</Text>
        <TextInput
          placeholder="Enter Your Email ..."
          placeholderTextColor={'black'}
          className={form.inputText}
        />
        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate(FORGET_ROUTES.VERIFICATION)}>
          <Text className={form.btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmailCheck;
