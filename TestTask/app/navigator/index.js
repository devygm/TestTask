import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Password from '../screens/Password';
import RepositorySearch from '../screens/RepositorySearch';
import Repositories from '../screens/Repositories';
import { screenNames } from '../utils/constant';

const MainNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      key: screenNames.SPLASH_SCREEN,
    },
    Login: {
      screen: Login,
      key: screenNames.LOGIN_SCREEN,
    },
    Password: {
      screen: Password,
      key: screenNames.PASSWORD_SCREEN,
    },
    RepositorySearch: {
      screen: RepositorySearch,
      key: screenNames.REPOSITORY_SEARCH,
    },
    Repositories: {
      screen: Repositories,
      key: screenNames.REPOSITORIES,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);
const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;
