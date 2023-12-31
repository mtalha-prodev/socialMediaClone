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
        <Text className={form.text}>Choose a strong Password</Text>
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
          onPress={() => navigation.navigate(SIGNUP_ROUTES.ROLL)}>
          <Text className={form.btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Password;
