import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const BottomBtn = ({onPress, name, size, color}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(onPress)}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default BottomBtn;
