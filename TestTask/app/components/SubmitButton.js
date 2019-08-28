/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  UIColors, fontSizes, fontWeights, spacing,
} from '../utils/variables';

const styles = StyleSheet.create({
  container: {
    backgroundColor: UIColors.primaryButton,
  },
  button: {
    paddingVertical: spacing.semiMedium,
    paddingHorizontal: spacing.mediumLarge,
  },
  title: {
    color: UIColors.primaryButtonTitle,
    fontSize: fontSizes.small,
    textAlign: 'center',
    fontWeight: fontWeights.medium,
  },
});

const SubmitButton = (props) => {
  const { onPress, style, title } = props;
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

SubmitButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  style: PropTypes.object,
};

SubmitButton.defaultProps = {
  onPress: () => {},
  title: 'Submit',
  style: {},
};

export default SubmitButton;
