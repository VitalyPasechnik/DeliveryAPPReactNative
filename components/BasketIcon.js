import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemWithId, selectBasketTotal } from '../features/basketSlice';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="mx-5 p-4 rounded-lg  flex-row justify-between items-center bg-[#00CCBB]"
        onPress={() => navigation.navigate('Basket')}
      >
        <Text className='font-extrabold text-white bg-[#01A296] text-lg py-1 px-2'>{items.length}</Text>
        <Text className='font-extrabold text-white text-lg py-1 px-2'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>
          <Currency quantity={basketTotal} currency="UAH" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon