import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomBtn = ({onPress, name, size, color, navigate}) => {
  return (
    <TouchableOpacity onPress={() => onPress}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default BottomBtn;
