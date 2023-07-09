import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/Customer';
import {screen} from '../../utils';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.customer.home.home}
        component={HomeScreen}
        options={{
          title: 'Home',
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
