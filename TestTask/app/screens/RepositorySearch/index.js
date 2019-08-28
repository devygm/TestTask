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
import { connect } from 'react-redux';
import _ from 'lodash';
import NavigationHeader from '../../components/NavigationHeader';
import SubmitButton from '../../components/SubmitButton';
import UserActions from '../../actions';
import { showPopupAlertWithTitle } from '../../utils/showAlert';
import Loader from '../../components/Loader';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  repositorySearchContainer: {
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

class RepositorySearch extends Component {
  constructor(props) {
    super(props);
    this.state = { repositoryName: 'facebook/react-native' };
  }

  onSubmitPress() {
    const { repositoryName } = this.state;
    const trimmedRepoName = repositoryName.trim();
    if (_.isEmpty(trimmedRepoName)) {
      showPopupAlertWithTitle('Alert!', 'Please enter repository name');
      return;
    }
    this.props.validateRepoRequest(trimmedRepoName);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={'Repository Search'}
          isShowLogoutButton
        />
        <View style={styles.repositorySearchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter repository name'}
            onChangeText={(text) => this.setState({ repositoryName: text })}
            value={this.state.repositoryName}
            clearButtonMode={'always'}
          />
          <SubmitButton
            style={styles.submitButton}
            onPress={() => this.onSubmitPress()}
            title={'Submit'}
          />
        </View>
        {this.props.isLoading && <Loader isAnimating={this.props.isLoading} />}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  profileImageResponse: state.getCommitsReducer.getCommitsResponse,
  isLoading: state.loaderReducers.isLoading,
});

const mapDispatchToProps = () => UserActions;

const RepositorySearchScreen = connect(mapStateToProps, mapDispatchToProps)(RepositorySearch);
export default RepositorySearchScreen;
