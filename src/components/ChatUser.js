import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const data = [
  {
    id: 1,
    name: 'Talha',
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',

    message: ['user', 'news'],
  },
  {
    id: 2,
    name: 'user',
    profilePic:
      'https://fastly.picsum.photos/id/49/550/550.jpg?hmac=iXC56wGff_mV_vK8gwc8vr_mIqnsI933oEpxm0gj8aE',

    message: ['user', 'news'],
  },
  {
    id: 3,
    name: 'username',
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',

    message: ['user', 'news'],
  },
];

const ChatUser = () => {
  return (
    <>
      {data.map(item => {
        return (
          <TouchableOpacity
            className="mt-4 items-center rounded-xl flex-row p-2 border-2 dark:border-zinc-800 "
            key={item.id}>
            <Image
              source={{uri: item.profilePic}}
              className="w-10 h-10 rounded-full mr-2 ml-2 "
            />
            <View>
              <Text className="text-base font-bold capitalize dark:text-gray-50 ">
                User
              </Text>
              <Text className="text-sm dark:text-gray-400 ">Hello dear</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default ChatUser;
