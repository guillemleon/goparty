import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Event.styles';
import {Image} from 'react-native-elements';
import {screen} from '../../../utils';

export default function Event({event, navigation}) {
  const isDay = '19:00:00' > event.event_hour;

  const handleNavigation = screen => {
    navigation.navigate(screen, {event: event});
  };

  return (
    <TouchableOpacity
      style={isDay ? styles.dayContainer : styles.nightContainer}
      onPress={() => handleNavigation(screen.customer.eventDetail.eventDetail)}
      activeOpacity={0.7}>
      {/* <Image source={{uri: event.event_image}} style={styles.image} /> */}
      <Image source={{uri: event.event_image}} style={styles.image} />
      <View
        style={isDay ? styles.dayDetailContainer : styles.nightDetailContainer}>
        <View
          style={[
            isDay ? styles.triangleDay : styles.triangleNight,
            styles.triangleCornerBottomLeft,
          ]}
        />
        <Text style={isDay ? styles.dayTitle : styles.nightTitle}>
          {event.event_name}
        </Text>
        <Text style={isDay ? styles.dayLocation : styles.nightLocation}>
          {event.event_city}
        </Text>
        <Text style={isDay ? styles.dayDescription : styles.nightDescription}>
          {event.event_description.slice(0, 50) + '...'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
