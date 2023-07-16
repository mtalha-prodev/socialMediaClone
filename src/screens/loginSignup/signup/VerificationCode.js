import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {background, form} from '../../../components/style';

const VerificationCode = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      <View className={form.container}>
        <Text className={form.title}>Verification</Text>
        <TextInput
          placeholder="enter verification code ..."
          className={form.inputText}
        />
        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate('Login')}>
          <Text className={form.btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerificationCode;
