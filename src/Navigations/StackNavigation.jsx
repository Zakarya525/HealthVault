import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Slash'>
      <Stack.Screen name="Splash" component={Splash}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default StackNavigation