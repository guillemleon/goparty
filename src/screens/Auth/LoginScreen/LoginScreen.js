import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
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
import {Formik} from 'formik';
import {initialValues, loginValidationSchema} from './LoginValidationSchema';
import {ENV} from '../../../utils';

export function LoginScreen(props) {
  const {navigation} = props;

  const [httpCallInProgress, setHttpCallInProgress] = useState(false);
  const [httpCallError, setHttpCallError] = useState({
    hasError: false,
    status: null,
    message: '',
  });

  const handleNavigation = screen => {
    navigation.navigate(screen);
  };

  const onSubmit = async values => {
    setHttpCallInProgress(true);
    await fetch(`${ENV.BASE_API}/auth/login/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then(res => {
        if (res.status !== 200) {
          console.log(res.headers.map.message);
          setHttpCallError({
            hasError: true,
            status: res.status,
            message:
              res.headers.map.message ||
              `Sorry for the inconvenience, there was en error. Please, try again later`,
          });
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
        setHttpCallError({
          hasError: true,
          status: err.status,
          message: `${err.status} Sorry for the inconvenience, there was en error. Please, try again later.`,
        });
      })
      .finally(() => setHttpCallInProgress(false));
  };

  const hideModal = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.sphere}>
              <Image style={styles.image} source={loginImage} />
            </View>
            <Image style={styles.logo} source={logo} />

            <Formik
              initialValues={initialValues}
              validationSchema={loginValidationSchema}
              onSubmit={onSubmit}
              validateOnMount={false}
              validateOnChange={false}
              validateOnBlur={false}>
              {({
                handleChange,
                setFieldValue,
                handleSubmit,
                handleBlur,
                values,
                errors,
              }) => (
                <View>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                    placeholderTextColor={'rgba(0,0,0,.5)'}
                    inputMode="email"
                  />
                  {errors.email && (
                    <Text style={{color: '#ff4500'}}>{errors.email}</Text>
                  )}

                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Password"
                    placeholderTextColor={'rgba(0,0,0,.5)'}
                  />
                  {errors.password && (
                    <Text style={{color: '#ff4500'}}>{errors.password}</Text>
                  )}
                  <TouchableOpacity
                    style={styles.forgotPasswordButton}
                    onPress={() => {}}>
                    <Text style={styles.forgotPasswordButtonText}>
                      FORGOT YOUR PASSWORD?
                    </Text>
                  </TouchableOpacity>
                  <Button type="fire" onPress={handleSubmit}>
                    {httpCallInProgress ? (
                      <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                      <Text>LOGIN</Text>
                    )}
                  </Button>
                </View>
              )}
            </Formik>
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
