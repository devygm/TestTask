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
import SubmitButton from '../../components/SubmitButton';
import { login } from '../../utils/serviceManager';
import { showPopupAlertWithTitle } from '../../utils/showAlert';
import Navigation from '../../utils/navigation';
import { screenNames, auth } from '../../utils/constant';
import { Storage } from '../../storage/storage';
import { userData } from '../../utils/global';
import Loader from '../../components/Loader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  passwordContainer: {
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

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = { userPassword: '', isLoading: false };
  }

  onSubmitPress() {
    const username = this.props.navigation.state.params.userName;
    const password = this.state.userPassword;
    const trimmedPass = password.trim();
    if (_.isEmpty(trimmedPass)) {
      showPopupAlertWithTitle('Alert!', 'Please enter password');
      return;
    }
    this.setState({ isLoading: true });
    login(username, trimmedPass, (err, me) => {
      this.setState({ isLoading: false });
      if (!err) {
        userData.authToken = me.__authorizationHeader;
        userData.userName = username;
        Storage.setItemWithKeyAndValue(auth.AUTH_TOKEN, userData.authToken);
        Storage.setItemWithKeyAndValue(auth.USER_NAME, username);
        Navigation.sharedInstance().resetRouteName(screenNames.REPOSITORY_SEARCH);
      } else {
        showPopupAlertWithTitle('Alert!', 'Please enter valid credentials');
      }
    });
  }

  render() {
    const { isLoading, userPassword } = this.state;
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={'Password'}
          isShowBackButton
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter password'}
            secureTextEntry
            onChangeText={(text) => this.setState({ userPassword: text })}
            value={userPassword}
          />
          <SubmitButton
            style={styles.submitButton}
            onPress={() => this.onSubmitPress()}
            title={'Submit'}
          />
        </View>
        {isLoading && <Loader isAnimating={isLoading} />}
      </View>
    );
  }
}

export default Password;
