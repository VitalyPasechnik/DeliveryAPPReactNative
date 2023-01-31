import React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';

import { ArrowRightIcon } from "react-native-heroicons/outline";

import restaurant from '../assets/data/restaurant.js';

import RestaurantCard from '../components/RestaurantCard';

const FeaturedRow = ({ item }) => {
  const { id, title, description, featuredCategory } = item;


  const myLat = 50;
  const myLong = 30;

  return (
    <View>
      <View className="flex-row justify-between items-center m-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-xs">{description}</Text>
        </View>

      <TouchableOpacity>
        <ArrowRightIcon size={30} color="#00CCBB" />
      </TouchableOpacity>
    </View>

    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {restaurant?.map(i => (
        <RestaurantCard
          key={i.id}
          id={i.id}
          imgUrl={i.imgUrl}
          title={i.title}
          rating={i.rating}
          genre={i.genre}
          address={i.address}
          short_description={i.short_description}
          dishes={i.dishes}
          long={i.long}
          lat={i.lat}
        />)
      )}
    </ScrollView>
  </View>
  )
}

export default FeaturedRow;
