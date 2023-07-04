import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import registerImage from '../../../assets/images/register.jpg';
import {styles} from './RegisterScreen.styles';
import CompanyForm from './forms/CompanyForm';
import CustomerForm from './forms/CustomerForm';

export function RegisterScreen(props) {
  const {navigation} = props;
  const [registerType, setRegisterType] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.sphere}>
              <Image style={styles.image} source={registerImage} />
            </View>
            <View style={styles.sectionTitles}>
              <TouchableOpacity
                style={
                  registerType === 0
                    ? styles.titleButtonSelected
                    : styles.titleButton
                }
                onPress={() => setRegisterType(0)}>
                <Text style={styles.title}>CUSTOMER</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  registerType === 1
                    ? styles.titleButtonSelected
                    : styles.titleButton
                }
                onPress={() => setRegisterType(1)}>
                <Text style={styles.title}>COMPANY</Text>
              </TouchableOpacity>
            </View>

            {registerType === 0 ? (
              <CustomerForm navigation={navigation} />
            ) : (
              <CompanyForm navigation={navigation} />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
