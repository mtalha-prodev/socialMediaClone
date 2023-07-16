import {View, Text} from 'react-native';
import React from 'react';
import BottomBtn from '../components/BottomBtn';

const TopNavbar = () => {
  return (
    <View className="absolute top-0 w-full h-20 bg-zinc-800 p-2 justify-between items-center flex-row ">
      <BottomBtn size={35} name={'home'} color={'orange'} />
      <BottomBtn size={35} name={'chatbubble-ellipses'} color={'white'} />
    </View>
  );
};

export default TopNavbar;
