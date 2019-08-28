/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import CommitRow from './CommitRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CommitList = (props) => {
  const { list, onRefresh } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={(item) => (
          <CommitRow
            data={item.item}
          />
        )}
        refreshControl={(
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={false}
          />
        )}
      />
    </View>
  );
};

CommitList.propTypes = {
  list: PropTypes.array,
  onRefresh: PropTypes.func,
};

CommitList.defaultProps = {
  list: [],
  onRefresh: () => { },
};

export default CommitList;
