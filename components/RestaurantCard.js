import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";


const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
 }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 rounded-m shadow"
      onPress={() => navigation.navigate('Restaurant', {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
      })}
    >
        <Image
          className="w-64 h-36 rounded-m"
          source={{uri: imgUrl,
        }}/>

        <View className="px-3 pb-4 w-60 rounded-sm">

          <Text className="text-lg font-bold pt-2">{title}</Text>
          
          <View className="flex-row space-x-1 items-center">
            <StarIcon size={22} color="green" opacity={0.5} />
            <Text className="text-gray-500 text-xs">{rating} - {genre}
            </Text>
          </View>
        
          <View className="flex-row space-x-2 items-center">
            <MapPinIcon size={20} color="gray" />
            <Text className="text-gray text-xs">{address}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}    

export default RestaurantCard;