/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import NavigationHeader from '../../components/NavigationHeader';
import UserActions from '../../actions';
import CommitList from './components/CommitList';
import Loader from '../../components/Loader';
import { spacing } from '../../utils/variables';
import EmptyScreen from '../../components/EmptyScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  repositoriesContainer: {
    padding: spacing.semiMedium,
  },
});

class Repositories extends Component {
  componentDidMount() {
    this.getUserRepoList();
  }

  onRefresh() {
    this.getUserRepoList();
  }

  getUserRepoList() {
    const { repo } = this.props.navigation.state.params;
    this.props.getUserReposRequest(repo);
  }


  render() {
    const { commitsData } = this.props;
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={'Repositories'}
          isShowLogoutButton
          isShowBackButton
        />
        {
          commitsData && commitsData.length > 0
            ? (
              <CommitList
                list={commitsData}
                onRefresh={() => this.onRefresh()}
                refreshing={false}
              />
            )
            : <EmptyScreen title={'Sorry! there is not commits available'} />
        }
        {this.props.isLoading && <Loader isAnimating={this.props.isLoading} />}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  commitsData: state.getCommitsReducer.getCommitsResponse,
  isLoading: state.loaderReducers.isLoading,
});

const mapDispatchToProps = () => UserActions;

const RepositoriesScreen = connect(mapStateToProps, mapDispatchToProps)(Repositories);
export default RepositoriesScreen;
