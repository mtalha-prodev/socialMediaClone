import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {background, form} from '../../components/style';
import Icon from '../../common/Icon';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}

      <View className=" w-11/12 my-2 mt-4 self-center ">
        {/* header */}

        <TouchableOpacity
          className="bg-zinc-50 w-8 h-8 rounded-full"
          onPress={() => navigation.goBack()}>
          <Icon size={30} name={'arrow-back'} color={'black'} />
        </TouchableOpacity>
        <View className="justify-center items-center mb-5">
          <Text className="text-3xl font-bold text-zinc-50 dark:text-gray-50 ">
            Settings
          </Text>
          <Text className="text-base mt-2 font-bold text-zinc-600 dark:text-gray-50 ">
            Edit Profile
          </Text>
        </View>

        <ScrollView
          className="w-full h-full mb-auto "
          showsVerticalScrollIndicator={false}>
          {/* search and map data show */}
          <View>
            <Text className="text-lg font-bold text-zinc-50 dark:text-gray-50 my-4  border-b-2 pb-3 border-zinc-400">
              Forget Password
            </Text>
            <Text className="text-lg font-bold text-zinc-50 dark:text-gray-50 border-b-2 pb-3 border-zinc-400">
              Change Profile
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
