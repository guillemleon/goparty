import {StatusBar} from 'react-native';
import {AppNavigation} from './AppNavigation';
import {AuthNavigation} from './AuthNavigation';
import {useAuth} from '../hooks';

export function RootNavigation() {
  const {auth} = useAuth();

  console.log(auth);

  return (
    <>
      <StatusBar animated backgroundColor={'black'} />
      {auth ? <AppNavigation /> : <AuthNavigation />}
    </>
  );
}
