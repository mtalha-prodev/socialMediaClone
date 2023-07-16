import {View, Text} from 'react-native';
import React from 'react';
import BottomBtn from '../components/BottomBtn';
import {MAIN_ROUTES} from './routes';

const TopNavbar = () => {
  return (
    <View className="absolute top-0 w-full h-16 bg-zinc-800 p-2 justify-between items-center flex-row ">
      <BottomBtn size={35} name={'home'} color={'orange'} />
      <BottomBtn
        size={35}
        name={'chatbubble-ellipses'}
        color={'white'}
        onPress={MAIN_ROUTES.CHATS}
      />
    </View>
  );
};

export default TopNavbar;
