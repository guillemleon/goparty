import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './AccountScreen.styles';
import {useAuth} from '../../../hooks';
import Button from '../../../common/components/Button/Button';

export function AccountScreen() {
  const {logout} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Button type="water" onPress={logout}>
        <Text> CERRAR SESION </Text>
      </Button>
    </SafeAreaView>
  );
}
