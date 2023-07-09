import {StatusBar} from 'react-native';
import {AppNavigation} from './AppNavigation';
import {AuthNavigation} from './AuthNavigation';
import {useAuth} from '../hooks';

export function RootNavigation() {
  const {auth} = useAuth();

  return (
    <>
      <StatusBar animated backgroundColor={'black'} />
      {auth?.decodeToken ? (
        <AppNavigation userType={auth?.type} />
      ) : (
        <AuthNavigation />
      )}
    </>
  );
}
