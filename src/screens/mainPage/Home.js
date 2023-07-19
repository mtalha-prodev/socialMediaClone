import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {background, form, mainPage} from '../../components/style';
import BottomNavbar from '../../navigation/BottomNavbar';
import TopNavbar from '../../navigation/TopNavbar';
import RandomPost from '../../components/RandomPost';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchUser from './SearchUser';
import Notification from './Notification';
import Profile from './Profile';

const Home = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  console.log(selectedTab);

  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}
      <TopNavbar selectedTab={selectedTab} />

      {/* main section */}

      <View className=" w-11/12 mb-20 mt-16 self-center">
        <ScrollView
          className="w-full h-full py-2"
          showsVerticalScrollIndicator={false}>
          {selectedTab == 0 ? (
            <RandomPost />
          ) : selectedTab == 1 ? (
            <SearchUser />
          ) : selectedTab == 2 ? (
            <Notification />
          ) : (
            <Profile />
          )}
        </ScrollView>
      </View>

      {/* bottom navbar */}
      <View className="absolute bottom-0 w-full h-16  p-2 justify-around items-center flex-row rounded-t-3xl bg-zinc-600 dark:bg-zinc-800">
        <TouchableOpacity onPress={() => setSelectedTab(0)}>
          <Ionicons
            size={30}
            name={'home'}
            color={selectedTab == 0 ? 'orange' : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(1)}>
          <Ionicons
            size={30}
            name={'search'}
            color={selectedTab == 1 ? 'orange' : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(2)}>
          <Ionicons
            size={30}
            name={'notifications'}
            color={selectedTab == 2 ? 'orange' : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(3)}>
          <Ionicons
            size={30}
            name={'person'}
            color={selectedTab == 3 ? 'orange' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
