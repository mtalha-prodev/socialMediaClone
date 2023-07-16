import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {background, form, mainPage} from '../../components/style';
import BottomNavbar from '../../navigation/BottomNavbar';
import TopNavbar from '../../navigation/TopNavbar';
import RandomPost from '../../components/RandomPost';

const Home = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}
      <TopNavbar />
      <View className=" w-11/12 mb-20 mt-16  self-center">
        <ScrollView
          className="w-full h-full py-2"
          showsVerticalScrollIndicator={false}>
          <RandomPost />
        </ScrollView>
      </View>
      <BottomNavbar />
    </SafeAreaView>
  );
};

export default Home;
