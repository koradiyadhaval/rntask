import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// In App.js in a new project

import * as React from 'react';
import { First } from '../screens/First';
import { Second } from '../screens/Second';
import { Third } from '../screens/Third';


export const Route=()=>
 {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"First"}>
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Second" component={Second} />
          <Stack.Screen name="Third" component={Third} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
