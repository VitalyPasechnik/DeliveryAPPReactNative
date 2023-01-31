import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import {
  XCircleIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemWithId, selectBasketTotal } from '../features/basketSlice';
import { selectRestaurant } from '../features/restaurantSlice';
import Currency from 'react-currency-formatter';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items])

  console.log(groupedItemsInBasket);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">

      <View className="flex-row items-center justify-center w-full border-[#00CCBB] h-20 bg-white p-4 shadow-xs">
      
        <View className="items-center">
           <Text className="font-bold text-xl">Basket</Text>
           <Text className="text-gray-500 text-l">{restaurant.title}</Text>
        </View>

        <TouchableOpacity className="absolute right-6" onPress={navigation.goBack}>
          <XCircleIcon color='#00CCBB' size={40} />
        </TouchableOpacity>
    
      </View>

      <View className="my-5 flex-row items-center space-x-4 w-full h-20 bg-white p-4">
        <Image 
          source={{
            uri: "https://www.freecodecamp.org/news/content/images/2022/04/timon-klauser-3MAmj1ZKSZA-unsplash.jpg"
          }}
          className="w-7 h-7 bg-gray-300 rounded-full"
        />

        <Text className=" text-l flex-1">Deliver in 50-75 min</Text>

        <TouchableOpacity className="" onPress={() => navigation.goBack()}>
          <Text className='text-[#00CCBB]'>Change</Text>
        </TouchableOpacity>
    
      </View>

      <ScrollView className="divide-y divide-gray-200">
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <TouchableOpacity className="my-1 bg-white p-5 flex-row items-center space-x-2">
            <View
              key={key}
              className="flex-row items-center justify-between"
            >
              <Text className='text-[#00CCBB] mx-2'>{items.length} x</Text>
              <Image
                source={{ uri: items[0]?.imgUrl }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1 mx-3">{items[0]?.title}</Text>

              <Text className='text-s text-gray-400 font-extrabold mr-1'>
                <Currency quantity={items[0].cost} currency="UAH" />
              </Text>

              <TouchableOpacity
                className="mx-2"
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00CCBB]">
                  Remove
                </Text>
              </TouchableOpacity>
            </View>

          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="p-5 bg-white mt-5 ">
        <View className="flex-row items-center justify-between p-2">
          <Text className="font-extrabold text-gray-400">Subtotal</Text>
          <Text className='text-s text-gray-400 font-extrabold'>
            <Currency quantity={basketTotal} currency="UAH" />
          </Text>
        </View>

        <View className="flex-row items-center justify-between p-2">
          <Text className="font-extrabold text-gray-400">Delivery Fee</Text>
          <Text className='text-s text-gray-400 font-extrabold'>
            <Currency quantity={5.99} currency="UAH" />
          </Text>
        </View>

        <View className="flex-row items-center justify-between p-2">
          <Text className="font-bold text-black">Order Total</Text>
          <Text className='text-s text-black font-extrabold mr-1'>
            <Currency quantity={5.99} currency="UAH" />
          </Text>
        </View>

        <TouchableOpacity
          className="p-4 bg-[#00CCBB] m-5 rounded-lg"
          onPress={() => navigation.navigate('Preparing')}
        >
          <Text className="text-white text-center font-bold text-lg">Place Order</Text>
        </TouchableOpacity>
      </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
