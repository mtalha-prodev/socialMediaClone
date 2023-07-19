import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from '../common/Icon';

const PostCard = ({item}) => {
  const [isLikes, setIsLikes] = useState(false);
  const [isComment, setIsComment] = useState(false);

  return (
    <View className="py-2">
      <View className="flex-row items-center p-2 mb-2 ">
        <Image
          source={{uri: item.profilePic}}
          className="w-10 h-10 mr-2 rounded-full"
        />
        <Text className="font-bold text-xl capitalize text-zinc-800 dark:text-zinc-50">
          {item.name}
        </Text>
      </View>
      <Image source={{uri: item.image}} className="w-full h-96" />
      <View className="flex-row ml-2">
        {isLikes ? (
          <TouchableOpacity
            className="my-2 p-2 flex-row items-center "
            onPress={() => setIsLikes(!isLikes)}>
            <Icon name={'heart'} size={30} color={'red'} />
            <Text className="text-base ml-1 font-bold dark:text-zinc-50">
              {item.likes.length + 1}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="my-2 p-2 flex-row items-center "
            onPress={() => setIsLikes(!isLikes)}>
            <Icon name={'heart-outline'} size={30} color={'gray'} />
            <Text className="text-base ml-1 font-bold dark:text-zinc-50">
              {item.likes.length}
            </Text>
          </TouchableOpacity>
        )}
        {/* commentst */}

        <TouchableOpacity
          className="my-2 p-2 ml-4 items-center "
          onPress={() => setIsComment(!isComment)}>
          <Icon name={'send'} size={30} color={'gray'} />
        </TouchableOpacity>
      </View>
      {isComment && (
        <View>
          {item.comments?.map(comment => (
            <View
              className="my-1 ml-4 flex-row items-start w-4/5 "
              key={comment.id}>
              <Image
                source={{uri: item.profilePic}}
                className="w-10 h-10 rounded-full mr-2"
              />
              <View className="bg-zinc-300 px-2 py-1 rounded-md dark:bg-zinc-800">
                <Text className="text-lg font-bold capitalize text-zinc-800 dark:text-zinc-50">
                  {comment.username}
                </Text>
                <Text className="ml-4 text-base text-zinc-600 dark:text-zinc-100 ">
                  {comment.comment}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default PostCard;
