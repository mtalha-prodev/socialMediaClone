import {View, Text} from 'react-native';
import React from 'react';
import BottomBtn from '../components/BottomBtn';

const BottomNavbar = ({navigation}) => {
  return (
    <View className="absolute bottom-0 w-full h-20 bg-zinc-800 p-2 justify-around items-center flex-row rounded-t-3xl">
      <BottomBtn size={30} name={'home'} color={'orange'} />
      <BottomBtn size={30} name={'search'} color={'white'} />
      <BottomBtn size={30} name={'heart'} color={'white'} />
      <BottomBtn size={30} name={'person'} color={'white'} />
    </View>
  );
};

export default BottomNavbar;
