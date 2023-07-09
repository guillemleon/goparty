import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {RootNavigation} from './src/navigation/RootNavigation';
import SplashScreen from 'react-native-splash-screen';
import {AuthProvider} from './src/context';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 700);
  }, []);

  return (
    <AuthProvider>
      <View style={styles.container}>
        <RootNavigation />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
