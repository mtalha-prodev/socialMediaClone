import {View, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {background, form} from '../../components/style';
import ChatUser from '../../components/ChatUser';

const data = [
  {
    id: 1,
    name: 'Talha',
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',
  },
  {
    id: 2,
    name: 'user',
    profilePic:
      'https://fastly.picsum.photos/id/49/550/550.jpg?hmac=iXC56wGff_mV_vK8gwc8vr_mIqnsI933oEpxm0gj8aE',
  },
  {
    id: 3,
    name: 'username',
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',
  },
];

const SearchUser = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}

      <View className=" w-full my-2 mt-4 self-center ">
        {/* header */}
        <View className="border-2 p-2 rounded-xl py-2 mb-2 border-zinc-500 dark:border-zinc-800 ">
          <View className="justify-center items-center mb-5">
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
                return null;
              }
              if (chat.name.toLowerCase().includes(keyword.toLowerCase())) {
                console.log(chat);
                return chat;
              }
            })
            .map(item => (
              <ChatUser item={item} key={item.id} />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchUser;
