import {ScrollView, View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './HomeScreen.styles';

export function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Search and discover"
        placeholderTextColor={'rgba(0,0,0,.5)'}
        value=""
        style={styles.textInput}
      />
      <View style={styles.listContainer}>
        <Text style={styles.title}>UPCOMING EVENTS</Text>
      </View>
    </ScrollView>
  );
}
