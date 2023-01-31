import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen options={{ presentation: 'modal', headerShown: false }} name="Basket" component={BasketScreen} />
            <Stack.Screen options={{ presentation: 'fullScreenModal', headerShown: false }} name="Preparing" component={PreparingOrderScreen} />
            <Stack.Screen options={{ presentation: 'fullScreenModal', headerShown: false }} name="Delivery" component={DeliveryScreen} />
          </Stack.Navigator>
        </TailwindProvider >
      </Provider>
    </NavigationContainer>
  );
}