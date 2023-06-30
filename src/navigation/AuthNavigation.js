import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen} from '../screens/Auth';
import {SafeAreaView} from 'react-native';
import {screen} from '../utils';

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTransparent: true}}>
          <Stack.Screen
            name={screen.auth.login}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={screen.auth.register}
            component={RegisterScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
