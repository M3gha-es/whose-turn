import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button, ListItem, Text, Icon} from 'react-native-elements';
import {MainLogo} from '../utils/tools';
import {MyContext} from '../context';

const ScreenOne = () => {
  const context = useContext(MyContext);
  const renderUsers = () =>
    context.state.users.map((item, idx) => (
      <ListItem
        key={idx}
        bottomDivider
        style={{width: '100%'}}
        onLongPress={() => context.removeUser(item)}>
        <Icon name="optin-monster" type="font-awesome" color="grey" />
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ));
  return (
    <>
      <Formik
        initialValues={{user: ''}}
        validationSchema={Yup.object({
          user: Yup.string()
            .min(3, 'Must be more than 3 char')
            .max(15, 'Must be 15 chars or less')
            .required('Sorry! The user name is required'),
        })}
        onSubmit={(values, {resetForm}) => {
          context.addUser(values.user);
          resetForm();
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <MainLogo />
            <Input
              placeholder="Add name here"
              leftIcon={
                <Icon name="adduser" type="antdesign" color="#4B088A" />
              }
              inputContainerStyle={styles.inputContainer}
              renderErrorMessage={errors.user && touched.user}
              errorMessage={errors.user}
              errorStyle={styles.error}
              onChangeText={handleChange('user')}
              onBlur={handleBlur('user')}
              value={values.user}
            />
            <Button
              buttonStyle={styles.button}
              title="Add User"
              titleStyle={styles.buttonTitle}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <View style={styles.listView}>
        {context.state.users && context.state.users.length > 0 ? (
          <>
            <Text>List of Users: </Text>
            {renderUsers()}
            <Button
              buttonStyle={styles.button}
              title="Select One"
              titleStyle={styles.buttonTitle}
              onPress={() => context.nextScreen()}
            />
          </>
        ) : null}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2F0B3A',
    marginTop: 20,
    raised: true,
    borderWidth: 4,
    borderColor: '#D8CEF6',
    borderRadius: 10,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  error: {
    marginHorizontal: 50,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  inputContainer: {
    marginHorizontal: 50,
    marginTop: 50,
  },
  listView: {
    padding: 20,
    width: '100%',
  },
});
export default ScreenOne;
