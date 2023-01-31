import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import Currency from 'react-currency-formatter';
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemWithId, selectBasketTotal } from '../features/basketSlice';


const DishRow = ({ item }) => {
  const { id, imgUrl, title, description, cost } = item;
  const [isPressed, setPressed] = useState(false);
  const dispatch = useDispatch();
  
  const items = useSelector((state) => selectBasketItemWithId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, title, description, cost, imgUrl }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  console.log(items);

  return (
    <>
  <TouchableOpacity
    key={item.id}
    onPress={() => setPressed(!isPressed)}
    className={`p-2 bg-gray-100 border border-gray-200 round-xl ${isPressed && 'border-b-0'}`}
  >
    <View className="flex-row justify-between p-2">
      <View className="flex-1">
        <Text className=" text-lg mb-1">{item.title}</Text>
        <Text className=" text-xs text-gray-400 pt-2">{item.description}</Text>

        <Text className=" text-xs text-gray-500">{item.delivery}</Text>
        <Text className=" text-xs text-gray-500 pt-2">
          <Currency quantity={item.cost} currency="UAH" />
        </Text>
      </View>
      <Image
        className="w-20 h-20 bg-gray-300 rounded-m p-4"
        source={{uri: item.imgUrl}}
      />
    </View>
  </TouchableOpacity>

  {isPressed && (
    <View className="w-full h-30 bg-gray-100">
      <View className="flex-row p-2 gap-3 items-center">
        <TouchableOpacity
          disabled={!items.length}
          onPress={removeItemFromBasket}
        >
          <MinusCircleIcon
            color={items.length > 0 ? "#00CCBB" : "gray"}
            size={40}
          />
        </TouchableOpacity>
        <Text>{items.length}</Text>
        <TouchableOpacity
          onPress={addItemToBasket}
        >
          <PlusCircleIcon color="#00CCBB" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  )}
  </>
  )
}

export default DishRow