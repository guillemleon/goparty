import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

export default function EventDetail(props) {
  const {route} = props;
  const event = route.params.event;

  return (
    <View>
      <Text style={{color: 'black', fontSize: 32}}>{event.event_name}</Text>
    </View>
  );
}
