/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Navigation from '../../utils/navigation';
import { screenNames, auth } from '../../utils/constant';
import { Storage } from '../../storage/storage';
import { userData } from '../../utils/global';

class Splash extends Component {
  constructor(props) {
    super(props);
    Navigation.sharedInstance().setAppNavigation(props.navigation);
  }

  componentDidMount() {
    this.goToScreen();
  }

  goToScreen() {
    Storage.getMultipleItemWithKeys([auth.AUTH_TOKEN, auth.USER_NAME], (response) => {
      let screenName = screenNames.LOGIN_SCREEN;
      if (response) {
        const authToken = response[0][1];
        const userName = response[1][1];
        userData.authToken = JSON.parse(authToken);
        userData.userName = JSON.parse(userName);
        if (userData.authToken && userData.userName) {
          screenName = screenNames.REPOSITORY_SEARCH;
        }
      }
      Navigation.sharedInstance().resetRouteName(
        screenName,
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Splash</Text>
      </View>
    );
  }
}

export default Splash;
