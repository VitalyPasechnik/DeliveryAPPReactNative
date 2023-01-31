import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { setRestaurant, selectRestaurant } from '../features/restaurantSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import MapView from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restraurant = useSelector(selectRestaurant)

  return (
    <>
    <SafeAreaView className="bg-[#00CCBB]">
      <View className="px-2">
        <View className="bg-[#00CCBB] flex-row items-center justify-between p-2">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={40} color='white' />
          </TouchableOpacity>
        
          <TouchableOpacity>
            <Text className="text-xlg font-bold text-white">Order Help!</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center bg-white shadow-lg rounded-xl p-6">
          <View className="">
            <Text className="text-lg font-bold text-gray-400">Order Help!</Text>
            <Text className="text-3xl font-bold mb-4">45-50 Minutes</Text>
            <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />
            <Text className="text-lg font-bold text-gray-400 mt-7">Order at {restraurant.title} is being prepared!</Text>
          </View>

          <Animatable.Image
            source={require('../assets/image/CarDelivery.gif')}
            iterationCount={1}
            className="h-20 w-20 bg-[#00CCBB] rounded-lg"
          />
        </View>
      </View>

      <MapView
        initialRegion={{
          latitude: restraurant.lat,
          longitude: restraurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="h-full w-full"
        mapType="mutedStandart"
      >
        {/* <Marker
          coordinate={{
            latitude: restraurant.lat,
            longitude: restraurant.long,
          }}
          title={restraurant.title}
        /> */}
      </MapView>
    </SafeAreaView>

      <View className="absolute bottom-0 flex-row w-full items-center bg-white space-x-5 h-28">
        <Image
          source={{
            uri: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />

        <View className="flex-1">
          <Text className=" text-lg">Arkadiy</Text>
          <Text className="font-bold text-gray-400">Your rider</Text>
        </View>

        <TouchableOpacity className="flex-row justify-between items-center">
            <Text className="text-[#00CCBB] mr-10 text-lg font-bold">Call</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default DeliveryScreen