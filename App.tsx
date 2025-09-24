import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductosScreen from './src/screens/ProductosScreen';
import NuevoProductoScreen from './src/screens/NuevoProductoScreen';
import DetalleProductoScreen from './src/screens/DetalleProductoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Productos" 
          component={ProductosScreen}
          options={{ title: 'Gestión de Productos' }}
        />
        <Stack.Screen 
          name="NuevoProducto" 
          component={NuevoProductoScreen}
          options={{ title: 'Nuevo Producto' }}
        />
        <Stack.Screen 
          name="DetalleProducto" 
          component={DetalleProductoScreen}
          options={{ title: 'Detalle del Item' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}