import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '../../screens/Customer';
import {screen} from '../../utils';

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.customer.search.search}
        component={SearchScreen}
        options={{
          title: 'Search',
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
