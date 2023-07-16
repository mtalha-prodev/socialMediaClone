import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {background, form} from '../../components/style';
import BottomNavbar from '../../navigation/BottomNavbar';
import TopNavbar from '../../navigation/TopNavbar';

const Home = ({navigation}) => {
  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}
      <View className={form.container}>
        <TopNavbar />

        <Text className={form.title}>Main Page</Text>

        <BottomNavbar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
