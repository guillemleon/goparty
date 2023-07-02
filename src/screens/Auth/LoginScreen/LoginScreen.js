import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './LoginScreen.styles';
import loginImage from '../../../assets/images/login.jpg';
import logo from '../../../assets/images/logo.png';
import facebookLogo from '../../../assets/images/facebook-logo.png';
import googleLogo from '../../../assets/images/google-logo.png';
import Button from '../../../common/components/Button/Button';
import {screen} from '../../../utils';

export function LoginScreen(props) {
  const {navigation} = props;

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const handleNavigation = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.sphere}>
              <Image style={styles.image} source={loginImage} />
            </View>
            <Image style={styles.logo} source={logo} />

            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor={'rgba(0,0,0,.5)'}
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              secureTextEntry={true}
              value={password}
              placeholder="Password"
              placeholderTextColor={'rgba(0,0,0,.5)'}
            />
            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={() => {}}>
              <Text style={styles.forgotPasswordButtonText}>
                FORGOT YOUR PASSWORD?
              </Text>
            </TouchableOpacity>
            <Button type={'fire'}>LOGIN</Button>
            <Button
              type={'void'}
              onPress={() => handleNavigation(screen.auth.register)}>
              REGISTER WITH EMAIL
            </Button>
            <View style={styles.separator}>
              <View style={styles.line}></View>
              <Text style={{color: '#FFF', marginHorizontal: 10}}>O</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.oAuthButtons}>
              <TouchableOpacity style={styles.oAuthButton} onPress={() => {}}>
                <Image style={styles.oAuthLogo} source={facebookLogo} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.oAuthButton} onPress={() => {}}>
                <Image style={styles.oAuthLogo} source={googleLogo} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
