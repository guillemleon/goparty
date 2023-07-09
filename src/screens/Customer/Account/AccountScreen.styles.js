import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242424',
    width: windowWidth,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 25,
    paddingBottom: 15,
  },
});
