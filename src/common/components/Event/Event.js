import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Event.styles';
import {Image} from 'react-native-elements';
import {screen} from '../../../utils';

export default function Event({event, navigation}) {
  const checkDayTime = '19:00:00' > event.event_hour;

  const handleNavigation = screen => {
    navigation.navigate(screen, {event: event});
  };

  return (
    <TouchableOpacity
      style={checkDayTime ? styles.dayContainer : styles.nightContainer}
      onPress={() => handleNavigation(screen.customer.eventDetail.eventDetail)}
      activeOpacity={0.7}>
      <Image source={{uri: event.event_image}} style={styles.image} />
      <View
        style={
          checkDayTime ? styles.dayDetailContainer : styles.nightDetailContainer
        }>
        <Text style={checkDayTime ? styles.dayTitle : styles.nightTitle}>
          {event.event_name}
        </Text>
        <Text style={checkDayTime ? styles.dayLocation : styles.nightLocation}>
          {event.event_city}
        </Text>
        <Text
          style={
            checkDayTime ? styles.dayDescription : styles.nightDescription
          }>
          {event.event_description.slice(0, 50) + '...'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
