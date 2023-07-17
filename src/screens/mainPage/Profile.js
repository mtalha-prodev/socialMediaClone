import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {background} from '../../components/style';

const data = [
  {
    id: 1,
    username: 'talha@0018',
    followers: 1100,
    following: 1500,
    title: `I'm a Full Stack React Native Developer`,
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',
    postPic: [
      {
        id: 1,
        postImg: 'https://picsum.photos/300/350',
      },
      {
        id: 2,
        postImg: 'https://picsum.photos/400/350',
      },
      {
        id: 3,
        postImg: 'https://picsum.photos/500/350',
      },
      {
        id: 4,
        postImg: 'https://picsum.photos/400/400',
      },
      {
        id: 5,
        postImg: 'https://picsum.photos/500/350',
      },
      {
        id: 6,
        postImg: 'https://picsum.photos/400/400',
      },
    ],
  },
];

const Profile = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  return (
    <SafeAreaView className={background}>
      {/* <StatusBar translucent /> */}

      <View className=" w-full my-2 self-center ">
        {/* header */}

        <ScrollView
          className="w-full h-full mb-auto "
          showsVerticalScrollIndicator={false}>
          {/* search and map data show */}
          <PostCard data={data} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const PostCard = ({data}) => {
  return (
    <>
      {data?.map(item => (
        <View className=" justify-center items-center w-full" key={item.id}>
          <Image
            source={{uri: item.profilePic}}
            className="w-36 h-36 rounded-full "
          />

          <Text className="text-zinc-50 font-bold text-xl my-4 bg-zinc-800 py-2 px-5 rounded-full">
            {item.username}
          </Text>

          <View className="flex-row justify-between w-full border-t-2 py-4 border-b-2 border-gray-50">
            <View className="items-center">
              <Text className="text-zinc-50 text-base">Followers</Text>
              <Text className="text-zinc-50 text-base">{item.followers}</Text>
            </View>
            <View className="items-center  ">
              <Text className="text-zinc-50 text-base">Followers</Text>
              <Text className="text-zinc-50 text-base">{item.following}</Text>
            </View>
            <View className="items-center ">
              <Text className="text-zinc-50 text-base ">Posts</Text>
              <Text className="text-zinc-50 text-base">
                {item.postPic.length}
              </Text>
            </View>
          </View>
          <Text className="text-zinc-50 my-6 bg-zinc-800 w-full p-2 text-lg text-center rounded-md font-bold ">
            {item.title}
          </Text>
          <Text className="text-zinc-50 text-xl bg-zinc-800 px-6 mb-4 rounded-full font-bold ">
            Your Posts
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View className="flex-row justify-between w-full mr-1 ">
              {item?.postPic?.map(pic => (
                <Image
                  source={{uri: pic.postImg}}
                  className="w-24 h-24 rounded-md mr-4"
                  key={pic.id}
                />
              ))}
            </View>
          </ScrollView>
          {item?.postPic?.map(pic => (
            <View className="w-full my-5 border-2 rounded-md border-zinc-800">
              <View className="flex-row items-center ml-3 mt-3">
                <Image
                  source={{uri: item.profilePic}}
                  className="w-14 h-14 rounded-full mr-3"
                />
                <Text className="text-zinc-50 text-lg">{item.username}</Text>
              </View>
              <Image
                source={{uri: pic.postImg}}
                className="w-full h-80 mt-2"
                key={pic.id}
              />
            </View>
          ))}
        </View>
      ))}
    </>
  );
};

export default Profile;
