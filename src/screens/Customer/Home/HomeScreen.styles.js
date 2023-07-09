import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242424',
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    paddingVertical: 25,
  },
  textInput: {
    width: windowWidth - 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    color: '#000000',
    paddingHorizontal: 25,
  },
  listContainer: {
    width: windowWidth - 50,
    marginTop: 25,
  },
  title: {
    alignSelf: 'flex-start',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
  },
});
