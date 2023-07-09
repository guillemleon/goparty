import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuth} from '../hooks';

export function CompanyNavigation() {
  const {logout} = useAuth();

  return (
    <SafeAreaView>
      <Text style={{color: 'black', textAlign: 'center', marginBottom: 50}}>
        COMPANY LOGIN
      </Text>
      <TouchableOpacity
        onPress={logout}
        style={{
          height: 50,
          width: 200,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text> CERRAR SESION </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
