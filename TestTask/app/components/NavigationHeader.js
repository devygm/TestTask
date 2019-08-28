/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../assets/images';
import Navigation from '../utils/navigation';
import {
  spacing, itemSizes, UIColors, fontSizes, fontWeights,
} from '../utils/variables';
import { logout } from '../utils/serviceManager';

const styles = StyleSheet.create({
  container: {
    backgroundColor: UIColors.navigationBar,
    padding: spacing.semiMedium,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backbutton: {
    width: itemSizes.defaultWidth,
    height: itemSizes.defaultHeight,
  },
  title: {
    fontSize: fontSizes.medium,
    color: 'white',
    textAlign: 'center',
    fontWeight: fontWeights.medium,
  },
  emptyBox: {
    height: itemSizes.defaultHeight,
    width: itemSizes.defaultWidth,
  },
});

class NavigationHeader extends Component {
  onPressBack() {
    Navigation.sharedInstance().popScreen();
  }

  onPressLogout() {
    logout();
  }

  render() {
    const {
      isShowBackButton,
      isShowLogoutButton,
      title,
    } = this.props;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.subContainer}>
          {
            isShowBackButton
              ? (
                <TouchableOpacity
                  style={styles.backbutton}
                  onPress={() => this.onPressBack()}
                >
                  <Image source={images.backbutton} style={styles.backbutton} />
                </TouchableOpacity>
              )
              : (
                <View style={styles.emptyBox} />
              )
          }
          <Text style={styles.title}>{title}</Text>
          {
            isShowLogoutButton
              ? (
                <TouchableOpacity
                  style={styles.backbutton}
                  onPress={() => this.onPressLogout()}
                >
                  <Image source={images.logout} style={styles.backbutton} />
                </TouchableOpacity>
              )
              : (
                <View style={styles.emptyBox} />
              )
          }
        </SafeAreaView>
      </View>
    );
  }
}

NavigationHeader.propTypes = {
  isShowBackButton: PropTypes.bool,
  isShowLogoutButton: PropTypes.bool,
  title: PropTypes.string,
};

NavigationHeader.defaultProps = {
  isShowBackButton: false,
  isShowLogoutButton: false,
  title: 'TestApp',
};

export default NavigationHeader;
