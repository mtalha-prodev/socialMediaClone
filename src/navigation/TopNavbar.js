import {View, Text} from 'react-native';
import React from 'react';
import BottomBtn from '../components/BottomBtn';
import {MAIN_ROUTES} from './routes';

const TopNavbar = ({selectedTab}) => {
  return (
    <View className="absolute top-0 w-full h-16 bg-zinc-800 p-2 justify-between items-center flex-row ">
      <BottomBtn size={35} name={'home'} color={'orange'} />
      {selectedTab == 0 && (
        <BottomBtn
          size={35}
          name={'chatbubble-ellipses'}
          color={'white'}
          onPress={MAIN_ROUTES.CHATS}
        />
      )}
      {selectedTab == 3 && (
        <BottomBtn
          size={35}
          name={'settings'}
          color={'white'}
          onPress={MAIN_ROUTES.SETTING}
        />
      )}
    </View>
  );
};

export default TopNavbar;
