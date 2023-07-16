import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {background, form} from '../../../components/style';
import {FORGET_ROUTES} from '../../../navigation/routes';

const ForgetVerification = ({navigation}) => {
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
          onPress={() => navigation.navigate(FORGET_ROUTES.PASSWORD)}>
          <Text className={form.btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetVerification;
