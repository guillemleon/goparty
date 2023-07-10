import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigationCustomer from './TabNavigationCustomer';
import {screen} from '../utils';

const Stack = createNativeStackNavigator();

export function CustomerNavigation() {
  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: '#242424'}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={screen.customer.tab}
            component={TabNavigationCustomer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
