import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SIGNUP_ROUTES} from '../../../navigation/routes';
import {background, form} from '../../../components/style';

const Username = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      <View className={form.container}>
        <Text className={form.title}>User name</Text>
        <TextInput
          placeholder="enter username ..."
          className={form.inputText}
        />
        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate(SIGNUP_ROUTES.PASSWORD)}>
          <Text className={form.btn_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Username;
