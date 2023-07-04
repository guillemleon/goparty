import {View, TextInput, Text, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Form.styles';
import Button from '../../../../common/components/Button/Button';
import {Formik} from 'formik';
import {companyRegisterValidationSchema} from './FormValidationSchemas';
import CustomModal from '../../../../common/components/CustomModal/CustomModal';
import {ENV} from '../../../../utils';

export default function CompanyForm(props) {
  const {navigation} = props;

  const [httpCallInProgress, setHttpCallInProgress] = useState(false);
  const [httpCallError, setHttpCallError] = useState({
    hasError: false,
    status: null,
    message: '',
  });

  const onSubmit = values => {
    setHttpCallInProgress(true);
    fetch(`${ENV.BASE_API}/auth/register/company/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_name: values.companyName,
        email: values.email,
        password: values.password,
        phone: values.phone,
        country: values.country,
        address: values.address,
        cif: values.cif,
        description: values.description,
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
        companyName: '',
        country: '',
        address: '',
        cif: '',
        description: '',
        email: '',
        password: '',
        repeatPassword: '',
        prefix: '',
        phone: '',
        /*  termsAccepted: false, */
      }}
      validationSchema={companyRegisterValidationSchema}
      onSubmit={onSubmit}
      validateOnMount={false}
      validateOnChange={false}
      validateOnBlur={false}>
      {({
        handleChange,
        handleSubmit,
        setFieldValue,
        handleBlur,
        values,
        errors,
      }) => (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('companyName')}
            onBlur={handleBlur('companyName')}
            value={values.companyName}
            placeholder="Company Name"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            inputMode="text"
          />
          {errors.companyName && (
            <Text style={{color: '#ff4500'}}>{errors.companyName}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
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
              placeholder="+34"
              placeholderTextColor={'rgba(0,0,0,.5)'}
              onChangeText={handleChange('prefix')}
              onBlur={handleBlur('prefix')}
              value={values.prefix}
              inputMode="decimal"
            />
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone"
              placeholderTextColor={'rgba(0,0,0,.5)'}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              inputMode="tel"
            />
          </View>
          {errors.phone && (
            <Text style={{color: '#ff4500'}}>{errors.phone}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Country"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            onChangeText={handleChange('country')}
            onBlur={handleBlur('country')}
            value={values.country}
            inputMode="text"
          />
          {errors.country && (
            <Text style={{color: '#ff4500'}}>{errors.country}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
            inputMode="text"
          />
          {errors.address && (
            <Text style={{color: '#ff4500'}}>{errors.address}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="CIF"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            onChangeText={handleChange('cif')}
            onBlur={handleBlur('cif')}
            value={values.cif}
            inputMode="text"
          />
          {errors.cif && <Text style={{color: '#ff4500'}}>{errors.cif}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor={'rgba(0,0,0,.5)'}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
            inputMode="text"
            multiline={true}
            maxLength={500}
          />
          {errors.description && (
            <Text style={{color: '#ff4500'}}>{errors.description}</Text>
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
