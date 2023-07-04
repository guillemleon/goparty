import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  input: {
    width: windowWidth - 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000000',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prefixInput: {
    width: 60,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000000',
    textAlign: 'center',
  },
  phoneInput: {
    width: windowWidth - 120,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  label: {
    color: '#FFF',
  },
  labelLink: {
    color: '#00CEFB',
    fontStyle: 'italic',
  },
});
