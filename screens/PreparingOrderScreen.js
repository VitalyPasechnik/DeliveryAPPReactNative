import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        animation="slideInUp"
        source={require('../assets/image/Delivery.gif')}
        iterationCount={1}
        // direction="alternate"
        className="h-80 w-80 bg-[#00CCBB] rounded-lg"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white font-extrabold my-10"
      >
        Waiting for preparing the order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen