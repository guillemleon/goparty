import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Button.styles';
import LinearGradient from 'react-native-linear-gradient';

export default function Button(props) {
  const {type, onPress, children} = props;
  const fireColors = ['#F54B02', '#F59300'];
  const waterColors = ['#00CEFB', '#0073FB'];

  const getStyle = () => {
    switch (type) {
      case 'fire':
        return styles.fireButton;
      case 'water':
        return styles.waterButton;
      case 'void':
        return styles.voidButton;
      default:
        return styles.voidButton;
    }
  };

  return (
    <TouchableOpacity style={getStyle()} onPress={onPress}>
      {['fire', 'water'].includes(type) ? (
        <LinearGradient
          colors={type === 'fire' ? fireColors : waterColors}
          style={styles.linearGradient}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}>
          <Text style={styles.buttonText}>{children}</Text>
        </LinearGradient>
      ) : (
        <Text style={styles.buttonText}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
