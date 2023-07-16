import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {background, form} from '../../components/style';
import RandomPost from '../../components/RandomPost';
import Icon from '../../common/Icon';
import ChatUser from '../../components/ChatUser';

const Chats = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}

      <View className=" w-11/12 my-2 mt-4 self-center ">
        {/* header */}
        <View className="border-2 border-zinc-800 p-2 rounded-xl py-4 mb-2">
          <TouchableOpacity
            className="bg-zinc-50 w-8 h-8 rounded-full"
            onPress={() => navigation.goBack()}>
            <Icon size={30} name={'arrow-back'} color={'black'} />
          </TouchableOpacity>
          <View className="justify-center items-center mb-5">
            <Text className="text-xl font-bold text-zinc-800 dark:text-gray-50 ">
              Your Chats
            </Text>
            <TextInput
              className={form.inputText}
              placeholder="Search ..."
              placeholderTextColor={'gray'}
            />
          </View>
        </View>

        <ScrollView
          className="w-full h-full mb-auto "
          showsVerticalScrollIndicator={false}>
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chats;
