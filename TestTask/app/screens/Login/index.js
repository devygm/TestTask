/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import _ from 'lodash';
import NavigationHeader from '../../components/NavigationHeader';
import Navigation from '../../utils/navigation';
import { screenNames } from '../../utils/constant';
import SubmitButton from '../../components/SubmitButton';
import { showPopupAlertWithTitle } from '../../utils/showAlert';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    padding: 10,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  submitButton: {
    marginTop: 20,
  },
});

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  onSubmitPress() {
    const { userName } = this.state;
    const trimmedUserName = userName.trim();
    if (_.isEmpty(trimmedUserName)) {
      showPopupAlertWithTitle('Alert!', 'Please enter username');
      return;
    }
    Navigation.sharedInstance().pushToScreen(screenNames.PASSWORD_SCREEN,
      { userName: trimmedUserName });
  }

  render() {
    const { userName } = this.state;
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={'Login'}
        />
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter username'}
            onChangeText={(text) => this.setState({ userName: text })}
            value={userName}
          />
          <SubmitButton
            style={styles.submitButton}
            onPress={() => this.onSubmitPress()}
            title={'Submit'}
          />
        </View>
      </View>
    );
  }
}

export default Login;
