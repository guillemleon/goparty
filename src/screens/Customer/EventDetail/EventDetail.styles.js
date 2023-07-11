import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    width: windowWidth,
    minHeight: '100%',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: 170,
    objectFit: 'cover',
  },
  detailsContainer: {
    width: windowWidth - 50,
    paddingTop: 25,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  locationContainer: {
    width: windowWidth - 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    color: '#FFFFFF',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  placeName: {
    color: '#FF6827',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  datesContainer: {
    width: windowWidth - 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: '#00CEFB',
    fontSize: 14,
  },
  descriptionContainer: {
    width: windowWidth - 50,
    marginVertical: 25,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  mapContainer: {
    width: windowWidth - 50,
  },
  map: {
    width: windowWidth - 50,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  mapStyle: {
    width: windowWidth - 50,
    height: 100,
    borderRadius: 10,
  },
});
