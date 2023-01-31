import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon, ChevronRightIcon, QuestionMarkCircleIcon, ArrowLeftIcon } from "react-native-heroicons/outline";
import { useDispatch } from 'react-redux';

import { setRestaurant, selectRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = ({ route }) => {
  const { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ }))
  }

  useEffect(() => dispatch(setRestaurant({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  })), [dispatch])

  return (
    <>

    <BasketIcon />

    <ScrollView>
      <View>
        <Image 
          className="w-full h-56 bg-gray-300 rounded-m p-4"
          source={{uri: imgUrl,
        }}/>
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 bg-gray-100 rounded-full left-5 p-2"
        >
          <ArrowLeftIcon size={22} className="bg-gray-500" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="p-4">
          <Text className="text-3xl font-bold">{title}</Text>

          <View className="flex-row space-x-1 items-center pt-4">
            <StarIcon size={22} color="gray" opacity={0.5} />
            <Text className="text-gray-500 text-xs">{rating} - {genre}
            <MapPinIcon size={20} color="gray" />
            <Text className="text-gray text-xs">{address}</Text>
            </Text>
          </View>

          <Text className="text-gray-500 text-s pt-4 pb-4">{short_description}</Text>

          <TouchableOpacity className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <QuestionMarkCircleIcon size={22} color="gray" />
              <Text className="p-4 font-bold">Have a food allergy?</Text>
            </View>

            <ChevronRightIcon size={20} color="gray" />
          </TouchableOpacity>


        </View>
        <View className="pb-36">
        
          <Text className="text-2xl font-bold bg-gray-100 pt-5 px-4 pb-2">Menu</Text>

          {dishes?.map((item) => (
            <DishRow
              key={item.id}
              item={item}
            />
          ))}

        </View>
      </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen
