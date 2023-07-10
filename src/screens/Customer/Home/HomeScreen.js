import {
  ScrollView,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './HomeScreen.styles';
import {Auth} from '../../../api';
import {ENV} from '../../../utils';
import {useAuth} from '../../../hooks';
import Event from '../../../common/components/Event/Event';

const auth = new Auth();

export function HomeScreen(props) {
  const {navigation} = props;
  const {accessToken} = useAuth();

  const [events, setEvents] = useState([]);
  const [httpCallInProgress, setHttpCallInProgress] = useState(false);
  const [httpCallError, setHttpCallError] = useState({
    hasError: false,
    status: null,
    message: '',
  });

  useEffect(() => {
    setHttpCallInProgress(true);
    if (accessToken) {
      (async () => {
        try {
          const response = await auth.get(
            ENV.API_ROUTES.EVENTS,
            accessToken,
            setHttpCallError,
          );
          setEvents(response);
        } catch {
          setHttpCallError({
            hasError: true,
            status: 500,
            message: `Sorry for the inconvenience, there was en error. Please, try again later.`,
          });
        }
      })().finally(() => setHttpCallInProgress(false));
    }
    setHttpCallInProgress(false);
  }, [accessToken]);

  return (
    <View style={{backgroundColor: '#242424', height: '100%', width: '100%'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          placeholder="Search and discover"
          placeholderTextColor={'rgba(0,0,0,.5)'}
          value=""
          style={styles.textInput}
        />
        <View style={styles.listContainer}>
          <Text style={styles.title}>UPCOMING EVENTS</Text>
        </View>
        {httpCallInProgress ? (
          <ActivityIndicator
            size={'large'}
            color={'#FF6827'}
            style={{marginVertical: 25}}
          />
        ) : (
          <View>
            {events?.map(event => (
              <Event key={event.id} event={event} navigation={navigation} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
