import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirebaseState from './context/firebase/firebaseState';
import {
  NewOrder,
  DishDetail,
  Menu,
  OrderSummary,
  OrderProgress,
  DishForm,
} from './views';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <FirebaseState>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#FFDA00'},
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
          <Stack.Screen
            name="NewOrder"
            component={NewOrder}
            options={{
              title: 'Nueva Orden',
            }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: 'Menu',
            }}
          />
          <Stack.Screen
            name="DishDetail"
            component={DishDetail}
            options={{
              title: 'Detalle Platillo',
            }}
          />
          <Stack.Screen
            name="DishForm"
            component={DishForm}
            options={{
              title: 'Nueva Orden',
            }}
          />
          <Stack.Screen
            name="OrderSummary"
            component={OrderSummary}
            options={{
              title: 'Nueva Orden',
            }}
          />
          <Stack.Screen
            name="OrderProgress"
            component={OrderProgress}
            options={{
              title: 'Nueva Orden',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FirebaseState>
  );
}

export default App;
