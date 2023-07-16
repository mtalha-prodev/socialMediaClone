import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = ({name, color, size}) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
