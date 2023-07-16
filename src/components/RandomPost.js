import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {form} from './style';
import PostCard from './PostCard';

// https://picsum.photos/350/350
const data = [
  {
    id: 1,
    name: 'Talha',
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',
    image:
      'https://fastly.picsum.photos/id/611/350/450.jpg?hmac=lKVazfUNf0Dg69RsGdaJm_ZDBjsQHpxXDtlyNLU_zXM',
    comments: [
      {
        id: 1,
        username: 'user',
        comment: `Rozana 2 Hours dai dai InshAllah Aap Aik Achy Plate form Hasil Karsakty hai
		Whats App 03439996624 & Already Easy Paisa in this Account`,
      },
      {
        id: 2,
        username: 'new',
        comment: 'seconds',
      },
    ],
    likes: ['user', 'news'],
  },
  {
    id: 2,
    name: 'user',
    profilePic:
      'https://fastly.picsum.photos/id/49/550/550.jpg?hmac=iXC56wGff_mV_vK8gwc8vr_mIqnsI933oEpxm0gj8aE',
    image:
      'https://fastly.picsum.photos/id/141/350/450.jpg?hmac=e_vdq72xWiVwzWvYjl4bGvZvOiH0L3DGLCAgn6e6GB0',
    comments: [
      {
        id: 1,
        username: 'user',
        comment: 'first',
      },
      {
        id: 2,
        username: 'new',
        comment: 'seconds',
      },
    ],
    likes: ['user', 'news'],
  },
  {
    id: 3,
    name: 'username',
    profilePic:
      'https://fastly.picsum.photos/id/452/350/350.jpg?hmac=5K330yDMRATHAIGaXluQy0veqN5OB5LuYFGTrRZNUr0',
    image:
      'https://fastly.picsum.photos/id/259/350/450.jpg?hmac=Xw95y_B0oIQ-XEjaN77eZLlnquKdw-me5fykT23ckYk',
    comments: [
      {
        id: 1,
        username: 'user',
        comment: 'first',
      },
      {
        id: 2,
        username: 'new',
        comment: 'seconds',
      },
    ],
    likes: ['user', 'news'],
  },
];

const RandomPost = () => {
  //   console.log(data);
  return (
    <>
      {data.map(item => {
        return (
          <View
            className="border-2 rounded-xl h-11/12 my-2  dark:border-zinc-800  "
            key={item.id}>
            <PostCard item={item} />
          </View>
        );
      })}
    </>
  );
};

export default RandomPost;
