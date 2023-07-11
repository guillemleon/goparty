import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  dayContainer: {
    backgroundColor: '#FFFFFF',
    width: windowWidth - 50,
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    objectFit: 'cover',
  },
  triangleDay: {
    position: 'absolute',
    borderRightWidth: 100,
    borderTopWidth: 29.9,
    borderRightColor: 'transparent',
    borderTopColor: '#FFFFFF',
    top: 35.1,
    left: -64.9,
  },
  triangleNight: {
    position: 'absolute',
    borderRightWidth: 100,
    borderTopWidth: 25,
    borderRightColor: 'transparent',
    borderTopColor: '#242424',
    top: 37.5,
    left: -62.2,
  },
  triangleCornerBottomLeft: {
    transform: [{rotate: '90deg'}],
  },
  dayDetailContainer: {
    height: 100,
    width: 170,
    padding: 10,
  },
  dayTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  dayLocation: {
    fontSize: 10,
    color: 'black',
    textTransform: 'uppercase',
  },
  dayDescription: {
    fontSize: 10,
    color: 'black',
    paddingTop: 10,
  },
  nightContainer: {
    backgroundColor: '#242424',
    width: windowWidth - 50,
    height: 100,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  nightDetailContainer: {
    height: 100,
    width: 170,
    padding: 10,
  },
  nightTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  nightLocation: {
    fontSize: 10,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  nightDescription: {
    fontSize: 10,
    color: '#FFFFFF',
    paddingTop: 10,
  },
});
