/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  fontSizes, fontWeights, itemSizes,
} from '../../../utils/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'grey',
  },
  message: {
    fontSize: fontSizes.small,
    color: 'black',
    fontWeight: fontWeights.medium,
  },
  authorView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: itemSizes.defaultHeight,
    width: itemSizes.defaultWidth,
    borderRadius: itemSizes.defaultHeight / 2,
  },
});

const CommitRow = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{data.commit.message}</Text>
      <View style={styles.authorView}>
        <Image
          style={styles.avatar}
          source={{ uri: data.committer.avatar_url }}
        />
        <Text>{` ${data.commit.committer.name} || `}</Text>
        <Text>{data.commit.committer.date}</Text>
      </View>
    </View>
  );
};

CommitRow.propTypes = {
  data: PropTypes.object,
};

CommitRow.defaultProps = {
  data: {},
};

export default CommitRow;
