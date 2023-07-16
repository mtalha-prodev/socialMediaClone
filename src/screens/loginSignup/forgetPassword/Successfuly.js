import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {background, form} from '../../../components/style';
import Icon from '../../../common/Icon';
import {MAIN_ROUTES} from '../../../navigation/routes';

const Successfuly = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      <View className={form.container}>
        <Text className={form.title}>Create Account</Text>
        <View className="flex-row items-center justify-center">
          <Icon size={22} color="green" name={'shield-checkmark'} />
          <Text className={form.text} style={{marginTop: 0}}>
            Forget Password Successfully
          </Text>
        </View>

        <TouchableOpacity
          className={form.btn}
          onPress={() => navigation.navigate(MAIN_ROUTES.HOME)}>
          <Text className={form.btn_text}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Successfuly;
