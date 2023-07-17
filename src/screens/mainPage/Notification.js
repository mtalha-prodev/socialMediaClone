import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Notification = () => {
  return (
    <>
      <Text className="text-2xl my-2 text-center text-zinc-50 font-bold  capitalize dark:text-gray-50">
        Notifications
      </Text>
      <TouchableOpacity className="mt-4 rounded-lg p-3 bg-zinc-800  dark:border-zinc-800 ">
        <Text className="text-lg text-zinc-50 font-bold capitalize dark:text-gray-50 ">
          User
        </Text>
        <Text className=" ml-4 text-base text-zinc-50  capitalize dark:text-gray-50 ">
          item.name fjajie ejfiejifjeijfia
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-4 rounded-lg p-3 bg-zinc-800  dark:border-zinc-800 ">
        <Text className="text-lg text-zinc-50 font-bold capitalize dark:text-gray-50 ">
          User
        </Text>
        <Text className=" ml-4 text-base text-zinc-50  capitalize dark:text-gray-50 ">
          item.name fjajie ejfiejifjeijfia
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Notification;
