import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {screen} from '../utils';
import {AccountStack, FavouritesStack, HomeStack, SearchStack} from './stacks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigationCustomer() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: '#000000', borderTopWidth: 0},
        tabBarActiveTintColor: '#FF6827',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarIcon: props => tabIcon({route, ...props}),
        tabBarLabel: () => {
          return null;
        },
      })}>
      <Tab.Screen
        name={screen.customer.home.tab}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={screen.customer.search.tab}
        component={SearchStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={screen.customer.favourites.tab}
        component={FavouritesStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={screen.customer.account.tab}
        component={AccountStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function tabIcon(props) {
  const {route, size, color, focused} = props;

  let iconName = 'home';

  if (route.name === screen.customer.home.tab) iconName = 'home';
  if (route.name === screen.customer.search.tab) iconName = 'magnify';
  if (route.name === screen.customer.favourites.tab) iconName = 'bookmark';
  if (route.name === screen.customer.account.tab) iconName = 'account-circle';

  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
}
