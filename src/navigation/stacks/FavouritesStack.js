import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FavouritesScreen} from '../../screens/Customer';
import {screen} from '../../utils';

const Stack = createNativeStackNavigator();

export function FavouritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.customer.favourites.favourites}
        component={FavouritesScreen}
        options={{
          title: 'Favourites',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#FFFFFF'},
          headerStyle: {
            backgroundColor: '#000000',
          },
        }}
      />
    </Stack.Navigator>
  );
}
