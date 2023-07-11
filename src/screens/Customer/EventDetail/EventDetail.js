import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './EventDetail.styles';
import {Image} from 'react-native-elements';
import Button from '../../../common/components/Button/Button';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function EventDetail(props) {
  const {route} = props;
  const event = route.params.event;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: event.event_image}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{event.event_name}</Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{event.event_city}</Text>
        <Text style={styles.placeName}>{event.event_company_name}</Text>
      </View>
      <View style={styles.datesContainer}>
        <Text style={styles.date}>{event.event_date}</Text>
        <Text style={styles.date}>{event.event_hour}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{event.event_description}</Text>
      </View>
      <View style={styles.mapContainer}>
        {/* <View style={styles.map}>
          <MapView
            customMapStyle={styles.mapStyle}
            provider={PROVIDER_GOOGLE}
            style={styles.mapStyle}
            initialRegion={{
              latitude: 41.3995345,
              longitude: 2.1909796,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
            mapType="standard"
          />
        </View> */}
        <Button type={'fire'}>Go to location</Button>
      </View>
    </ScrollView>
  );
}
