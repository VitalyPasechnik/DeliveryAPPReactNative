import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
  console.log(imgUrl, title)
  return (
    <TouchableOpacity className="relative p-1">
      <Image
        className="w-20 h-20 rounded"
        source={{ uri: imgUrl }}/>
      <Text className="absolute text-white">{title}</Text>
    </TouchableOpacity>

  )
}

export default CategoryCard;