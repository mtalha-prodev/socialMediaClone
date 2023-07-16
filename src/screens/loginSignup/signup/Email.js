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

const Email = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      <View className={form.container}>
        <Text className={form.title}>Sign Up</Text>
        <TextInput
          placeholder="enter your email ..."
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

export default Email;
