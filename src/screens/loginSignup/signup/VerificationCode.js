import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {background, form} from '../../../components/style';
import {SIGNUP_ROUTES} from '../../../navigation/routes';

const VerificationCode = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      <View className={form.container}>
        <Text className={form.title}>Verification</Text>
        <Text className={form.text}>
          A Verification Code has send to your Email
        </Text>
        <TextInput
          placeholder="Enter 6-Digit code here ..."
          placeholderTextColor={'black'}
          className={form.inputText}
        />
        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate(SIGNUP_ROUTES.USERNAME)}>
          <Text className={form.btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerificationCode;
