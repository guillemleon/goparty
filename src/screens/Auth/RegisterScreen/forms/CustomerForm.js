import {View, TextInput, Text, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Form.styles';
import Button from '../../../../common/components/Button/Button';
import {Formik} from 'formik';
import {customerRegisterValidationSchema} from './FormValidationSchemas';
import CustomModal from '../../../../common/components/CustomModal/CustomModal';
import {ENV} from '../../../../utils';

export default function CustomerForm(props) {
  const {navigation} = props;

  const [httpCallInProgress, setHttpCallInProgress] = useState(false);
  const [httpCallError, setHttpCallError] = useState({
    hasError: false,
    status: null,
    message: '',
  });

  const onSubmit = async values => {
    setHttpCallInProgress(true);
    await fetch(`${ENV.BASE_API}/auth/register/customer/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        first_name: values.name,
        last_name: values.lastName,
        phone: values.phone,
        password: values.password,
      }),
    })
      .then(res => {
        if (res.status !== 201) {
          console.log(res.headers.map.message);
          setHttpCallError({
            hasError: true,
            status: res.status,
            message:
              res.headers.map.message ||
              `Sorry for the inconvenience, there was en error. Please, try again later`,
          });
        } else navigation.goBack();
      })
      .catch(err => {
        setHttpCallError({
          hasError: true,
          status: err.status,
          message: `${err.status} Sorry for the inconvenience, there was en error. Please, try again later.`,
        });
      })
      .finally(() => setHttpCallInProgress(false));
  };

  const hideModal = () => {
    setHttpCallError(prevState => {
      return {...prevState, hasError: false};
    });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        prefix: '',
        phone: '',
        /* termsAccepted: false, */
      }}
      validationSchema={customerRegisterValidationSchema}
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
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Name"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            inputMode="text"
          />
          {errors.name && <Text style={{color: '#ff4500'}}>{errors.name}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            placeholder="Last Name"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            inputMode="text"
          />
          {errors.lastName && (
            <Text style={{color: '#ff4500'}}>{errors.lastName}</Text>
          )}
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
            inputMode="text"
          />
          {errors.password && (
            <Text style={{color: '#ff4500'}}>{errors.password}</Text>
          )}
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={handleChange('repeatPassword')}
            onBlur={handleBlur('repeatPassword')}
            value={values.repeatPassword}
            placeholder="Repeat password"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            inputMode="text"
          />
          {errors.repeatPassword && (
            <Text style={{color: '#ff4500'}}>{errors.repeatPassword}</Text>
          )}
          <View style={styles.phoneInputContainer}>
            <TextInput
              style={styles.prefixInput}
              onChangeText={handleChange('prefix')}
              onBlur={handleBlur('prefix')}
              value={values.prefix}
              placeholder="+34"
              placeholderTextColor={'rgba(0,0,0,.5)'}
              inputMode="decimal"
            />
            <TextInput
              style={styles.phoneInput}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              placeholder="Phone"
              placeholderTextColor={'rgba(0,0,0,.5)'}
              inputMode="tel"
            />
          </View>
          {errors.phone && (
            <Text style={{color: '#ff4500'}}>{errors.phone}</Text>
          )}
          {/* <View style={styles.checkboxContainer}>
            <Checkbox
              value={values.termsAccepted}
              onValueChange={() =>
                setFieldValue('termsAccepted', !values.termsAccepted)
              }
              style={styles.checkbox}
            />
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Accept </Text>
              <TouchableOpacity>
                <Text style={styles.labelLink}>terms and services</Text>
              </TouchableOpacity>
            </View>
          </View>
          {errors.termsAccepted && (
            <Text style={{color: '#ff4500'}}>{errors.termsAccepted}</Text>
          )} */}
          <Button type="fire" onPress={handleSubmit}>
            {httpCallInProgress ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text>SUBMIT</Text>
            )}
          </Button>
          <CustomModal
            show={httpCallError.hasError}
            onOutsidePress={hideModal}
            onButtonPress={hideModal}
            title={'ERROR: '}
            message={httpCallError.message}
          />
        </View>
      )}
    </Formik>
  );
}
