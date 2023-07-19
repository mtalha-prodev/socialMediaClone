import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ChatUser = ({item}) => {
  // console.log(item);
  return (
    <>
      <TouchableOpacity
        className="mt-4 items-center rounded-xl flex-row p-2 border-2 border-zinc-400 dark:border-zinc-800 "
        key={item.id}>
        <Image
          source={{uri: item.profilePic}}
          className="w-10 h-10 rounded-full mr-2 ml-2 "
        />
        {item.lastMessage ? (
          <View>
            <Text className="text-base font-bold capitalize text-zinc-800 dark:text-gray-50">
              {item.name}
            </Text>
            <Text className="text-sm dark:text-gray-400">
              {item.lastMessage}
            </Text>
          </View>
        ) : (
          <Text className="text-base font-bold capitalize text-zinc-800 dark:text-gray-50 ">
            {item.name}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default ChatUser;
