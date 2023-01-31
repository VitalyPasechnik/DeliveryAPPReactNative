import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TextInput } from 'react-native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

import Categories from '../components/Categories.js';
import FeaturedRow from '../components/FeaturedRow.js';

import categoryData from '../assets/data/category.js';
import featuredMenuCategories from '../assets/data/featured.js';
import restaurant from '../assets/data/restaurant.js';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white pt-5">

      {/* -------------------   HEADER --------------------- */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 space-between">
        <Image 
          source={{
            uri: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          }}
          className="w-7 h-7 bg-gray-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* --------------------- SEARCH ------------------------ */}
      <View className="flex-row gap-2 items-center space-x-2 pb-2 mx-4">

        <View className="flex-row flex-1 bg-gray-300 items-center p-3 space-x-2">
         <MagnifyingGlassIcon size={20} color="gray"  />
         <TextInput
           placeholder="Restorants and cuisines"
           keyBoardType="default"
        />
        </View>

        <AdjustmentsVerticalIcon className="m-2" />

      </View>

      {/* -------------------- MAIN _BODY ----------------------- */}
      <ScrollView
        className="bg-gray-200"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
                           {/* Categories -----------------------*/}
        <Categories categoryData={categoryData} />

                           {/* ROW FeaturedRow -------------------------*/}
        {featuredMenuCategories?.map((item) => (
          <FeaturedRow
            key={item.id}
            item={item}
          />
      ))}

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen