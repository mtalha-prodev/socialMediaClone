import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {background, form} from '../../components/style';
import RandomPost from '../../components/RandomPost';
import Icon from '../../common/Icon';
import ChatUser from '../../components/ChatUser';
const data = [
  {
    id: 1,
    name: 'Talha',
    lastMessage: 'hello dear how you u',
    time: '1:00',
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',
  },
  {
    id: 2,
    name: 'user',
    lastMessage: 'how you u',
    time: '12:00',
    profilePic:
      'https://fastly.picsum.photos/id/49/550/550.jpg?hmac=iXC56wGff_mV_vK8gwc8vr_mIqnsI933oEpxm0gj8aE',
  },
  {
    id: 3,
    name: 'username',
    lastMessage: 'hello',
    time: '2:00',
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',
  },
];

const Chats = ({navigation}) => {
  const [keyword, setKeyword] = useState('');

  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}

      <View className=" w-11/12 my-2 mt-4 self-center ">
        {/* header */}
        <View className="border-2  p-2 rounded-xl py-4 mb-2 border-zinc-400 dark:border-zinc-800">
          <TouchableOpacity
            className="bg-zinc-800 w-8 h-8 rounded-full dark:bg-zinc-50"
            onPress={() => navigation.goBack()}>
            <Icon size={30} name={'arrow-back'} color={'gray'} />
          </TouchableOpacity>
          <View className="justify-center items-center mb-5">
            <Text className="text-xl font-bold text-zinc-800 dark:text-zinc-50 ">
              Your Chats
            </Text>
            <TextInput
              className={form.inputText}
              placeholder="Search ..."
              placeholderTextColor={'gray'}
              onChangeText={text => setKeyword(text)}
            />
          </View>
        </View>

        <ScrollView
          className="w-full h-full mb-auto "
          showsVerticalScrollIndicator={false}>
          {/* search and map data show */}
          {data
            ?.filter(chat => {
              if (keyword == '') {
                return chat;
              }
              if (chat.name.toLowerCase().includes(keyword.toLowerCase())) {
                console.log(chat);
                return chat;
              } else if (
                chat.lastMessage.toLowerCase().includes(keyword.toLowerCase())
              ) {
                return chat;
              }
            })
            .map(item => (
              <ChatUser item={item} />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chats;
