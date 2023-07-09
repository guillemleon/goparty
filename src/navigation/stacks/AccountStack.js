import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../../screens/Customer';
import {screen} from '../../utils';

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.customer.account.account}
        component={AccountScreen}
        options={{
          title: 'Account',
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
